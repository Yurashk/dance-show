import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionVideoMain } from './section-video-main';

describe('SectionVideoMain', () => {
  let component: SectionVideoMain;
  let fixture: ComponentFixture<SectionVideoMain>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SectionVideoMain]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SectionVideoMain);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
