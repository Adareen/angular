import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaDocentiComponent } from './lista-docenti.component';

describe('ListaDocentiComponent', () => {
  let component: ListaDocentiComponent;
  let fixture: ComponentFixture<ListaDocentiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ListaDocentiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ListaDocentiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
