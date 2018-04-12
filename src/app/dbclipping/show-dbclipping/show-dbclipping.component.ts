import { DbclippingService } from './../dbclipping.service';
import { Component, OnInit, Input } from '@angular/core';
import { AnimateTimings } from '@angular/core/src/animation/dsl';


@Component({
  selector: 'app-show-dbclipping',
  templateUrl: './show-dbclipping.component.html',
  styleUrls: ['./show-dbclipping.component.css']
})
export class ShowDbclippingComponent implements OnInit {

  destaques: any
  normais: any
  vagas: any
  colaboradores: any
  aniversariantes: any
  dbnamidia: any






 


  constructor(private dbservice: DbclippingService) { }

  ngOnInit() {
    //this.dbservice.currentMessage.subscribe(message => this.message = message)
    this.dbservice.destaquesShow.subscribe(destaques => this.destaques = destaques)
    this.dbservice.normaisShow.subscribe(normais => this.normais = normais)
    this.dbservice.vagasShow.subscribe(vagas => this.vagas = vagas)
    this.dbservice.colaboradoresShow.subscribe(colaboradores => this.colaboradores = colaboradores)
    this.dbservice.aniversariantesShow.subscribe(aniversariantes => this.aniversariantes = aniversariantes)
    this.dbservice.dbnamidiaShow.subscribe(dbnamidia => this.dbnamidia = dbnamidia)





  }

}
