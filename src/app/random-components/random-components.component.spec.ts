import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandomComponentsComponent } from './random-components.component';

describe('RandomComponentsComponent', () => {
  let component: RandomComponentsComponent;
  let fixture: ComponentFixture<RandomComponentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandomComponentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomComponentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
