import axios from "axios";

export function storeExpense(expenseData) {
  axios.post(
    "https://react-native-expenses-ap-fd364-default-rtdb.europe-west1.firebasedatabase.app/expenses.json",
    expenseData
  );
}
