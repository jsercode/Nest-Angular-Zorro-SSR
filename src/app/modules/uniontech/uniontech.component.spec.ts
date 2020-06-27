import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UniontechComponent } from './uniontech.component';

describe('UniontechComponent', () => {
  let component: UniontechComponent;
  let fixture: ComponentFixture<UniontechComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UniontechComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UniontechComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
