/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { RandomApiListComponent } from './RandomApiList.component';

describe('RandomApiListComponent', () => {
  let component: RandomApiListComponent;
  let fixture: ComponentFixture<RandomApiListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RandomApiListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RandomApiListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
