import { DbclippingService } from './../../dbclipping.service';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-add-vagas',
  templateUrl: './modal-add-vagas.component.html',
  styleUrls: ['./modal-add-vagas.component.css']
})
export class ModalAddVagasComponent implements OnInit {
  private vagas;
  private newTitlev;
  private newImagemv;
  private newDescv;

  constructor(private modalService: NgbModal, private dbclippingService: DbclippingService) { }

  ngOnInit() {
  }
  getVagas(){
    return this.dbclippingService.getV().then(vagas => {
      this.vagas = vagas;
    });
  }
  addTitleV(){
    this.dbclippingService.addNewV({ titlev: this.newTitlev, imagemv: this.newImagemv, descricaov: this.newDescv}).then(() => {
      return this.getVagas();
    }).then(() => {
      this.newTitlev = ''; // clear input form value
      this.newImagemv = ''; // clear input form value
      this.newDescv = ''; // clear input form value
    });
  }
}
