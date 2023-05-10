import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoArgProgramaComponent } from './logo-arg-programa.component';

describe('LogoArgProgramaComponent', () => {
  let component: LogoArgProgramaComponent;
  let fixture: ComponentFixture<LogoArgProgramaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [LogoArgProgramaComponent]
    });
    fixture = TestBed.createComponent(LogoArgProgramaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
