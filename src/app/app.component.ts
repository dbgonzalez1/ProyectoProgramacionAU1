import { Component } from '@angular/core';
import { TablaComponenteComponent } from "./tabla-componente/tabla-componente.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.scss',
    imports: [TablaComponenteComponent]
})
export class AppComponent {
  
  
}
