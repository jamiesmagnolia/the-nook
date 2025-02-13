import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptyBookSlotComponent } from './empty-book-slot.component';

describe('EmptyBookSlotComponent', () => {
  let component: EmptyBookSlotComponent;
  let fixture: ComponentFixture<EmptyBookSlotComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EmptyBookSlotComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptyBookSlotComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
