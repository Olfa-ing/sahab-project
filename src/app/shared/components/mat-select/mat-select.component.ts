import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {SelectItem} from 'primeng/api';
import {NgForOf} from '@angular/common';
import {MatListOption, MatSelectionList} from '@angular/material/list';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  imports: [MatFormFieldModule, MatSelectModule, NgForOf, MatSelectionList, MatListOption, FormsModule],
  selector: 'app-mat-select',
  styleUrl: './mat-select.component.css',
  templateUrl: './mat-select.component.html'
})
export class MatSelectComponent implements OnInit{
  @Input() items: SelectItem[] = [];
  @Output() valueChange: EventEmitter<string> = new EventEmitter()
  constructor() {
  }
  private _value: string = '';
  get value(): string {
    return this._value;
  }

  set value(v:string){
    if(v !== this._value){
      this._value = v;
      this.valueChange.emit(this._value)
    }
  }
  ngOnInit() {
  }
}
