import { Component, OnInit } from '@angular/core';
import { Router, NavigationStart } from '@angular/router';



@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  private title = this.router.url;

  constructor(private router: Router
  ) { }

  ngOnInit() {

    this.router.events
      .subscribe((event: any) => {
        if (event instanceof NavigationStart) {
          // console.log(event.url.substring(1))
          const title = event.url.substring(1).toUpperCase();
          this.title = title;
          
        }
      })

  }

}
