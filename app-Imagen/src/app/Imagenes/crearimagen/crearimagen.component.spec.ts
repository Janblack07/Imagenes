import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearimagenComponent } from './crearimagen.component';

describe('CrearimagenComponent', () => {
  let component: CrearimagenComponent;
  let fixture: ComponentFixture<CrearimagenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrearimagenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CrearimagenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
