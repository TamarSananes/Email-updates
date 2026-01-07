import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Areengaged } from './areengaged';

describe('Areengaged', () => {
  let component: Areengaged;
  let fixture: ComponentFixture<Areengaged>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Areengaged]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Areengaged);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
