import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CharcterbuildComponent } from './charcterbuild.component';

describe('CharcterbuildComponent', () => {
  let component: CharcterbuildComponent;
  let fixture: ComponentFixture<CharcterbuildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CharcterbuildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CharcterbuildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
