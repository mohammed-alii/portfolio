import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ArchitectureProjectComponent } from './architecture-project.component';

describe('ArchitectureProjectComponent', () => {
  let component: ArchitectureProjectComponent;
  let fixture: ComponentFixture<ArchitectureProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ArchitectureProjectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ArchitectureProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
