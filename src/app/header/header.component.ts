import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {

    @Output() searchTermChange = new EventEmitter<string>();


    onSearchChange(event: Event) {
        const target = event.target as HTMLInputElement;  // Explicitly cast to HTMLInputElement
        this.searchTermChange.emit(target.value);
      }

}
