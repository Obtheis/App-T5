import { useState } from "react";
import {Button, Text,TextInput,View} from "react-native";

export default function Login() {
    const [count,setCount]=useState(0)
    const handleChangeCount =(value:number) => {
            if (value>=1 || value <=10) {
                setCount(count+value)}
    }
    const handleScore =() => {
        if (count>=8) {
            return "Gioi";
        }
        else if (count>=5) {
            return "Kha";
        }
        else if (count>=3) {
            return "Trung binh";
        }
        else {
            return "Yeu";
        }
    }

return(
    <View>
        <Button title="-" onPress={() =>{
            handleChangeCount(-1)
        }}/>
        <Button title="+" onPress={() => {
            handleChangeCount(+1)
        }}/>
        <Text>{count}</Text>
        <Text 
            style= {{
                color: count >=8 ? "green" :(count>=5 ? "blue" : (count >=3 ? "red":"grey"))
            }}
            >{handleScore()}</Text>
    </View>
)
}
