import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TattoosListComponent } from './tattoos-list.component';

describe('TattoosListComponent', () => {
  let component: TattoosListComponent;
  let fixture: ComponentFixture<TattoosListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TattoosListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TattoosListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
