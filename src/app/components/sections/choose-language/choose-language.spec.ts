import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseLanguage } from './choose-language';

describe('ChooseLanguage', () => {
  let component: ChooseLanguage;
  let fixture: ComponentFixture<ChooseLanguage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChooseLanguage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChooseLanguage);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
