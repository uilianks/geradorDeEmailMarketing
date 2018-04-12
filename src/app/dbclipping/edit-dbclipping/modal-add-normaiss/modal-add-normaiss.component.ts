import { DbclippingService } from './../../dbclipping.service';
import { Component, OnInit } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-modal-add-normaiss',
  templateUrl: './modal-add-normaiss.component.html',
  styleUrls: ['./modal-add-normaiss.component.css']
})
export class ModalAddNormaissComponent implements OnInit {
  private normais;

  private newTitlen;
  private newImagemn;
  private newDescn;
  constructor(private modalService: NgbModal, private dbclippingService: DbclippingService) { }

  getNormais(){
    return this.dbclippingService.getN().then(normais => {
      this.normais = normais;
    });
  }
  addTitleN(){
    this.dbclippingService.addNewn({ titlen: this.newTitlen, imagemn: this.newImagemn, descricaon: this.newDescn}).then(() => {
      return this.getNormais();
    }).then(() => {
      this.newTitlen = ''; // clear input form value
      this.newImagemn = ''; // clear input form value
      this.newDescn = ''; // clear input form value
    });
  }

  ngOnInit() {
  }

}
