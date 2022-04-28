import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  public title = '我是 title 属性';
  public styleProperty = '<b>我是包含 html 标签的属性</b>';
  public fontColor = 'red';
  public url = 'https://google.com.hk';
  public name: string | undefined;
  public msg: string | undefined;
  public refMsg: string | undefined;

  constructor() {
  }

  ngOnInit(): void {
  }

  getUser(): void {
    alert(this.name);
  }

  getMsg(event: KeyboardEvent): void {
    console.log(event);
    this.msg = (event.target as HTMLInputElement).value;
  }

  getRefMsg(msg: string): void {
    this.refMsg = msg;
  }
}
