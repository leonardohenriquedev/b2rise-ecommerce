import { CommonModule } from '@angular/common';
import { Component, Output, EventEmitter, inject } from '@angular/core';
import { ActivatedRoute, RouterModule, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css'],
})
export class SearchComponent {
  inputValue: string = '';
  route: ActivatedRoute = inject(ActivatedRoute);
  @Output() onChangeEvent = new EventEmitter<string>();

  setInputValue(value: string) {
    this.onChangeEvent.emit(value);
    this.inputValue = value;
  }

  navigate(search: string) {
    this.router.navigate(['/products'], { queryParams: { search } });
  }

  constructor(private router: Router) {
    this.inputValue = this.route.snapshot.queryParamMap.get('search') ?? '';
  }
}
