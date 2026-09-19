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
    return this.form.checkValidity();
  }

  reset() {
    this.form.reset();
  }
}
