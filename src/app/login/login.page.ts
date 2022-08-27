import { Component,  OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Utils } from 'src/utils/utils';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor( 
    private utils: Utils,
    private alertController: AlertController,
    private router: Router
  ) { }
  ngOnInit() {
  }
  async presentAlert() {
    const alert = await this.alertController.create({
      header: 'Alto',
      message: 'Uno de los datos que me diste esta malito!',
      buttons: ['lo intentare otra vez'],
    });

    await alert.present();
  }
  async goHome(form){
    const email = form.form.value['email'];
    const password = form.form.value['password'];
    const isValidData = this.utils.validateLogin(email, password);

    if(isValidData){
      this.router.navigateByUrl(`/home`);
      return
    }
    await this.presentAlert();
  }
}
