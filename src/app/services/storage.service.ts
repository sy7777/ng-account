import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private wageIconPath = "https://img.icons8.com/cotton/64/000000/get-cash.png";
  private billIconPath = "https://img.icons8.com/cotton/64/000000/bill--v2.png";
  private incomeData = [{ text: "wages", icon: this.wageIconPath, amount: 0 }, {
    text: "", icon: "https://img.icons8.com/wired/64/000000/plus.png"
  }];
  private expensesData = [{ text: "bill", icon: this.billIconPath, amount: 0 }, {
    text: "", icon: "https://img.icons8.com/wired/64/000000/plus.png"
  }];
  constructor() {
    if (window.localStorage.getItem("income") && window.localStorage.getItem("expense")) {
      this.incomeData = JSON.parse(window.localStorage.getItem("income"));
      this.expensesData = JSON.parse(window.localStorage.getItem("expense"));
    } else {
      window.localStorage.setItem("income", JSON.stringify(this.incomeData));
      window.localStorage.setItem("expense", JSON.stringify(this.expensesData));
    }
  }

  getIncomeData() {
    this.incomeData = JSON.parse(window.localStorage.getItem("income"));
    return this.incomeData;

  }

  setIncomData(payload) {
    this.incomeData = payload;
    window.localStorage.setItem("income", JSON.stringify(this.incomeData));
  }

  getExpenseData() {
    this.expensesData = JSON.parse(window.localStorage.getItem("expense"));
    return this.expensesData;
  }

  setExpenseData(payload) {
    this.expensesData = payload;
    window.localStorage.setItem("expense", JSON.stringify(this.expensesData));
  }

 
}
