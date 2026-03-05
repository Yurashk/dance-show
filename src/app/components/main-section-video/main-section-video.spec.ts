import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainSectionVideo } from './main-section-video';

describe('MainSectionVideo', () => {
  let component: MainSectionVideo;
  let fixture: ComponentFixture<MainSectionVideo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainSectionVideo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MainSectionVideo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
