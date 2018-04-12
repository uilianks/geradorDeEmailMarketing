import { DbclippingService } from './../../dbclipping.service';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-colaboradores',
  templateUrl: './modal-add-colaboradores.component.html',
  styleUrls: ['./modal-add-colaboradores.component.css']
})
export class ModalAddColaboradoresComponent implements OnInit {
  private colaboradores;
  private newTitlec;
  private newImagemc;
  private newDescc;
  
  constructor(private modalService: NgbModal, private dbclippingService: DbclippingService) { }

  ngOnInit() {
  }
  getColaboradores(){
    return this.dbclippingService.getC().then(colaboradores => {
      this.colaboradores = colaboradores;
    });
  }

 
  addTitleC(){
    this.dbclippingService.addNewC({ titlec: this.newTitlec, imagemc: this.newImagemc, descricaoc: this.newDescc}).then(() => {
      return this.getColaboradores();
    }).then(() => {
      this.newTitlec = ''; // clear input form value
      this.newImagemc = ''; // clear input form value
      this.newDescc = ''; // clear input form value
    });
  }
  
}
