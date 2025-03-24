import { Stack } from "expo-router";
import { Tabs } from 'expo-router';
import { FontAwesome } from "@expo/vector-icons";



export default function RootLayout () {
    return (
      <Stack >
        <Stack.Screen name="index"options={{ 
            headerShown: false,
        }}/>
        <Stack.Screen name="registrar"options={{
            headerShown: false,
        }}/>

        <Stack.Screen name="explore" options={{
             headerLeft: () => null, // Isso remove o botão de voltar
        }}/>

    </Stack>
    

    /*<Tabs>
        <Tabs.Screen
            name="index"
            options={{
                headerShown: false,
                title: "login",
                tabBarIcon: ({ focused, color, size }) => {
                    if (focused){
                        return <FontAwesome name="tags" color={color} size={size} />
                    }

                    return <FontAwesome name="tag" color={color} size={size} />

                }
            }}
        
        />
    </Tabs>*/


    );
}