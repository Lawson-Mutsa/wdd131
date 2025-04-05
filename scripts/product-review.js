document.addEventListener("DOMContentLoaded", () => {
    // Populate product dropdown if it exists
    const select = document.getElementById("product");
    if (select) {
      const products = [
        { id: "SuperWidget2000", name: "SuperWidget 2000" },
        { id: "MegaGadgetX", name: "MegaGadget X" },
        { id: "UltraCleanerPro", name: "UltraCleaner Pro" },
        { id: "QuantumToaster", name: "QuantumToaster" }
      ];
  
      products.forEach(product => {
        const option = document.createElement("option");
        option.value = product.name;
        option.textContent = product.name;
        select.appendChild(option);
      });
    }
  });
  