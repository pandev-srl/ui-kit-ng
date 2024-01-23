import { ChangeDetectionStrategy, Component, OnInit, ViewContainerRef } from '@angular/core';
import { UiDialogAlertComponent, UiDialogConfirmComponent, UiDialogService, UiTheme } from '@pandev-srl/ui-kit-ng';
import { first } from 'rxjs';
import { uiThemes } from '../../models';

@Component({
  selector: 'ui-docs-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DialogsComponent implements OnInit {
  exampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non lacinia purus, vel sollicitudin ipsum. Phasellus
  aliquet, ipsum in mattis sagittis, odio sapien molestie nunc, eu bibendum nisl orci sit amet mauris. Sed in malesuada
  nunc, a condimentum felis. Phasellus blandit justo eget rutrum egestas. Quisque interdum, risus vitae ullamcorper
  tristique, quam justo blandit mi, sed interdum felis leo sed lacus. Nunc a justo sed ex rhoncus tincidunt. Vivamus
  orci massa, dictum ac interdum vitae, mattis id nibh. Aliquam ultrices purus ut aliquet pulvinar. Nulla quis lectus ac
  leo consequat hendrerit sed vel odio. Donec luctus risus a ultrices lobortis. Mauris id nibh pharetra, placerat nisl
  eu, vulputate mauris. Maecenas vulputate ex in turpis mattis, ac ornare nulla viverra. Nulla quis felis magna.`;

  constructor(
    private dialogService: UiDialogService,
    private viewContainerRef: ViewContainerRef,
  ) {}

  ngOnInit(): void {}

  onOpenAlertDialog(): void {
    const dialogRef = this.dialogService.open<UiDialogAlertComponent>(
      UiDialogAlertComponent,
      (instance) => {
        instance.title = 'Operazione completata!';
        instance.text = 'Ora puoi continuare';
        instance.icon = 'fa-square-check';

        const themes: UiTheme[] = uiThemes;

        let i = 0;
        const interval = setInterval(() => {
          dialogRef.contentRef?.setInput('theme', themes[i % themes.length]);
          if (i < 2) {
            dialogRef.contentRef?.setInput('showIcon', false);
          } else {
            dialogRef.contentRef?.setInput('showIcon', true);
          }
          dialogRef.contentRef?.changeDetectorRef.markForCheck();
          i++;
        }, 3000);

        instance.ok.pipe(first()).subscribe(() => {
          dialogRef.hide();
          clearInterval(interval);
        });
      },
      {
        viewContainerRef: this.viewContainerRef,
        closeOnBackdropClick: true,
      },
    );
  }

  onOpenConfirmDialog(): void {
    const dialogRef = this.dialogService.open<UiDialogConfirmComponent>(
      UiDialogConfirmComponent,
      (instance) => {
        instance.title = "Confermi l'operazione?";
        instance.text = 'Serve una tua conferma per continuare';

        const themes: UiTheme[] = uiThemes;

        let i = 0;
        const interval = setInterval(() => {
          dialogRef.contentRef?.setInput('theme', themes[i % themes.length]);
          if (i < 2) {
            dialogRef.contentRef?.setInput('showIcon', false);
          } else {
            dialogRef.contentRef?.setInput('showIcon', true);
          }
          dialogRef.contentRef?.changeDetectorRef.markForCheck();
          i++;
        }, 3000);

        instance.confirm.pipe(first()).subscribe(() => {
          console.info('Confirmed!');
          dialogRef.hide();
          clearInterval(interval);
        });

        instance.cancel.pipe(first()).subscribe(() => {
          console.info('Canceled!');
          dialogRef.hide();
          clearInterval(interval);
        });
      },
      {
        viewContainerRef: this.viewContainerRef,
        closeOnBackdropClick: true,
      },
    );
  }
}
