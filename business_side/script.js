    console.log("dashboard live");
    const nameEl =   document.getElementById("bsName");
    if (nameEl) {
    const businessName = sessionStorage.getItem("businessName");
    if (businessName) {
      nameEl.textContent = businessName;
    }
  }
    