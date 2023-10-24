import { TestBed } from '@angular/core/testing';

import { ComponentBuilderService } from './component-builder.service';

describe('ComponentBuilderService', () => {
  let service: ComponentBuilderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComponentBuilderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
