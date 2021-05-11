import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaEmployeComponent } from './agenda-employe.component';

describe('AgendaEmployeComponent', () => {
  let component: AgendaEmployeComponent;
  let fixture: ComponentFixture<AgendaEmployeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaEmployeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaEmployeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
