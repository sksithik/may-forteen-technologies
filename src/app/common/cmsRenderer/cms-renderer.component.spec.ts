import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CmsRendererComponent } from './cms-renderer.component';

describe('CmsRendererComponent', () => {
  let component: CmsRendererComponent;
  let fixture: ComponentFixture<CmsRendererComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CmsRendererComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CmsRendererComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
