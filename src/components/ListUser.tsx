import { Text, View } from "react-native";

interface PropsType {
  listUsers: {
    name: string;
    age: number;
  }[]
}

export default function ListUser({ listUsers }: PropsType) {
  return (
    <View>
      <Text>List User</Text>
      {
        listUsers.map((item, index) => (
          <View key={index}>
            <Text>{item.name}</Text>
            <Text>{item.age}</Text>
          </View>
        ))
      }
    </View>
  );
}
