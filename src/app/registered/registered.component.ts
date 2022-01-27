import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'sap-registered',
  templateUrl: './registered.component.html',
  styleUrls: ['./registered.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class RegisteredComponent {}
