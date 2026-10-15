
"use strict";

// 1. Find the HTML elements we need
const recommendationForm = document.querySelector(
  "#recommendation-form"
);

const nameInput = document.querySelector("#recommendation-name");

const recommendationInput = document.querySelector(
  "#new_recommendation"
);

const recommendationsList = document.querySelector(
  "#all_recommendations"
);

const recommendationDialog = document.querySelector("#popup");

const formStatus = document.querySelector("#form-status");


// 2. Listen for form submissions
recommendationForm.addEventListener("submit", function (event) {
  // Stop the browser from reloading the page
  event.preventDefault();

  // 3. Get and clean the user's input
  const recommendationText = recommendationInput.value.trim();
  const recommendationName = nameInput.value.trim();

  // Extra protection against empty or whitespace-only text
  if (!recommendationText) {
    recommendationInput.focus();
    formStatus.textContent = "Please enter a recommendation.";
    return;
  }

  // 4. Create the recommendation card
  const card = document.createElement("article");
  card.className = "recommendation-card";

  const heading = document.createElement("h3");
  heading.textContent = "Recommendation";

  const quote = document.createElement("blockquote");
  const quoteText = document.createElement("p");

  // Use textContent so user input is treated as text, not HTML
  quoteText.textContent = recommendationText;
  quote.appendChild(quoteText);

  const attribution = document.createElement("p");
  attribution.className = "recommendation-attribution";

  const attributionText = document.createElement("strong");

  attributionText.textContent = recommendationName
    ? `— ${recommendationName}`
    : "— Anonymous";

  attribution.appendChild(attributionText);

  // 5. Assemble the card
  card.append(heading, quote, attribution);

  // Add the new card to the recommendations section
  recommendationsList.appendChild(card);

  // 6. Reset the form and announce the result
  recommendationForm.reset();

  formStatus.textContent = "Your recommendation has been added.";

  // 7. Open the success dialog
  if (!recommendationDialog.open) {
    recommendationDialog.showModal();
  }
});
