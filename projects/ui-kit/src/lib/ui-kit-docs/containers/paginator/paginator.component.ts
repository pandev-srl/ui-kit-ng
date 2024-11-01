import { ChangeDetectionStrategy, Component } from '@angular/core';
import { UiPagination } from '../../../ui-paginator';

@Component({
  selector: 'ui-docs-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginatorComponent {
  paginatorData: UiPagination = { numberOfPages: 50, currentPage: 25, itemsCount: 450, itemsPerPage: 10 };

  onChangePage(page: number): void {
    this.paginatorData = {
      ...this.paginatorData,
      currentPage: page,
    };
  }
}
