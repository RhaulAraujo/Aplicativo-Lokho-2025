import { Stack } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import explore from "@/src/app/tabs/explore";



export default function RootLayout () {
    return (
      <Stack >
        <Stack.Screen name="index"options={{ 
            headerShown: false,
        }}/>
        <Stack.Screen name="registrar"options={{
            headerShown: false,
        }}/>
        <Stack.Screen name="explore"options={{
          headerShown: false, 
          gestureEnabled: false, 
        }}/>
        <Stack.Screen name="Atividade"options={{
            headerShown: false,
        }}/>
       
    </Stack>
    


    );
}