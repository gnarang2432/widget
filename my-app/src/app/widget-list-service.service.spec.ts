import { TestBed, inject } from '@angular/core/testing';

import { WidgetListServiceService } from './widget-list-service.service';

describe('WidgetListServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [WidgetListServiceService]
    });
  });

  it('should be created', inject([WidgetListServiceService], (service: WidgetListServiceService) => {
    expect(service).toBeTruthy();
  }));
});
