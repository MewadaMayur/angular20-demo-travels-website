import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Tourdetails } from './tourdetails';

describe('Tourdetails', () => {
  let component: Tourdetails;
  let fixture: ComponentFixture<Tourdetails>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Tourdetails]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Tourdetails);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
