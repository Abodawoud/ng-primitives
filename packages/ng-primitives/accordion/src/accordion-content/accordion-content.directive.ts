import { Directive, input } from '@angular/core';
import { injectDimensions, uniqueId } from '@ng-primitives/ng-primitives/utils';
import { injectAccordionItem } from '../accordion-item/accordion-item.token';
import { injectAccordion } from '../accordion/accordion.token';
import { NgpAccordionContentToken } from './accordion-content.token';

@Directive({
  standalone: true,
  selector: '[ngpAccordionContent]',
  exportAs: 'ngpAccordionContent',
  providers: [{ provide: NgpAccordionContentToken, useExisting: NgpAccordionContentDirective }],
  host: {
    role: 'region',
    '[id]': 'id()',
    '[attr.data-orientation]': 'accordion.orientation()',
    '[attr.data-state]': 'accordionItem.open() ? "open" : "closed"',
    '[attr.aria-labelledby]': 'accordionItem.triggerId()',
    '[style.--ngp-accordion-content-width.px]': 'dimensions().width',
    '[style.--ngp-accordion-content-height.px]': 'dimensions().height',
    '[hidden]': '!accordionItem.open() && dimensions().mounted ? true : null',
  },
})
export class NgpAccordionContentDirective {
  /**
   * Access the accordion
   */
  protected readonly accordion = injectAccordion();

  /**
   * Access the accordion item
   */
  protected readonly accordionItem = injectAccordionItem();

  /**
   * The id of the content region
   */
  readonly id = input<string>(uniqueId('ngp-accordion-content'));

  /**
   * The size of the content region
   */
  protected readonly dimensions = injectDimensions();
}
