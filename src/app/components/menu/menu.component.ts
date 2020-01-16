import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';


@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  hidden: boolean = false;
  fullScreen: boolean = false;
  topFlag: boolean = false;
  tintColor: string = '#108ee9';
  unselectedTintColor: string = '#888';
  tabbarStyle: object = {
    position: 'fixed', // 使按钮固定于可视窗口的底部
    bottom: 0,
    width: '100%',
    height: '3rem', // 设置固定高度
  }
  selectedIndex: number = 0;

  constructor(private router: Router) { }

  ngOnInit() {
    this.router.events
      .subscribe((event: any) => {
        if (event instanceof NavigationStart) {
          const url = event.url.substring(1);
          switch (url) {
            case "accounting":
              this.selectedIndex = 0;
              break;
            case "statistics":
              this.selectedIndex = 1;
              break;
          }

        }
      })
  }

  tabBarTabOnPress(pressParam: any) {
    switch (pressParam.index) {
      case 0:
        this.router.navigateByUrl("accounting");
        break;
      case 1:
        this.router.navigateByUrl("statistics");
        break;
    }

    this.selectedIndex = pressParam.index;
  }
}

