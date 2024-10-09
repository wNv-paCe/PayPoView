import React, { useState } from "react";
import {
  View,
  Text,
  TextInput,
  Button,
  FlatList,
  StyleSheet,
  TouchableOpacity,
  Keyboard,
  TouchableWithoutFeedback,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker"; // 导入日期选择器

const BillPaymentsScreen = ({ route }) => {
  const { balance } = route.params; // 获取第一个页面传递的余额
  const [billPayments, setBillPayments] = useState([]);
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  const addBillPayment = () => {
    if (amount) {
      const payment = { amount: parseFloat(amount), date: date.toISOString() };
      setBillPayments([...billPayments, payment]);
      setAmount("");
    }
  };

  const handleSave = () => {
    // 这里可以实现保存逻辑，例如存储到本地或后端
    console.log("Data saved:", billPayments);
  };

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        {/* 加粗并改变颜色的余额显示 */}
        <Text style={styles.balance}>Balance: ${balance}</Text>

        <Text style={styles.label}>Add a bill payment:</Text>
        <TextInput
          style={styles.input}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
          placeholder="Enter bill payment amount"
        />

        {/* 直接显示日期选择器 */}
        <Text style={styles.label}>Select Date:</Text>
        <DateTimePicker
          value={date}
          mode="date"
          display="inline" // 直接显示日历
          onChange={(event, selectedDate) => {
            if (selectedDate) {
              setDate(selectedDate);
            }
          }}
        />

        <Button title="Add Bill Payment" onPress={addBillPayment} />

        {/* 自定义保存按钮 */}
        <TouchableOpacity style={styles.saveButton} onPress={handleSave}>
          <Text style={styles.saveButtonText}>Save</Text>
        </TouchableOpacity>

        {/* 展示 30 天内的账单支付记录 */}
        <Text style={styles.label}>30-day bill payment history:</Text>
        <FlatList
          data={billPayments}
          renderItem={({ item }) => (
            <Text>
              {new Date(item.date).toLocaleDateString()}: {item.amount} CAD
            </Text>
          )}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
  balance: {
    fontSize: 18, // 增加字体大小
    fontWeight: "bold", // 加粗字体
    marginBottom: 20,
  },
  label: {
    fontSize: 18,
    marginBottom: 10,
  },
  input: {
    height: 40,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
  },
  saveButton: {
    backgroundColor: "green", // 设置保存按钮背景颜色
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5, // 设置圆角
    alignItems: "center",
    marginVertical: 10,
  },
  saveButtonText: {
    color: "white", // 设置按钮文字颜色
    fontSize: 16,
    fontWeight: "bold",
  },
});

export default BillPaymentsScreen;
