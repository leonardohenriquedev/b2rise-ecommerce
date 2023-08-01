import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, inject, Input } from '@angular/core';
import { ActivatedRoute, Route, RouterModule } from '@angular/router';
import { State } from 'src/app/Services/state.service';
import { BaseComponent } from '../Base/base.component';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent extends BaseComponent {
  route: ActivatedRoute = inject(ActivatedRoute);
  state: State = inject(State);
  inputValue = '';
  @Input() updateOnlyEnter = false;
  @Output() onSearch = new EventEmitter<string>();

  setInputValue(value: string) {
    if (this.updateOnlyEnter) {
      this.inputValue = value;
    } else this.state.setSearch(value);
  }

  emitSearch() {
    this.state.setSearch(this.inputValue);
    this.onSearch.emit(this.inputValue);
  }

  constructor() {
    super();

    this.state.searchState
      .pipe(this.unsubOnDestroy())
      .subscribe((searchValue) => (this.inputValue = searchValue));
  }
}
