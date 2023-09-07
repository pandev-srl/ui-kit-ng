import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'ui-docs-stats',
  templateUrl: './stats.component.html',
  styleUrls: ['./stats.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class StatsComponent {
  stats = [
    {
      label: 'Statistic 1',
      value: '10.000',
    },
    {
      label: 'Statistic 2',
      value: '10k',
    },
    {
      label: 'Statistic 3',
      value: '€ 100.000',
    },
    {
      label: 'Statistic 4',
      value: 'N/D',
    },
  ];
}
