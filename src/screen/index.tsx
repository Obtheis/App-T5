import {Text, View} from "react-native"

interface IndexPageProps {
    name:string;
    age:number;
}
export default function IndexPage({name,age}:IndexPageProps) {
    return (
        <View>
            <Text>  Index page</Text>
            <Text>{name}</Text>
            <Text>{age}</Text>
        </View>
    )
}