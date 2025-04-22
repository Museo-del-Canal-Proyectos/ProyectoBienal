import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnuEngComponent } from './onu-eng.component';

describe('OnuEngComponent', () => {
  let component: OnuEngComponent;
  let fixture: ComponentFixture<OnuEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OnuEngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OnuEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
