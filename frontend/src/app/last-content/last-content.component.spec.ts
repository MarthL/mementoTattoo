import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LastContentComponent } from './last-content.component';

describe('LastContentComponent', () => {
  let component: LastContentComponent;
  let fixture: ComponentFixture<LastContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LastContentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LastContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
