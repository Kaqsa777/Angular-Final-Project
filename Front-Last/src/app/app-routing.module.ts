import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {BiletebiService} from './biletebi.service';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

title = "biletebi";
constructor(private user:BiletebiService){
  this.user.getData().subscribe(data=>{
    console.warn(data)
  })

  
}


}
