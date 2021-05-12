import Taro, { useDidShow } from "@tarojs/taro";
import { View } from "@tarojs/components";

const Mine: Taro.FC = () => {
  useDidShow(() => {
    console.log("mime");
  });
  return <View>用户</View>;
};
export default Mine;
