# Personal Portfolio Website

A responsive personal portfolio website built as the final project for IBM's Front-End Development course series, **Introduction to HTML, CSS, and JavaScript**.

The project began with starter code provided as part of the course. I used it as a foundation to practise front-end development, improve the page structure and accessibility, refine the responsive styling, and implement interactive recommendation functionality with JavaScript.

## Overview

This portfolio introduces me, highlights selected projects and technical skills, and allows visitors to submit recommendations through an interactive form.

It was an opportunity to apply the fundamentals of HTML, CSS, and JavaScript in a practical project while learning how to write more maintainable, accessible, and responsive front-end code.

## Features

- **Personal introduction:** A profile section with a portrait and introductory information.
- **Skills showcase:** Cards highlighting selected technical skills, including HTML, JavaScript, React, Java, and Node.js.
- **Project portfolio:** A section featuring Gravio, Track SD, and OnboardX.
- **Recommendations:** Sample testimonials displayed in a structured layout.
- **Interactive recommendation form:** Visitors can enter a recommendation and optionally provide their name.
- **Dynamic content:** JavaScript creates and displays new recommendation cards without reloading the page.
- **Success dialog:** A confirmation dialog appears after a recommendation is submitted.
- **Responsive layout:** CSS Grid, Flexbox, and media queries help the page adapt to different screen sizes.
- **Accessibility improvements:** Semantic HTML, descriptive image alternatives, form labels, visible keyboard focus, and accessible status messages.
- **Reduced-motion support:** Respects the visitor's system preference for reduced motion.

## Technologies Used

- **HTML5** — semantic page structure and accessible form elements.
- **CSS3** — responsive layouts, styling, custom properties, transitions, and media queries.
- **JavaScript (ES6+)** — form handling, DOM manipulation, input validation, and dialog interactions.
- **Git and GitHub** — source control and project hosting.

## Project Structure

```text
portfolio/
└── html_finalprojimages/
    ├── IMG-20261015-WA0013.jpg
    └── ...other project images
├── index.html
├── script.js
├── style.css

```

## Getting Started

This is a static front-end project. No backend or package installation is required to view the basic website.

### 1. Clone the repository

Replace the placeholder with your GitHub repository URL.

```bash
git clone <your-repository-url>
```

### 2. Open the project

Navigate into the project directory:

```bash
cd portfolio
```

Open `index.html` in your browser, or use the Live Server extension in Visual Studio Code for a local development server.

### 3. Explore the code

- Edit `index.html` to update your profile, skills, projects, and sample recommendations.
- Edit `style.css` to customise the visual design and responsive layout.
- Edit `script.js` to explore or extend the recommendation form interactions.

## How the Recommendation Form Works

When a visitor submits a recommendation:

1. JavaScript handles the form submission and prevents the browser's default page reload.
2. The submitted text is trimmed to remove unnecessary leading and trailing whitespace.
3. JavaScript creates a recommendation card using DOM methods and displays the submitted content as text.
4. The visitor's name is displayed when provided; otherwise, the recommendation is attributed to Anonymous.
5. The form is reset, a status message is announced, and a success dialog opens.

### Current limitation

Recommendations are added dynamically to the current page and are **not permanently stored**. Newly submitted recommendations disappear when the page is refreshed. Persistent storage would require an additional storage solution or backend, which is outside the current project's scope.

## What I Learned

Through this project, I practised:

- Structuring a website with semantic HTML.
- Using CSS Grid, Flexbox, and media queries to create responsive layouts.
- Connecting JavaScript to HTML elements using DOM selectors and event listeners.
- Creating and inserting HTML elements dynamically.
- Handling and validating user input.
- Using `textContent` to display user-provided content more safely.
- Improving accessibility through semantic elements, keyboard focus styles, and live status announcements.
- Separating structure, presentation, and behaviour into HTML, CSS, and JavaScript files.

## Acknowledgements

This project was completed as the final project for IBM's Front-End Development course series, **Introduction to HTML, CSS, and JavaScript**. The initial starter code was provided as part of the course, and the project was refined during the learning and development process.

