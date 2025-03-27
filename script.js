function calculateROI() {
  // Get input values
  const searchVolume = parseFloat(
    document.getElementById("searchVolume").value
  );
  const ctr = parseFloat(document.getElementById("ctr").value) / 100;
  const conversionRate =
    parseFloat(document.getElementById("conversionRate").value) / 100;
  const averageOrderValue = parseFloat(
    document.getElementById("averageOrderValue").value
  );
  const lifeTimeValue = parseFloat(
    document.getElementById("lifeTimeValue").value
  );

  // Validate inputs
  if (
    isNaN(searchVolume) ||
    isNaN(ctr) ||
    isNaN(conversionRate) ||
    isNaN(averageOrderValue) ||
    isNaN(lifeTimeValue)
  ) {
    alert("Please fill in all fields with valid numbers.");
    return;
  }

  // Calculate values with proper rounding
  const visitors = searchVolume * ctr;
  const conversions = visitors * conversionRate;
  const netRevenue = conversions * averageOrderValue;
  const totalLifetimeValue = conversions * lifeTimeValue;

  // Update results and apply rounding only when displaying
  document.getElementById("resultVisitors").textContent =
    Math.round(visitors).toLocaleString();
  document.getElementById("resultConversions").textContent =
    Math.round(conversions).toLocaleString();
  document.getElementById("resultAOV").textContent =
    averageOrderValue.toLocaleString();
  document.getElementById("resultRevenue").textContent =
    Math.round(netRevenue).toLocaleString();
  document.getElementById("resultLifetimeValue").textContent =
    Math.round(totalLifetimeValue).toLocaleString();
  document.getElementById("resultROI").textContent =
    Math.round(netRevenue).toLocaleString();

  // Show results
  document.getElementById("results").style.display = "flex";
}
