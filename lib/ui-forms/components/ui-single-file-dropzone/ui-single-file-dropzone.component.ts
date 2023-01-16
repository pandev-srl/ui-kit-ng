import { ChangeDetectionStrategy, ChangeDetectorRef, Component, Inject, Injector, Input, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpEvent, HttpEventType } from '@angular/common/http';
import { NG_VALUE_ACCESSOR } from '@angular/forms';
import { UiAbstractInputDirective } from '../../directives/ui-abstract-input.directive';
import { UiInputErrorsService } from '../../services/ui-input-errors.service';
import {
  UI_INPUT_VALIDATION_ERROR_ICON,
  UI_INPUT_VALIDATION_PENDING_ICON,
  UI_INPUT_VALIDATION_SUCCESS_ICON,
  UI_SELECT_CARET_CLOSE_ICON,
  UI_SELECT_CARET_OPEN_ICON,
  UI_SELECT_CLEAR_ICON,
} from '@/ui-kit';

@Component({
  selector: 'ui-single-file-dropzone',
  templateUrl: './ui-single-file-dropzone.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: UiSingleFileDropzoneComponent,
    },
  ],
})
export class UiSingleFileDropzoneComponent extends UiAbstractInputDirective<any> implements OnInit {
  @Input() uploadPath: string | null = null;
  progress: number | null = null;
  fileName: string | null = null;

  constructor(
    errorsService: UiInputErrorsService,
    @Inject(UI_INPUT_VALIDATION_SUCCESS_ICON) defaultSuccessIcon: string,
    @Inject(UI_INPUT_VALIDATION_ERROR_ICON) defaultErrorIcon: string,
    @Inject(UI_INPUT_VALIDATION_PENDING_ICON) defaultPendingIcon: string,
    @Inject(UI_SELECT_CLEAR_ICON) public defaultClearIcon: string,
    @Inject(UI_SELECT_CARET_OPEN_ICON) public defaultCaretOpenIcon: string,
    @Inject(UI_SELECT_CARET_CLOSE_ICON) public defaultCaretCloseIcon: string,
    injector: Injector,
    cdr: ChangeDetectorRef,
    private http: HttpClient,
  ) {
    super(errorsService, defaultSuccessIcon, defaultErrorIcon, defaultPendingIcon, injector, cdr);
  }

  ngOnInit(): void {}

  onFileChanged(event: Event): void {
    event.preventDefault();
    event.stopPropagation();

    if (!event.target) {
      return;
    }

    if (!(event.target instanceof HTMLInputElement)) {
      return;
    }

    const files = event.target.files;

    if (!files) {
      return;
    }

    if (!this.control) {
      return;
    }

    if (files.length < 1) {
      console.log('No files dropped');
      event.preventDefault();
    } else {
      if (files.length > 1) {
        console.log('Only one file is allowed');
        event.preventDefault();
      } else {
        const file = files[0];

        if (file) {
          this.progress = 0;
          this.cdr.markForCheck();
          this.uploadFile(file).subscribe((event) => {
            if (event.type === HttpEventType.UploadProgress) {
              this.progress = event.total ? Math.round((100 * event.loaded) / event.total) : null;
              this.cdr.markForCheck();
            }
            if (event.type === HttpEventType.Response) {
              const body = event.body;
              this.onModelChange(body);
              this.fileName = file.name;
              this.cdr.markForCheck();
            }
          });
        } else {
          event.preventDefault();
        }
      }
    }
  }

  private uploadFile(file: File): Observable<HttpEvent<any>> {
    if (!this.uploadPath) {
      throw new Error('Missing uploadPath value: check the input property');
    }

    const formData = new FormData();

    formData.append('file', file);

    return this.http.post(this.uploadPath, formData, {
      reportProgress: true,
      observe: 'events',
    });
  }
}
