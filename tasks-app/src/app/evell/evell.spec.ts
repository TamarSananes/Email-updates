import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Evell } from './evell';

describe('Evell', () => {
  let component: Evell;
  let fixture: ComponentFixture<Evell>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Evell]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Evell);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
