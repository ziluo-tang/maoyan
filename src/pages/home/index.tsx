import Taro, { useDidShow } from "@tarojs/taro";
import { View } from "@tarojs/components";

const Home: Taro.FC = () => {
  useDidShow(() => {
    console.log("home");
  });
  return <View>热映</View>;
};
export default Home;
