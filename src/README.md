# 📘 Angular 19 Reactive Forms Example (v19.2.0)

This project demonstrates how to build a complete Angular **Reactive Form** using Angular `19.2.0`, with the following features:

- ✅ Individual **standalone components** for each form field
- 📞 **Dynamic PhoneNumber & MobileNumber** fields with `FormArray`
- 🔍 **Custom validator** for username field
- 🛡️ **Validation for all fields**
- 💾 **Save**, 🔁 **Reset**, and ❌ **Cancel** buttons
- 🎨 Clean and minimal **CSS styling**
- 📢 **Alert on Save** showing all valid form values

---

## ✅ Prerequisites

Make sure you have **Angular CLI version `19.2.0`** installed:

```bash
npm install -g @angular/cli@19.2.0
```

# ✅ Features – Angular Reactive Forms Project

This section highlights the key features of the Angular Reactive Forms project, designed using Angular 19.2.0 with standalone components and dynamic form handling.

---

## 🧠 Fully Reactive Form

Built entirely using Angular’s `FormBuilder`, `FormGroup`, and `FormArray` for robust and dynamic form management. Each form field is encapsulated within a standalone component for modular design and reusability.

---

## 📱 Dynamic Phone & Mobile Fields

- Dynamically add or remove **Phone** and **Mobile** number fields.
- Managed via `FormArray` to keep the form scalable and organized.
- Real-time validation ensures correct input structure.

---

## ⚠️ Validation Messages

- Validation feedback is shown **on blur** or **on form submission**.
- Improves user experience by guiding users to fix errors immediately.
- Includes both built-in validators and custom error handling.

---

## 🔍 Custom Username Validator

- Implemented in `username.validator.ts`.
- Prevents invalid or reserved usernames.
- Easily reusable across multiple components or forms.

---

## 🧵 Form Actions

- **Save** – Triggers an `alert()` showing valid form values in a readable format.
- **Reset** – Clears all form fields to their initial state.
- **Cancel** – Cancels the operation and can optionally navigate back to a previous view.

---

_This modular, scalable approach makes the form codebase easier to maintain, test, and expand in future projects._

