<script>
function initSolutionHiding() {
  const checkButtons = document.querySelectorAll(".webex-button-check");
  const solutionButtons = document.querySelectorAll(".webex-button-solution");

  // If WebEx hasn't built the UI yet, try again shortly
  if (solutionButtons.length === 0) {
    setTimeout(initSolutionHiding, 50);
    return;
  }

  // Hide all solution buttons initially
  solutionButtons.forEach(btn => {
    btn.style.display = "none";
  });

  // CASE 1: Questions WITH a Check button
  checkButtons.forEach(btn => {
    btn.addEventListener("click", () => {
      const box = btn.closest(".webex-box");
      if (!box) return;

      const solBtn = box.querySelector(".webex-button-solution");
      if (solBtn) solBtn.style.display = "inline-block";
    });
  });

  // CASE 2: Questions WITHOUT a Check button
  document.querySelectorAll(".webex-box").forEach(box => {
    const hasCheck = box.querySelector(".webex-button-check");
    const solBtn = box.querySelector(".webex-button-solution");

    if (!hasCheck && solBtn) {
      // Reveal solution button immediately
      solBtn.style.display = "inline-block";
    }
  });

  console.log("Solution hiding initialized (with no-check support)");
}

initSolutionHiding();

</script>
