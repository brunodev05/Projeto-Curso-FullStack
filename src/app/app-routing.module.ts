import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { ChatComponent } from './pages/chat/chat.component';

const routes: Routes = [
  {path:'',component:LoginComponent},
  {path:'chat',component:ChatComponent},
  {path:'cadastro',component:CadastroComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

