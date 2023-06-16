import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { SendMessageComponent } from './send-message/send-message.component';
import { ResultsComponent } from './results/results.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'send', component: SendMessageComponent },
  { path: 'result', component: ResultsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
