import { Text, View } from "react-native";

interface PropsType {
  contact: {
    name: string;
    version: string;
  };
}

export default function Banner({ contact }: PropsType) {
  return (
    <View>
      <Text>Banner</Text>
      <Text>{contact.name}</Text>
      <Text>{contact.version}</Text>
      <Text>=================================</Text>
    </View>
  );
}
