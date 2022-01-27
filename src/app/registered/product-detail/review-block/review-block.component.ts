import {ChangeDetectionStrategy, Component, Input, OnChanges} from '@angular/core';
import {FormBuilder} from "@angular/forms";


@Component({
  selector: 'sap-review-block',
  templateUrl: './review-block.component.html',
  styleUrls: ['./review-block.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ReviewBlockComponent implements OnChanges{

  @Input() rate = 0;
  @Input() description = '';
  @Input() userName = '';
  @Input() createdDate = '';

  form = this.formBuilder.group({
    rate: [0],
  })

  constructor(private readonly formBuilder: FormBuilder) { }

  ngOnChanges() {
    this.form.get('rate')?.setValue(this.rate);
  }

}
