import { BreakpointObserver } from '@angular/cdk/layout';
import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { Observable, map } from 'rxjs';
import { UiBreakpoints } from '../../../ui-layout';
import { UiPagination } from '../../models';

@Component({
  selector: 'ui-paginator',
  templateUrl: './ui-paginator.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UiPaginatorComponent implements OnInit {
  @Input() pagination: UiPagination = {
    currentPage: 1,
    numberOfPages: 1,
    itemsPerPage: 1,
    itemsCount: 1,
  };

  @Input() descriptionLabels: {
    showing: string;
    to: string;
    of: string;
    items: string;
  } = {
    showing: 'Showing',
    to: 'to',
    of: 'of',
    items: 'items',
  };

  @Output() changePage = new EventEmitter<number>();

  get currentPage(): number {
    return this.pagination.currentPage;
  }

  get numberOfPages(): number {
    return this.pagination.numberOfPages;
  }

  get itemsPerPage(): number {
    return this.pagination.itemsPerPage;
  }

  get itemsCount(): number {
    return this.pagination.itemsCount;
  }

  get itemsFrom(): number {
    return (this.currentPage - 1) * this.itemsPerPage + 1;
  }

  get itemsTo(): number {
    return this.currentPage * this.itemsPerPage;
  }

  private breakpointObserver: BreakpointObserver = inject(BreakpointObserver);

  isMobile$: Observable<boolean> = this.breakpointObserver
    .observe(UiBreakpoints.mobile)
    .pipe(map((res) => res.matches));
  isDesktop$: Observable<boolean> = this.breakpointObserver
    .observe(UiBreakpoints.desktop)
    .pipe(map((res) => res.matches));

  onChangePage(page: number): void {
    this.changePage.emit(page);
  }

  onPreviousPage(page: number): void {
    if (page >= 1) {
      this.onChangePage(page);
    }
  }

  onNextPage(page: number): void {
    if (page <= this.numberOfPages) {
      this.onChangePage(page);
    }
  }

  ngOnInit(): void {}

  paginate(
    current: number,
    max: number,
  ): { current: number; prev: number | null; next: number | null; items: { page: number | null; divider: boolean }[] } {
    const prev = current === 1 ? null : current - 1,
      next = current === max ? null : current + 1,
      items: { page: number | null; divider: boolean }[] = [{ page: 1, divider: false }];

    if (current === 1 && max === 1) return { current, prev, next, items };
    if (current > 4) items.push({ divider: true, page: null });

    const r = 2,
      r1 = current - r,
      r2 = current + r;

    for (let i = r1 > 2 ? r1 : 2; i <= Math.min(max, r2); i++) items.push({ page: i, divider: false });

    if (r2 + 1 < max) items.push({ divider: true, page: null });
    if (r2 < max) items.push({ page: max, divider: false });

    return { current, prev, next, items };
  }
}
