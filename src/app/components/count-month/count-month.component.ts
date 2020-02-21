import { Component, OnInit } from '@angular/core';
import { ToastService } from 'ng-zorro-antd-mobile';
import { StorageService } from 'src/app/services/storage.service';
// import { EChartOption } from 'echarts';


@Component({
  selector: 'app-count-month',
  templateUrl: './count-month.component.html',
  styleUrls: ['./count-month.component.css']
})
export class CountMonthComponent implements OnInit {
  flag = true;
  index = 1;
  private amount: any;
  private monthAmount = "1";
  private yearAmount = "4";
  private myList = [];


  constructor(private storage: StorageService) {


    const inList = this.storage.getIncomeData().filter(item => item.text);
    const outList = this.storage.getExpenseData().filter(item => item.text);
    // ...解构数组
    this.myList = [...inList, ...outList];
    let inAmount = 0;
    let outAmount = 0;
    inList.forEach(item => {
      inAmount += Number(item.amount);
    })

    outList.forEach(item => {
      outAmount += Number(item.amount);
    })

    this.amount = inAmount - outAmount;

  }

  ngOnInit() {
  }


  onChange(item) {
    console.log('onChange', item);
  }

  onTabClick(item) {
    console.log('onTabClick', item);
  }

  choose(event) {
    // switch (event.selectedIndex) {
    //   case 0:
    //     this.amount = this.monthAmount;
    //     break;
    //   case 1:
    //     this.amount = this.yearAmount;
    //     break;
    // }
    // console.log(event.selectedIndex);
  }

  onClick() {
    console.log('click');
  }
}
