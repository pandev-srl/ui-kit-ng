import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

@Component({
  selector: 'ui-docs-panels',
  templateUrl: './panels.component.html',
  styleUrls: ['./panels.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PanelsComponent implements OnInit {
  exampleText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam non lacinia purus, vel sollicitudin ipsum. Phasellus
  aliquet, ipsum in mattis sagittis, odio sapien molestie nunc, eu bibendum nisl orci sit amet mauris. Sed in malesuada
  nunc, a condimentum felis. Phasellus blandit justo eget rutrum egestas. Quisque interdum, risus vitae ullamcorper
  tristique, quam justo blandit mi, sed interdum felis leo sed lacus. Nunc a justo sed ex rhoncus tincidunt. Vivamus
  orci massa, dictum ac interdum vitae, mattis id nibh. Aliquam ultrices purus ut aliquet pulvinar. Nulla quis lectus ac
  leo consequat hendrerit sed vel odio. Donec luctus risus a ultrices lobortis. Mauris id nibh pharetra, placerat nisl
  eu, vulputate mauris. Maecenas vulputate ex in turpis mattis, ac ornare nulla viverra. Nulla quis felis magna.`;

  constructor() {}

  ngOnInit(): void {}
}
