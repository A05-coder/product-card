export class Form {
  constructor(formId) {
    this.form = document.getElementById(formId);
  }

  getValues() {
    const formData = new FormData(this.form);
    const values = {};
    
    formData.forEach((value, key) => {
      values[key] = value.trim();
    });
    
    return values;
  }

  isValid() {
    if (!this.form.checkValidity()) {
      return false;
    }

    const values = this.getValues();
    if (values.password !== values.passwordConfirm) {
      return false;
    }

    return true;
  }

  reset() {
    this.form.reset();
  }
}
