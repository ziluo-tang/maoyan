import Taro, { useDidShow } from "@tarojs/taro";
import { View } from "@tarojs/components";

const Cinema: Taro.FC = () => {
  useDidShow(() => {
    console.log("cinema");
  });
  return <View>电影院</View>;
};
export default Cinema;
