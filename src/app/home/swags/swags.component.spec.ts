import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SwagsComponent } from './swags.component';

describe('SwagsComponent', () => {
  let component: SwagsComponent;
  let fixture: ComponentFixture<SwagsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SwagsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SwagsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
