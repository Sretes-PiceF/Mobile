import { useRouter } from "expo-router";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";

const chatData = [
    { id: "teman", name: "Teman", message: "Ayo main sore ini!", time: "16:20" },
    { id: "ibu", name: "Ibu", message: "Jangan lupa makan ya.", time: "15:45" },
    { id: "om", name: "Om", message: "Besok kita ke rumah nenek.", time: "14:10" },
];

export default function Chats() {
    const router = useRouter();

    return (
        <View style={styles.container}>
            <FlatList
                data={chatData}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <TouchableOpacity
                        style={styles.chatItem}
                        onPress={() => router.push(`/chat/${item.id}`)}
                    >
                        <View style={styles.avatar}>
                            <Text style={styles.avatarText}>{item.name.charAt(0)}</Text>
                        </View>
                        <View style={styles.chatInfo}>
                            <View style={styles.chatHeader}>
                                <Text style={styles.name}>{item.name}</Text>
                                <Text style={styles.time}>{item.time}</Text>
                            </View>
                            <Text style={styles.message}>{item.message}</Text>
                        </View>
                    </TouchableOpacity>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: "#fff" },
    chatItem: {
        flexDirection: "row",
        padding: 15,
        borderBottomWidth: 1,
        borderColor: "#eee",
    },
    avatar: {
        backgroundColor: "#075E54",
        width: 48,
        height: 48,
        borderRadius: 24,
        justifyContent: "center",
        alignItems: "center",
    },
    avatarText: {
        color: "#fff",
        fontSize: 18,
        fontWeight: "bold",
    },
    chatInfo: {
        flex: 1,
        marginLeft: 15,
        justifyContent: "center",
    },
    chatHeader: {
        flexDirection: "row",
        justifyContent: "space-between",
    },
    name: {
        fontWeight: "bold",
        fontSize: 16,
    },
    time: {
        fontSize: 12,
        color: "gray",
    },
    message: {
        color: "gray",
        marginTop: 2,
    },
});
