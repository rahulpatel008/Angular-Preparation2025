import { createAction, props } from '@ngrx/store';

export const deposit = createAction(
  '[Account] Deposit',
  props<{ amount: number }>()
);

export const withdraw = createAction(
  '[Account] Withdraw',
  props<{ amount: number }>()
);
