import { Component, OnInit, Output, Input, EventEmitter } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-edit-dbclipping',
  templateUrl: './edit-dbclipping.component.html',
  styleUrls: ['./edit-dbclipping.component.css']
})
export class EditDbclippingComponent implements OnInit {
    constructor(private modalService: NgbModal) { }

  ngOnInit() {
  }

  openLg(content) {
    this.modalService.open(content, { size: 'lg' });
  }
  openLgn(contentn) {
    this.modalService.open(contentn, { size: 'lg' });
  }
  openLgv(contentv) {
    this.modalService.open(contentv, { size: 'lg' });
  }
  openLgc(contentc) {
    this.modalService.open(contentc, { size: 'lg' });
  }
  openLga(contenta) {
    this.modalService.open(contenta, { size: 'lg' });
  }
  openLgm(contentm) {
    this.modalService.open(contentm, { size: 'lg' });
  }


 

  



}
