import { View } from "react-native";
import Banner from "../components/Banner";
import ListUser from "../components/ListUser";


export default function Home() {
  const listUsers = [
    { name: "Nguyễn Văn A", age: 20 },
    { name: "Nguyễn Văn B", age: 22 },
    { name: "Nguyễn Văn C", age: 23 },
    { name: "Nguyễn Văn D", age: 24 },
    { name: "Nguyễn Văn E", age: 25 }
  ];

  const contact = {
    name: "Profile App",
    version: "V1.2"
  };

  return (
    <View>
      <Banner contact={contact} />
      <ListUser listUsers={listUsers} />
    </View>
  );
}
