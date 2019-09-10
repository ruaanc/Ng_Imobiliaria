import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OpcoesClientesComponent } from './opcoes-clientes.component';

describe('OpcoesClientesComponent', () => {
  let component: OpcoesClientesComponent;
  let fixture: ComponentFixture<OpcoesClientesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OpcoesClientesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OpcoesClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
