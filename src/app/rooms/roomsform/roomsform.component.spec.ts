import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoomsformComponent } from './roomsform.component';

describe('RoomsformComponent', () => {
  let component: RoomsformComponent;
  let fixture: ComponentFixture<RoomsformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RoomsformComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RoomsformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
