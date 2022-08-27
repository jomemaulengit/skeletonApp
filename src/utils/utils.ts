import { NgModule } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { dbData } from './db.mock';

@NgModule({
    imports: [],
    declarations: []
  })
export class Utils {
  private dbData = dbData;
  constructor(){}

  public validateLogin(email,password): boolean{
    const searchObject= dbData.find((user) => user.email==email);
    if(searchObject === undefined){
        return false
    }
    
    if(searchObject.password != password){
        return false
    }
    window.localStorage.setItem('user',JSON.stringify(searchObject));
    return true;
  }
}
