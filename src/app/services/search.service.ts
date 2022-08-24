import { Injectable } from '@angular/core';
import { SecondLevel } from '../enums/second-level.enum';
import { ThirdLevel } from '../enums/third-level.enum';

@Injectable({
  providedIn: 'root',
})
export class SearchService {
  constructor() {}

  getSuggestions(
    searchTerm: string,
    secondLevel: SecondLevel,
    thirdLevel: ThirdLevel
  ): string[] {
    switch (secondLevel) {
      case SecondLevel.KEYWORDS:
        switch (thirdLevel) {
          case ThirdLevel.LOOPS:
            return [
              'For',
              'Forever',
              'Next',
              'Repeat',
              'Step',
              'To',
              'Until',
              'Wend',
              'While',
            ].filter((suggestion: string) =>
              suggestion.toLowerCase().includes(searchTerm.toLowerCase())
            );
        }
    }

    // nothing found
    return [];
  }
}
