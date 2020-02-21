import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { ModalService, ToastService } from 'ng-zorro-antd-mobile';
import { LocaleProviderService } from 'ng-zorro-antd-mobile';
import { en_US, zh_CN } from 'ng-zorro-antd-mobile';
import { StorageService } from 'src/app/services/storage.service';


@Component({
  selector: 'app-accounting',
  templateUrl: './accounting.component.html',
  styleUrls: ['./accounting.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class AccountingComponent implements OnInit {
  wageIconPath = "https://img.icons8.com/cotton/64/000000/get-cash.png";
  // billIconPath = "https://img.icons8.com/cotton/64/000000/bill--v2.png";
  // inIconPath = [];
  // outIconPath = [];

  data: Array<any>;
  incomeData: Array<any>;
  expensesData: Array<any>;
  private amount: any;
  private selectedItem: any;
  private selectedIndex: any;


  private priceItem: string;
  constructor(private modal: ModalService, private toast: ToastService, private localeProviderService: LocaleProviderService, private storage: StorageService) {
    this.expensesData = this.storage.getExpenseData();
    this.incomeData = this.storage.getIncomeData();
    this.data = this.incomeData;
    // let n = 0;
    // while(n<16){
    //   this.incomeData.unshift({ text: "Wages", icon: this.wageIconPath, amount: 0 });
    //   n++;
    // }

  }

  ngOnInit() {
    this.priceItem = this.data[0].text;
    this.selectedItem = this.data[0];
    this.selectedIndex = 0;
  }

  click(event) {
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
                  icon: this.wageIconPath,
                  amount: 0
                }
                this.data.unshift(item);
                this.data = JSON.parse(JSON.stringify(this.data));
                if(this.selectedIndex === 0) {
                  this.incomeData = this.data;
                  this.storage.setIncomData(this.incomeData);
                } else {
                  this.expensesData = this.data;
                  this.storage.setExpenseData(this.expensesData);
                }
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
        this.selectedIndex = 0;
        break;
      case 1:
        this.data = this.expensesData;
        this.selectedIndex = 1;
        break;
    }
  }
  switchLanguage() {
    this.localeProviderService.setLocale(en_US);
  }
  saveAmount(){
    this.selectedItem.amount = this.amount;
    if(this.selectedIndex === 0) {
      this.storage.setIncomData(this.incomeData);
    } else {
      this.storage.setExpenseData(this.expensesData);
    }
    // console.log(this.data);
  }

  add(){}
}
