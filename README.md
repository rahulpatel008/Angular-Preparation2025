# Angular-Preparation2025

NgRx Data Flow (Quick Recap)

UI (Button Click) --> then
Dispatch Action --> then
Reducer Updates State --> then
Store Holds New State --> then
UI Reacts via Observable

1. account.model.ts — Define State
 Why?
Defines the shape of your state — here, it has just one property: balance.


2. account.actions.ts — Define Actions
What happens?
Describes what the user wants to do: Deposit or Withdraw money.

Each action carries data (amount) that the reducer will use.


3. account.reducer.ts — Handle State Changes
What happens?
When a deposit action happens, it adds to balance.

When a withdraw action happens, it subtracts from balance.

It returns a new state every time (immutability).


4. main.config.ts — Register Reducer with NgRx Store
What happens?
You tell Angular: “Hey, here's my reducer, plug it into the global store.”

The store can now manage the account state.


5. app.component.ts — Use the Store in UI
What happens?
store.select(...) reads balance from the store as an Observable.

store.dispatch(...) sends an action to the reducer.

The UI updates automatically when state changes (async pipe handles it).


6. app.component.html — Show and Control UI
What happens?
balance$ | async auto-updates the UI when the state changes.

Button clicks call component methods → dispatch actions.