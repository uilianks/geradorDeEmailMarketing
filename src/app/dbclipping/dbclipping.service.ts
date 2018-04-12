import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class DbclippingService {
  destaques = [
    { title: '',imagem: '', descricao: '' }
  ];
  normais = [
    { titlen: '',imagemn: '', descricaon: '' }
  ];
  vagas = [
    { titlev: '',imagemv: '', descricaov: '' }
  ];
  colaboradores = [
    { titlec: '',imagemc: '', descricaoc: '' }
  ];
  aniversariantes = [
    { titlea: '',imagema: '', descricaoa: '' }
  ];
  dbnamidia = [
    { titlem: '', descricaom: '' }
  ];
  


  //private messageSource = new BehaviorSubject<string>("default message");
  //currentMessage = this.messageSource.asObservable();

  private destaquesEvent = new BehaviorSubject<any>(this.destaques);
  destaquesShow = this.destaquesEvent.asObservable();

  private normaisEvent = new BehaviorSubject<any>(this.normais);
  normaisShow = this.normaisEvent.asObservable();

  private vagasEvent = new BehaviorSubject<any>(this.vagas);
  vagasShow = this.vagasEvent.asObservable();

  private colaboradoresEvent = new BehaviorSubject<any>(this.colaboradores);
  colaboradoresShow = this.colaboradoresEvent.asObservable();

  private aniversariantesEvent = new BehaviorSubject<any>(this.aniversariantes);
  aniversariantesShow = this.aniversariantesEvent.asObservable();

  private dbnamidiaEvent = new BehaviorSubject<any>(this.dbnamidia);
  dbnamidiaShow = this.dbnamidiaEvent.asObservable();

  constructor() { }

  changeDestaques(troca: any) {
    this.destaquesEvent.next(troca)
  }
  changeNormais(troca: any) {
    this.normaisEvent.next(troca)
  }
  changeVagas(troca: any) {
    this.vagasEvent.next(troca)
  }
  changeColaboradores(troca: any) {
    this.colaboradoresEvent.next(troca)
  }
  changeAniversariantes(troca: any) {
    this.aniversariantesEvent.next(troca)
  }
  changeDbnamidia(troca: any) {
    this.dbnamidiaEvent.next(troca)
  }


  get(){
    return new Promise(resolve => resolve(this.destaques));
  }
  getN(){
    return new Promise(resolve => resolve(this.normais));
  }
  getV(){
    return new Promise(resolve => resolve(this.vagas));
  }
  getC(){
    return new Promise(resolve => resolve(this.colaboradores));
  }
  getA(){
    return new Promise(resolve => resolve(this.aniversariantes));
  }
  getM(){
    return new Promise(resolve => resolve(this.dbnamidia));
  }

  addNew(data) {
    return new Promise(resolve => {
      this.destaques.push(data);
      resolve(data);
    });
  }
  addNewn(data) {
    return new Promise(resolve => {
      this.normais.push(data);
      resolve(data);
    });
  }
  addNewV(data) {
    return new Promise(resolve => {
      this.vagas.push(data);
      resolve(data);
    });
  }
  addNewC(data) {
    return new Promise(resolve => {
      this.colaboradores.push(data);
      resolve(data);
    });
  }
  addNewA(data) {
    return new Promise(resolve => {
      this.aniversariantes.push(data);
      resolve(data);
    });
  }
  addNewM(data) {
    return new Promise(resolve => {
      this.dbnamidia.push(data);
      resolve(data);
    });
  }

}
