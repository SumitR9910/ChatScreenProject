import { FlatList, Text } from "react-native";
import ActionBar from "../components/ActionBar/ActionBar";

function Index() {
  const data = Array.from({ length: 100 }, (_, i) => i + 1);

  return (
    <>
      <FlatList data={data} renderItem={({ item }) => <Text>{item}</Text>} />
      <ActionBar />
    </>
  );
}

export default Index;
