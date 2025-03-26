import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InicioEngComponent } from './inicio-eng.component';

describe('InicioEngComponent', () => {
  let component: InicioEngComponent;
  let fixture: ComponentFixture<InicioEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InicioEngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InicioEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
