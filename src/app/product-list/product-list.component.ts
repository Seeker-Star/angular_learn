import {Component, OnInit, ViewChild} from '@angular/core';

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
  public products = [{
    'name':'苹果🍎',
    'price':'$20'
  },{
    'name':'香蕉🍌',
    'price':'$40'
  }];

  @ViewChild('childComponent') child: any;

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

  trackByIndex(index: number, item: any): string {
    return item.price;
  }

  getParentMsg() {
    alert('我是父组件的 getMsg 方法');
  }

  getChildMsg() {
    alert(this.child.msg);
  }

  addProduct() {
    this.products = [{
      'name': '苹果🍎',
      'price': '$20'
    }, {
      'name': '香蕉🍌',
      'price': '$40'
    }, {
      'name': 'wuwuwu',
      'price': '$120'
    }, {
      'name': 'xixi',
      'price': '$570'
    }, {
      'name': 'lululu',
      'price': '$' + (Math.random() * 100).toFixed()
    }];
  }
}
