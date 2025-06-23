// Future interactivity can be added here
// Example: Cart count or dropdowns
console.log("Amazon UI loaded");

// Example: Alert when Add to Cart is clicked
document.querySelectorAll(".product-card button").forEach(btn => {
  btn.addEventListener("click", () => {
    alert("Item added to cart!");
  });
});
