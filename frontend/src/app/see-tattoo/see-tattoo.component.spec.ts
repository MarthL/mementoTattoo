import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeeTattooComponent } from './see-tattoo.component';

describe('SeeTattooComponent', () => {
  let component: SeeTattooComponent;
  let fixture: ComponentFixture<SeeTattooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeeTattooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeeTattooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
