/**
 * Copyright © 2024 Angular Primitives.
 * https://github.com/ng-primitives/ng-primitives
 *
 * This source code is licensed under the CC BY-ND 4.0 license found in the
 * LICENSE file in the root directory of this source tree.
 */
import { InjectionToken, inject } from '@angular/core';
import type { NgpSliderThumbDirective } from './slider-thumb.directive';

export const NgpSliderThumbToken = new InjectionToken<NgpSliderThumbDirective>(
  'NgpSliderThumbToken',
);

/**
 * Inject the SliderThumb directive instance
 */
export function injectSliderThumb(): NgpSliderThumbDirective {
  return inject(NgpSliderThumbToken);
}
