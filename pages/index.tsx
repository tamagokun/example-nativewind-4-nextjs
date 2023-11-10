import { View, Text } from "react-native";
import { verifyInstallation } from "nativewind";

export default function Home() {
  verifyInstallation();

  return (
    <View className="bg-blue-200 rounded-2xl p-6">
      <Text className="text-white">Welcome to next.js</Text>
    </View>
  );
}
