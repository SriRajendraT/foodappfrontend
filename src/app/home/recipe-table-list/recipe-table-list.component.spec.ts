import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecipeTableListComponent } from './recipe-table-list.component';

describe('RecipeTableListComponent', () => {
  let component: RecipeTableListComponent;
  let fixture: ComponentFixture<RecipeTableListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RecipeTableListComponent]
    });
    fixture = TestBed.createComponent(RecipeTableListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
