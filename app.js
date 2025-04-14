document.getElementById("paymentForm").addEventListener("submit", function (e) {
    e.preventDefault(); // 👈 Evita que el formulario se envíe


    const errorBox = document.getElementById("errorBox");
    const errorList = document.getElementById("errorList");
    errorBox.classList.add("d-none");
    errorList.innerHTML = "";

    let errors = [];

    const fields = [
      { id: "cardNumber", label: "Card number", validate: val => val.length >= 12 },
      { id: "cvcNumber", label: "CVC number", validate: val => val.length >= 3 },
      { id: "amount", label: "Amount", validate: val => parseFloat(val) > 0 },
      { id: "firstName", label: "First name", validate: val => val.trim() !== "" },
      { id: "lastName", label: "Last name", validate: val => val.trim() !== "" },
      { id: "city", label: "City", validate: val => val.trim() !== "" },
      { id: "state", label: "State", validate: val => val !== "" },
      { id: "postalCode", label: "Postal Code", validate: val => val.length >= 4 },
    ];
    fields.forEach(field => {
      const input = document.getElementById(field.id);
      const value = input.value.trim();
      const isValid = field.validate(value);

      if (!isValid) {
        errors.push(`⚠️ ${field.label} is invalid or missing.`);
        input.classList.add("bg-danger-subtle");
      } else {
        input.classList.remove("bg-danger-subtle");
      }
    });
    if (errors.length > 0) {
      errorBox.classList.remove("d-none");
      errors.forEach(err => {
        const li = document.createElement("li");
        li.textContent = err;
        errorList.appendChild(li);
      });
    } else {
      alert("✅ Form is valid and ready to be submitted!");
    }
  });