import { ElementRef } from '@angular/core';
import { HanziWriterDirective } from './hanzi-writer';

describe('HanziWriterDirective', () => {
  it('should create an instance', () => {
    const mockElementRef = new ElementRef(document.createElement('div'));
    const directive = new HanziWriterDirective(mockElementRef);
    expect(directive).toBeTruthy();
  });
});

