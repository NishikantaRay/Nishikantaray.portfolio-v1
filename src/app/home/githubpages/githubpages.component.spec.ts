import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GithubpagesComponent } from './githubpages.component';

describe('GithubpagesComponent', () => {
  let component: GithubpagesComponent;
  let fixture: ComponentFixture<GithubpagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GithubpagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GithubpagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
