import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddTattooComponent } from './add-tattoo.component';

describe('AddTattooComponent', () => {
  let component: AddTattooComponent;
  let fixture: ComponentFixture<AddTattooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddTattooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddTattooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
