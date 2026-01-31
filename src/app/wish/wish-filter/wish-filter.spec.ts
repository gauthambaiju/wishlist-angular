import { ComponentFixture, TestBed } from '@angular/core/testing';

import { WishFilter } from './wish-filter';

describe('WishFilter', () => {
  let component: WishFilter;
  let fixture: ComponentFixture<WishFilter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [WishFilter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(WishFilter);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
