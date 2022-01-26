import {ChangeDetectionStrategy, Component} from '@angular/core';

@Component({
  selector: 'sap-public-wrapper',
  templateUrl: './public-wrapper.component.html',
  styleUrls: ['./public-wrapper.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PublicWrapperComponent {}
