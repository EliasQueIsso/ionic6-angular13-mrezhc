import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  valorEmprestimo: number;
  taxaJuros: number;
  Parcelas: number;
  valorFinal: number;
  valorPrestacao: number;

  constructor() {}

  simularEmprestimo()
  {
    let i=1;
    this.taxaJuros=(this.taxaJuros/100)+1;
    this.valorFinal=this.valorEmprestimo;
    while(i<=this.Parcelas){
      this.valorFinal=this.valorFinal*this.taxaJuros;
      i++
    }
    this.valorPrestacao=this.valorFinal/this.Parcelas;
  }

  ionViewDidEnter() {}
}
