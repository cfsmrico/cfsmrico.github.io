import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OneRepMaxComponent } from './one_rm.component';

describe('OneRepMaxComponent', () => {
  let component: OneRepMaxComponent;
  let fixture: ComponentFixture<OneRepMaxComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OneRepMaxComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OneRepMaxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
