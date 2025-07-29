import { Ionicons } from "@expo/vector-icons";
import { router, useLocalSearchParams } from "expo-router";
import { useState } from "react";
import {
    FlatList,
    KeyboardAvoidingView,
    Platform,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from "react-native";

export default function ChatDetail() {
    const { id } = useLocalSearchParams();
    const [input, setInput] = useState("");
    const [messages, setMessages] = useState([
        { id: "1", text: "Hai, ada waktu ngobrol?", sender: "teman" },
        { id: "2", text: "Tentu saja!", sender: "me" },
    ]);

    const sendMessage = () => {
        if (input.trim() === "") return;
        setMessages([...messages, { id: Date.now().toString(), text: input, sender: "me" }]);
        setInput("");
    };

    return (
        <SafeAreaView style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()}>
                    <Ionicons name="arrow-back" size={24} color="white" />
                </TouchableOpacity>
                <Text style={styles.headerTitle}>{id}</Text>
            </View>

            {/* Chat List */}
            <FlatList
                data={messages}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <View
                        style={[
                            styles.messageBubble,
                            item.sender === "me" ? styles.bubbleRight : styles.bubbleLeft,
                        ]}
                    >
                        <Text>{item.text}</Text>
                    </View>
                )}
                contentContainerStyle={{ padding: 10 }}
            />

            {/* Input */}
            <KeyboardAvoidingView
                behavior={Platform.OS === "ios" ? "padding" : undefined}
                keyboardVerticalOffset={90}
            >
                <View style={styles.inputContainer}>
                    <TextInput
                        placeholder="Tulis pesan..."
                        style={styles.input}
                        value={input}
                        onChangeText={setInput}
                    />
                    <TouchableOpacity onPress={sendMessage}>
                        <Ionicons name="send" size={24} color="green" />
                    </TouchableOpacity>
                </View>
            </KeyboardAvoidingView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#e7ddd2",
    },
    header: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#075E54",
        padding: 15,
        paddingTop: 50,
    },
    headerTitle: {
        color: "white",
        fontSize: 18,
        marginLeft: 15,
        fontWeight: "bold",
    },
    messageBubble: {
        maxWidth: "75%",
        padding: 10,
        marginVertical: 5,
        borderRadius: 15,
    },
    bubbleLeft: {
        backgroundColor: "white",
        alignSelf: "flex-start",
    },
    bubbleRight: {
        backgroundColor: "#d2f8d2",
        alignSelf: "flex-end",
    },
    inputContainer: {
        flexDirection: "row",
        backgroundColor: "white",
        padding: 8,
        alignItems: "center",
        borderTopWidth: 1,
        borderColor: "#ccc",
        paddingBottom: Platform.OS === "android" ? 15 : 0,
    },
    input: {
        flex: 1,
        backgroundColor: "#f2f2f2",
        borderRadius: 20,
        paddingHorizontal: 15,
        marginRight: 10,
    },
});
