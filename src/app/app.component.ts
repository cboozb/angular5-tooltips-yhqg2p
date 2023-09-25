import { Component ,ViewChildren , ViewChild} from '@angular/core';
import { NgbTooltip } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular 6';
 @ViewChild('tooltip') public  tooltip: NgbTooltip;
  click(){
    this.tooltip.open();
    // t.open()
  }
}
