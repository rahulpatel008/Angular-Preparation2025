import { createReducer, on } from '@ngrx/store';
import { deposit, withdraw } from './account.actions';
import { AccountState } from './account.model';

export const initialState: AccountState = {
  balance: 0
};

export const accountReducer = createReducer(
  initialState,
  on(deposit, (state, { amount }) => ({
    ...state,
    balance: state.balance + amount
  })),
  on(withdraw, (state, { amount }) => ({
    ...state,
    balance: state.balance - amount
  }))
);
