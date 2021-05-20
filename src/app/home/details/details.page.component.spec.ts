import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Details.PageComponent } from './details.page.component';

describe('Details.PageComponent', () => {
  let component: Details.PageComponent;
  let fixture: ComponentFixture<Details.PageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Details.PageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Details.PageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
