import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-details.page',
  templateUrl: './details.page.component.html',
  styleUrls: ['./details.page.component.scss'],
})
export class DetailsPageComponent {
  readonly id$ = this.route.paramMap.pipe(map((params) => params.get('id')));

  constructor(private readonly route: ActivatedRoute) {}
}
