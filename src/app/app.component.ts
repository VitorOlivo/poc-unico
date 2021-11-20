import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  valor = 'Vai mudar';

  constructor() {}

  public updatePicture(photo: string): void {
    setTimeout(() => {
      console.log('Antes: ', this.valor)
    this.valor = 'Muda';
    console.log('Depois: ', this.valor)
    alert('Mudou?')
    }, 3000)
  }

  public muda(): void {
    console.log('Antes: ', this.valor)
    this.valor = 'Muda';
    console.log('Depois: ', this.valor)
    alert('Mudou?')
  }
}
