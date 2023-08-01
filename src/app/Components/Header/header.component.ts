import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink } from '@angular/router';
import { SearchComponent } from '../Search/search.component';
import { BaseComponent } from '../Base/base.component';
import { State } from 'src/app/Services/state.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterLink, SearchComponent],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent extends BaseComponent {
  state: State = inject(State);
  searchInputValue = '';

  navigate() {
    this.router.navigate(['/products'], {
      queryParams: { search: this.searchInputValue },
    });
  }

  constructor(private router: Router) {
    super();
    this.state.searchState
      .pipe(this.unsubOnDestroy())
      .subscribe((searchValue) => (this.searchInputValue = searchValue));
  }
}
