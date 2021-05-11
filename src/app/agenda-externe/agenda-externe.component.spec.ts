import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AgendaExterneComponent } from './agenda-externe.component';

describe('AgendaExterneComponent', () => {
  let component: AgendaExterneComponent;
  let fixture: ComponentFixture<AgendaExterneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AgendaExterneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AgendaExterneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
