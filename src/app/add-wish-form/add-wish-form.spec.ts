import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddWishForm } from './add-wish-form';

describe('AddWishForm', () => {
  let component: AddWishForm;
  let fixture: ComponentFixture<AddWishForm>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AddWishForm]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AddWishForm);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
