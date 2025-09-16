import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';


@Component({
  selector: 'app-panel',
  imports: [RouterOutlet, RouterLink],
  templateUrl: './panel.html',
  styleUrl: './panel.css'
})
export class Panel {

}
