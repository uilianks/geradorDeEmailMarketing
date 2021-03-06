import { AuthGuard } from './login-page/auth.guard';
import { Http, HttpModule } from '@angular/http';
import { LoginService } from './login-page/login.service';
import { DbclippingService } from './dbclipping/dbclipping.service';
import { ROUTES } from './app.router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { DbclippingComponent } from './dbclipping/dbclipping.component';
import { MenuComponent } from './menu/menu.component';
import { RouterModule } from '@angular/router';
import { EditDbclippingComponent } from './dbclipping/edit-dbclipping/edit-dbclipping.component';
import { ShowDbclippingComponent } from './dbclipping/show-dbclipping/show-dbclipping.component';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { ModalAddDestaquesComponent } from './dbclipping/edit-dbclipping/modal-add-destaques/modal-add-destaques.component';
import { NgbModule, NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { ModalAddNormaissComponent } from './dbclipping/edit-dbclipping/modal-add-normaiss/modal-add-normaiss.component';
import { ModalAddVagasComponent } from './dbclipping/edit-dbclipping/modal-add-vagas/modal-add-vagas.component';
import { ModalAddColaboradoresComponent } from './dbclipping/edit-dbclipping/modal-add-colaboradores/modal-add-colaboradores.component';
import { ModalAddAniversariantesComponent } from './dbclipping/edit-dbclipping/modal-add-aniversariantes/modal-add-aniversariantes.component';
import { ModalAddDbnamidiaComponent } from './dbclipping/edit-dbclipping/modal-add-dbnamidia/modal-add-dbnamidia.component';
import { DragDropDirectiveModule} from "angular4-drag-drop";
import { AngularDraggableModule } from 'angular2-draggable';
import { LoginPageComponent } from './login-page/login-page.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [
    AppComponent,
    DbclippingComponent,
    MenuComponent,
    EditDbclippingComponent,
    ShowDbclippingComponent,
    ModalAddDestaquesComponent,
    EditDbclippingComponent,
    ModalAddNormaissComponent,
    ModalAddVagasComponent,
    ModalAddColaboradoresComponent,
    ModalAddAniversariantesComponent, 
    ModalAddDbnamidiaComponent, LoginPageComponent

  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    FormsModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    NgbModule.forRoot(),
    DragDropDirectiveModule,
    AngularDraggableModule,
    HttpModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    
  ],
  providers: [DbclippingService,LoginService, HttpClientModule,AuthGuard, NgbActiveModal],
  bootstrap: [AppComponent]
})
export class AppModule { }
