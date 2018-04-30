import { DbclippingService } from './../../dbclipping.service';
import { Component, OnInit, Output, Input, EventEmitter, ViewChild, ViewEncapsulation } from '@angular/core';
import {NgbModal, ModalDismissReasons} from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-modal-add-destaques',
  templateUrl: './modal-add-destaques.component.html',
  styleUrls: ['./modal-add-destaques.component.css']
})
export class ModalAddDestaquesComponent implements OnInit {
  private destaques;
  private newTitle;
  private newImagem;
  @Output() private newDesc;


  constructor(private dbclippingService: DbclippingService,private modalService: NgbModal) { }
  closeResult: string;

  ngOnInit() {
  }

  addTitle(){
    this.dbclippingService.addNew({ title: this.newTitle, imagem: this.newImagem, descricao: this.newDesc}).then(() => {
      return this.getDestaques();
    }).then(() => {
      this.newTitle = ''; // clear input form value
      this.newImagem = ''; // clear input form value
      this.newDesc = ''; // clear input form value
    });
  }
  getDestaques(){
    return this.dbclippingService.get().then(destaques => {
      this.destaques = destaques;
    });
  }
 
 
}
