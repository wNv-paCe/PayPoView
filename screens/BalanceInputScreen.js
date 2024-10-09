import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  StyleSheet,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const BalanceInputScreen = () => {
  const [balance, setBalance] = useState("");
  const navigation = useNavigation();

  const handleConfirmBalance = () => {
    if (balance) {
      Keyboard.dismiss(); // 隐藏键盘
      navigation.navigate("BillPayments", { balance }); // 将余额传递给下一个页面
    }
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* 欢迎消息，固定在屏幕上方 */}
        <View style={styles.header}>
          <Text style={styles.welcome}>PayPoView</Text>
        </View>

        {/* 输入余额部分，居中显示 */}
        <View style={styles.centeredContent}>
          <Text style={styles.label}>Enter your current balance:</Text>
          <TextInput
            style={styles.input}
            value={balance}
            onChangeText={setBalance}
            keyboardType="numeric"
            placeholder="Enter balance"
          />
          <Button title="Confirm" onPress={handleConfirmBalance} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: "absolute",
    top: "25%", // 控制欢迎消息离顶部的距离
    width: "100%",
    alignItems: "center", // 水平方向居中
  },
  welcome: {
    fontSize: 36,
    fontWeight: "bold",
    color: "red",
  },
  centeredContent: {
    flex: 1,
    justifyContent: "center", // 垂直方向居中
    alignItems: "center", // 水平方向居中
    padding: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    fontWeight: "bold",
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    width: "80%", // 使输入框宽度占屏幕的80%
    textAlign: "center", // 使输入的文字居中
  },
});

export default BalanceInputScreen;
