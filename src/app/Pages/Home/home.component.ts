import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { BaseComponent } from 'src/app/Components/Base/base.component';
import { SearchComponent } from 'src/app/Components/Search/search.component';
import { State } from 'src/app/Services/state.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule, SearchComponent],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent extends BaseComponent {
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

  ngOnInit() {
    this.state.setSearch('');
  }
}
