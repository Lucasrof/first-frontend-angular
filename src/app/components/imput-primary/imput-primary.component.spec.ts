import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImputPrimaryComponent } from './imput-primary.component';

describe('ImputPrimaryComponent', () => {
  let component: ImputPrimaryComponent;
  let fixture: ComponentFixture<ImputPrimaryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ImputPrimaryComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ImputPrimaryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
