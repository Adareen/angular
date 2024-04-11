import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaPaniniComponent } from './lista-panini.component';

describe('ListaPaniniComponent', () => {
  let component: ListaPaniniComponent;
  let fixture: ComponentFixture<ListaPaniniComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaPaniniComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaPaniniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
