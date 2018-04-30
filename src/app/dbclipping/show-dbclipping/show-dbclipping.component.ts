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
  destaqueTitulo = false

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

  deleteDestaques(x: number){
    this.destaques.splice(x, 1)
  }
  deleteNormais(x: number){
    this.normais.splice(x, 1)
  }
  deleteVagas(x: number){
    this.vagas.splice(x,1)
  }
  deleteColab(x: number){
    this.colaboradores.splice(x,1)
  }
  deleteAniver(x: number){
    this.aniversariantes.splice(x,1)
  }
  deleteDBNamidia(x: number){
    this.dbnamidia.splice(x,1)
  }

 //MOVE UP DOWN DO DESTAQUES
  moveUp(x:number){
    if(x < x){
      console.log("erro")
    }else{
      var temp = this.destaques[x]
      this.destaques[x] = this.destaques[x-1]
      this.destaques[x-1] = temp
    }
 
  }

  moveDown(x:number){
    var temp = this.destaques[x]
    this.destaques[x] = this.destaques[x+1]
    this.destaques[x+1] = temp
  }

 //MOVE UP DOWN DAS NOTICIAS NORMAIS

  moveUpN(y:number){
    var temp = this.normais[y]
    this.normais[y] = this.normais[y-1]
    this.normais[y-1] = temp
  }

  moveDownN(y:number){
    var temp = this.normais[y]
    this.normais[y] = this.normais[y+1]
    this.normais[y+1] = temp
  }

  // vagas da semana

  moveUpV(v:number){
    var temp = this.vagas[v]
    this.vagas[v] = this.vagas[v-1]
    this.vagas[v-1] = temp
  }

  moveDownV(v:number){
    var temp = this.vagas[v]
    this.vagas[v] = this.vagas[v+1]
    this.vagas[v+1] = temp
  }
  //colaboradores
  
  moveUpC(c:number){
    var temp = this.colaboradores[c]
    this.colaboradores[c] = this.colaboradores[c-1]
    this.colaboradores[c-1] = temp
  }

  moveDownC(c:number){
    var temp = this.colaboradores[c]
    this.colaboradores[c] = this.colaboradores[c+1]
    this.colaboradores[c+1] = temp
  }

  //aniversaios

  moveUpA(c:number){
    var temp = this.aniversariantes[c]
    this.aniversariantes[c] = this.aniversariantes[c-1]
    this.aniversariantes[c-1] = temp
  }

  moveDownA(c:number){
    var temp = this.aniversariantes[c]
    this.aniversariantes[c] = this.aniversariantes[c+1]
    this.aniversariantes[c+1] = temp
  }

  //db nam idia

  moveUpD(c:number){
    var temp = this.dbnamidia[c]
    this.dbnamidia[c] = this.dbnamidia[c-1]
    this.dbnamidia[c-1] = temp
  }

  moveDownD(c:number){
    var temp = this.dbnamidia[c]
    this.dbnamidia[c] = this.dbnamidia[c+1]
    this.dbnamidia[c+1] = temp
  }

}