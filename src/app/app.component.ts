import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public valor: string;

  constructor() {}

  public updatePicture(photo: string): void {
    this.valor = photo;
  }
}
