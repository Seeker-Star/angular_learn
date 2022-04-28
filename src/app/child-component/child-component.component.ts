import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-child-component',
  templateUrl: './child-component.component.html',
  styleUrls: ['./child-component.component.scss']
})
export class ChildComponentComponent implements OnInit {
  @Input()
  parentGetMsg: any;
  private _title!: string;
  @Input()
  set parentTitle(title: string) {
    this._title = (title && title.trim()) || '父组件的 title 属性值为空';
  }
  get parentTitle(): string{
    return this._title
  }

  constructor() { }

  ngOnInit(): void {
  }

  runParentFunc(){
    this.parentGetMsg();
  }
}
