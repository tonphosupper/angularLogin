import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsAnimalsComponent } from './details-animals.component';

describe('DetailsAnimalsComponent', () => {
  let component: DetailsAnimalsComponent;
  let fixture: ComponentFixture<DetailsAnimalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsAnimalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailsAnimalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
