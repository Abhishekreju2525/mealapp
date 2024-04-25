import { CommonModule } from '@angular/common';
import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-results',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './results.component.html',
  styleUrl: './results.component.css',
})
export class ResultsComponent implements OnChanges {
  [x: string]: any;

  @Input() results?: any[];
  @Input() query?: string = '';
  ingString: string = 'strIngredient';
  KeyString: string = '';
  ngOnChanges(changes: SimpleChanges): void {
    if ('results' in changes) {
      console.log('reached results');
      console.log(this.results);
    }
  }
  isObjectWithKey(obj: any, substring: string): boolean {
    if (String(obj).startsWith(substring)) {
      return true;
    }
    return false;
  }
  getIndex(str: any): string {
    console.log(str);

    this.KeyString = String(str).slice(13);
    console.log(this.KeyString);

    return this.KeyString;
  }
}
