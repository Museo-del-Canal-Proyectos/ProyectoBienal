import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeEngComponent } from './home-eng.component';

describe('HomeEngComponent', () => {
  let component: HomeEngComponent;
  let fixture: ComponentFixture<HomeEngComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeEngComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(HomeEngComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
