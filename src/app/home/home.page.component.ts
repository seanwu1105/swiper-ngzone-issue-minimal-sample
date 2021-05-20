import { Component, NgZone } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import SwiperCore, { Virtual } from 'swiper/core';

SwiperCore.use([Virtual]);

@Component({
  selector: 'app-home.page',
  templateUrl: './home.page.component.html',
  styleUrls: ['./home.page.component.scss'],
})
export class HomePageComponent {
  constructor(
    private readonly zone: NgZone,
    private readonly router: Router,
    private readonly route: ActivatedRoute
  ) {}

  async navigateDetails(id: number) {
    return this.zone.run(() =>
      this.router.navigate(['details', { id }], { relativeTo: this.route })
    );
  }
}
