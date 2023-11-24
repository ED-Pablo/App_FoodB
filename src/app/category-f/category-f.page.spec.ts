import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CategoryFPage } from './category-f.page';

describe('CategoryFPage', () => {
  let component: CategoryFPage;
  let fixture: ComponentFixture<CategoryFPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CategoryFPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
