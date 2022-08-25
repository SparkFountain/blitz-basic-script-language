import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TranslocoService } from '@ngneat/transloco';
import { map, Observable } from 'rxjs';
import { SecondLevel } from '../enums/second-level.enum';
import { ThirdLevel } from '../enums/third-level.enum';
import { CodeExample } from '../interfaces/code-example.interface';

@Injectable({
  providedIn: 'root',
})
export class DocsService {
  constructor(
    private http: HttpClient,
    private translocoService: TranslocoService
  ) {}

  getDescription$(
    secondLevel: SecondLevel,
    thirdLevel: ThirdLevel,
    docItemName: string
  ): Observable<string> {
    // TODO: allow for multiple HTML docs (e. g. reusable info boxes)
    return this.http.get<string>(
      `/assets/${secondLevel}/${thirdLevel}/${docItemName.toLowerCase()}/${this.translocoService.getActiveLang()}.html`,
      { responseType: 'text' as 'json' }
    );
  }

  getCodeExamples$(
    secondLevel: SecondLevel,
    thirdLevel: ThirdLevel,
    docItemName: string
  ): Observable<CodeExample[]> {
    return this.http
      .get<string>(
        `/assets/${secondLevel}/${thirdLevel}/${docItemName.toLowerCase()}/examples.bbs`,
        { responseType: 'text' as 'json' }
      )
      .pipe(
        map((plainCode: string) => {
          const codeExamplesPlain: string[] = plainCode.split(';//');
          const codeExamples: CodeExample[] = codeExamplesPlain.map(
            (examplePlain: string) => {
              const allLines: string[] = examplePlain.split('\n');
              const titleLines: string[] = allLines.filter((line: string) =>
                line.startsWith(';)')
              );
              const codeLines: string[] = allLines.filter(
                (line: string) => !line.startsWith(';)')
              );

              return {
                title:
                  titleLines
                    .find((line: string) =>
                      line.startsWith(
                        `;) [${this.translocoService.getActiveLang()}]`
                      )
                    )
                    ?.replace(
                      `;) [${this.translocoService.getActiveLang()}]`,
                      ''
                    )
                    .trim() ??
                  this.translocoService.translate(
                    'documentation.unnamedCodeExample'
                  ),
                code: codeLines.join('\n'),
              };
            }
          );

          return codeExamples;
        })
      );
  }
}
