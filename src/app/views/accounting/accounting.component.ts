import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService, ToastService } from 'ng-zorro-antd-mobile';

@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountingComponent implements OnInit {
  wageIconPath = "https://img.icons8.com/cotton/64/000000/get-cash.png";
  billIconPath = "https://img.icons8.com/cotton/64/000000/bill--v2.png";
  data: Array<any>;
  incomeData = [{ text: "wages", icon: this.wageIconPath, amount: 0 }, {
    text: "", icon: "https://img.icons8.com/wired/64/000000/plus.png" }];
  expensesData = [{ text: "bill", icon: this.billIconPath, amount: 0 }, {
    text: "", icon: "https://img.icons8.com/wired/64/000000/plus.png" }];
  private amount: any;
  private selectedItem: any;

  private priceItem: string;
  constructor(private modal: ModalService, private toast: ToastService) {
    this.data = this.incomeData;
  }

  ngOnInit() {
    this.priceItem = this.data[0].text;
    this.selectedItem = this.data[0];
  }

  click(event) {
    console.log(event);
    if (event.index !== this.data.length - 1) {
      this.priceItem = event.data.text;
      this.selectedItem = event.data;
    } else {
      this.modal.prompt(
        'Add Item',
        'Please Input the Item',
        [{ text: 'Cancel' }, {
          text: 'Submit', onPress: inputName => {
            return new Promise((res, rej) => {
              if (inputName) {
                const item = {
                  text: inputName,
                  icon: this.wageIconPath
                }
                this.data.unshift(item);
                this.data = JSON.parse(JSON.stringify(this.data));
                res();
              } else {
                this.toast.offline('Please Add Something', 1000);
                
              }
            });
            
          }
        }]
      );
    }


  }
  choose(event) {
    switch (event.selectedIndex) {
      case 0:
        this.data = this.incomeData;
        break;
      case 1:
        this.data = this.expensesData;
        break;
    }
  }

  saveAmount(){
    this.selectedItem.amount = this.amount;
    console.log(this.data);
  }
}
