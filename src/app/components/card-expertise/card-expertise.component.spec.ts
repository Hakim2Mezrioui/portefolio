import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardExpertiseComponent } from './card-expertise.component';

describe('CardExpertiseComponent', () => {
  let component: CardExpertiseComponent;
  let fixture: ComponentFixture<CardExpertiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardExpertiseComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardExpertiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
