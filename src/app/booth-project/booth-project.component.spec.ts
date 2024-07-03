import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoothProjectComponent } from './booth-project.component';

describe('BoothProjectComponent', () => {
  let component: BoothProjectComponent;
  let fixture: ComponentFixture<BoothProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoothProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoothProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
