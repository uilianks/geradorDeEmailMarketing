import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { DbclippingService } from './../../dbclipping.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-modal-add-dbnamidia',
  templateUrl: './modal-add-dbnamidia.component.html',
  styleUrls: ['./modal-add-dbnamidia.component.css']
})
export class ModalAddDbnamidiaComponent implements OnInit {
  private dbnamidia;
  private newTitlem;
  private newImagemm;
  private newDescm;

  constructor(private dbclippingService: DbclippingService,private modalService: NgbModal) { }

  ngOnInit() {
  }
  addTitleM(){
    this.dbclippingService.addNewM({ titlem: this.newTitlem, imagemm: this.newImagemm, descricaom: this.newDescm}).then(() => {
      return this.getDnamidia();
    }).then(() => {
      this.newTitlem = ''; // clear input form value
      this.newImagemm = ''; // clear input form value
      this.newDescm = ''; // clear input form value
    });
  }
  getDnamidia(){
    return this.dbclippingService.getM().then(dbnamidia => {
      this.dbnamidia = dbnamidia;
    });
  }
}
