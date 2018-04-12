import { DbclippingService } from './../../dbclipping.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-add-aniversariantes',
  templateUrl: './modal-add-aniversariantes.component.html',
  styleUrls: ['./modal-add-aniversariantes.component.css']
})
export class ModalAddAniversariantesComponent implements OnInit {

  private aniversariantes;
  private newTitlea;
  private newImagema;
  private newDesca;

  constructor(private modalService: NgbModal, private dbclippingService: DbclippingService) { }

  ngOnInit() {
  }

  getAniversariantes(){
    return this.dbclippingService.getA().then(aniversariantes => {
      this.aniversariantes = aniversariantes;
    });
  }
  addTitleA(){
    this.dbclippingService.addNewA({ titlea: this.newTitlea, imagema: this.newImagema, descricaoa: this.newDesca}).then(() => {
      return this.getAniversariantes();
    }).then(() => {
      this.newTitlea = ''; // clear input form value
      this.newImagema = ''; // clear input form value
      this.newDesca = ''; // clear input form value
    });
  }
}
