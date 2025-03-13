// Function to update values dynamically when sliders change
function updateResults() {
  let traffic = parseFloat(document.getElementById("traffic").value);
  let conversionRate =
    parseFloat(document.getElementById("conversionRate").value) / 100; // Convert to decimal
  let orderValue = parseFloat(document.getElementById("orderValue").value);
  let seoCost = parseFloat(document.getElementById("seoCost").value);

  // Update slider value displays
  document.getElementById("trafficValue").innerText = traffic.toLocaleString();
  document.getElementById("conversionRateValue").innerText = (
    conversionRate * 100
  ).toFixed(1);
  document.getElementById("orderValueValue").innerText =
    orderValue.toLocaleString();
  document.getElementById("seoCostValue").innerText = seoCost.toLocaleString();

  // Calculate ROI Metrics
  let conversions = Math.round(traffic * conversionRate); // Total conversions
  let netRevenue = conversions * orderValue; // Monthly revenue
  let totalLifetimeValue = netRevenue; // Assuming a single-time revenue calculation
  let roi = ((netRevenue - seoCost) / seoCost) * 100; // ROI percentage

  // Update results in real-time
  document.getElementById("resultVisitors").innerText =
    traffic.toLocaleString();
  document.getElementById("resultConversions").innerText =
    conversions.toLocaleString();
  document.getElementById("resultAOV").innerText = orderValue.toLocaleString();
  document.getElementById("resultRevenue").innerText =
    netRevenue.toLocaleString();
  document.getElementById("resultLifetime").innerText =
    totalLifetimeValue.toLocaleString();
  document.getElementById("resultROI").innerText = roi.toFixed(2);
}

// Attach event listeners to all sliders
document.querySelectorAll("input[type='range']").forEach((slider) => {
  slider.addEventListener("input", updateResults);
});

// Run once to initialize results on page load
updateResults();
document.getElementById("hamburger").addEventListener("click", function () {
  const navItems = document.querySelector(".nav-items");
  navItems.classList.toggle("active");
});
