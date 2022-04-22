import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadgamesComponent } from './loadgames.component';

describe('LoadgamesComponent', () => {
  let component: LoadgamesComponent;
  let fixture: ComponentFixture<LoadgamesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoadgamesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadgamesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
