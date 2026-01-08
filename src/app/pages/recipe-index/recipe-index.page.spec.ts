import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RecipeIndexPage } from './recipe-index.page';

describe('RecipeIndexPage', () => {
  let component: RecipeIndexPage;
  let fixture: ComponentFixture<RecipeIndexPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(RecipeIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
