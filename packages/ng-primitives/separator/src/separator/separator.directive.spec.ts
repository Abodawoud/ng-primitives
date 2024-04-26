/**
 * Copyright © 2024 Angular Primitives.
 * https://github.com/ng-primitives/ng-primitives
 *
 * This source code is licensed under the CC BY-ND 4.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { Component, DebugElement } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { NgpSeparatorDirective } from './separator.directive';

@Component({
  template:
    '<div ngpSeparator [ngpSeparatorOrientation]="orientation" [ngpSeparatorDecorative]="decorative"></div>',
})
class TestComponent {
  orientation: 'horizontal' | 'vertical' = 'horizontal';
  decorative: boolean = false;
}

describe('NgpSeparatorDirective', () => {
  let component: TestComponent;
  let fixture: ComponentFixture<TestComponent>;
  let div: DebugElement;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TestComponent, NgpSeparatorDirective],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TestComponent);
    component = fixture.componentInstance;
    div = fixture.debugElement.query(By.css('div'));
    fixture.detectChanges();
  });

  it('should create an instance', () => {
    const directive = new NgpSeparatorDirective();
    expect(directive).toBeTruthy();
  });

  it('should apply the correct role attribute based on decorative input', () => {
    expect(div.nativeElement.getAttribute('role')).toBe('separator');
    component.decorative = true;
    fixture.detectChanges();
    expect(div.nativeElement.getAttribute('role')).toBe('none');
  });

  it('should apply the correct aria-orientation attribute based on orientation input', () => {
    expect(div.nativeElement.getAttribute('aria-orientation')).toBe(null);
    component.orientation = 'vertical';
    fixture.detectChanges();
    expect(div.nativeElement.getAttribute('aria-orientation')).toBe('vertical');
  });

  it('should apply the correct data-orientation attribute based on orientation input', () => {
    expect(div.nativeElement.getAttribute('data-orientation')).toBe('horizontal');
    component.orientation = 'vertical';
    fixture.detectChanges();
    expect(div.nativeElement.getAttribute('data-orientation')).toBe('vertical');
  });
});
