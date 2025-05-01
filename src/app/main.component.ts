import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { AccountState } from './account/account.model';
import { deposit, withdraw } from './account/account.actions';
import { CommonModule } from '@angular/common';
import { UiButtonComponent } from './standAloneComponetExample/ui-button/ui-button.component';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [CommonModule, UiButtonComponent], 
  templateUrl: './main.component.html',
  styleUrl: './main.component.css'
})
export class MainComponent {

  balance$: Observable<number>;

  constructor(private store: Store<{ account: AccountState }>) {
    this.balance$ = this.store.select(state => state.account.balance);
  }

  onDeposit() {
    this.store.dispatch(deposit({ amount: 100 }));
  }

  onWithdraw() {
    this.store.dispatch(withdraw({ amount: 50 }));
  }

}
