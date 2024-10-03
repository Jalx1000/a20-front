import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-headers',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './headers.component.html',
  styleUrl: './headers.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeadersComponent {

}
