import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IngredientspartialvieweComponent } from './ingredientspartialviewe.component';

describe('IngredientspartialvieweComponent', () => {
  let component: IngredientspartialvieweComponent;
  let fixture: ComponentFixture<IngredientspartialvieweComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [IngredientspartialvieweComponent]
    });
    fixture = TestBed.createComponent(IngredientspartialvieweComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
