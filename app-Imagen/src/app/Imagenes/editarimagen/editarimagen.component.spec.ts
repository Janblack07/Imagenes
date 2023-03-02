import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditarimagenComponent } from './editarimagen.component';

describe('EditarimagenComponent', () => {
  let component: EditarimagenComponent;
  let fixture: ComponentFixture<EditarimagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditarimagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditarimagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
