import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditTattooComponent } from './edit-tattoo.component';

describe('EditTattooComponent', () => {
  let component: EditTattooComponent;
  let fixture: ComponentFixture<EditTattooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditTattooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditTattooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
