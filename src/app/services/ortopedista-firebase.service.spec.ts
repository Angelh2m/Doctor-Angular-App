import { TestBed, inject } from '@angular/core/testing';

import { OrtopedistaFirebaseService } from './ortopedista-firebase.service';

describe('OrtopedistaFirebaseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrtopedistaFirebaseService]
    });
  });

  it('should be created', inject([OrtopedistaFirebaseService], (service: OrtopedistaFirebaseService) => {
    expect(service).toBeTruthy();
  }));
});
