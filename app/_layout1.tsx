import { Stack } from "expo-router";
import { FontAwesome } from "@expo/vector-icons";
import explore from "@/app/tabs/explore";



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
          headerShown: false, // Ocultar o cabeçalho
          gestureEnabled: false, // Desabilitar a navegação por gesto de voltar
        }} 
      />
       
    </Stack>
    

    /*
     <Stack.Screen name="explorar" options={{  
            headerShown: false,
        }}/>  
    
    
    
    
    
    <Tabs>
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