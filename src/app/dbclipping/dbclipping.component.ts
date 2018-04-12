import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dbclipping',
  templateUrl: './dbclipping.component.html',
  styleUrls: ['./dbclipping.component.css']
})
export class DbclippingComponent implements OnInit {

  public titulo:String;
  public imagem:String;
  public descricao:String;
  public destaques;
  constructor() { }

  ngOnInit() {
    this.titulo = "";
    this.imagem = "";
    this.descricao = "";
  }
  atualizaShow(event){
    console.log(event)
    this.titulo = event;
  }
  atualizaShowImagem(event){
    console.log(event)
    this.imagem = event;
  }
  atualizaShowDescricao(event){
    console.log(event)
    this.descricao = event;
  }


  atualizaShowDestaques(event){
    console.log(event)
    this.destaques
  }
}
