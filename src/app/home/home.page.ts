import { Component } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { Utils } from 'src/utils/utils';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public logedUser = JSON.parse(window.localStorage.getItem('user'));;
  public nombre: string;
  public nombreForma;
  public apellidoForma;

  constructor(
    private alertController: AlertController
    ) {
    this.nombre = this.logedUser.name;
  }

  limpiar(event){
    event.target.offsetParent.children[0].reset()
  }

  async presentAlert(e) {
    this.nombreForma = e.form.value.nombre;
    this.apellidoForma = e.form.value.apellido;
    const alert = await this.alertController.create({
      header: 'usuario',
      message: `su nombre es ${this.nombreForma} ${this.apellidoForma}`,
      buttons: ['OK'],
    });

    await alert.present();
  }

}
