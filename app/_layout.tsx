import { Slot } from "expo-router";

export default function RootLayout() {
  return <Slot />;
}



// import Ionicons from "@expo/vector-icons/Ionicons";
// import { Tabs } from "expo-router";

// export default function Layout() {
//   return (
//     <Tabs
//       screenOptions={{
//         tabBarLabelStyle: {
//           fontWeight: "bold",
//           fontSize: 13,
//           textTransform: "uppercase",
//         },
//         tabBarStyle: {
//           backgroundColor: "#075E54",
//         },
//         tabBarActiveTintColor: "#fff",
//         tabBarInactiveTintColor: "#cfd8dc",
//         headerStyle: {
//           backgroundColor: "#075E54",
//         },
//         headerTintColor: "#fff",
//       }}
//     >
//       <Tabs.Screen
//         name="chats"
//         options={{
//           title: "Chats",
//           tabBarLabel: "Chats",
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons
//               name={focused ? "chatbubbles" : "chatbubbles-outline"}
//               size={20}
//               color={color}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="status"
//         options={{
//           title: "Status",
//           tabBarLabel: "Status",
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons
//               name={focused ? "ellipse" : "ellipse-outline"}
//               size={20}
//               color={color}
//             />
//           ),
//         }}
//       />
//       <Tabs.Screen
//         name="calls"
//         options={{
//           title: "Calls",
//           tabBarLabel: "Calls",
//           tabBarIcon: ({ color, focused }) => (
//             <Ionicons
//               name={focused ? "call" : "call-outline"}
//               size={20}
//               color={color}
//             />
//           ),
//         }}
//       />
//     </Tabs>
//   );
// }





// <SafeAreaView style={{ flex: 1, backgroundColor: "white" }}>
//   <Stack>
//     <Stack.Screen name='/index' />
//     <Stack.Screen name='/profile' />
//   </Stack>
// </SafeAreaView>


// <GestureHandlerRootView style={{ flex: 1 }}>
//   <Drawer>
//     <Drawer.Screen
//       name="index"
//       options={{
//         drawerLabel: 'Home',
//         title: 'Home',
//       }}
//     />
//     <Drawer.Screen
//       name="profile"
//       options={{
//         drawerLabel: 'Profile',
//         title: 'Profile',
//       }}
//     />
//   </Drawer>
// </GestureHandlerRootView>