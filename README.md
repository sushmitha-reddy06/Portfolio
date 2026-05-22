# Professional Portfolio - Sushmitha Reddy Ellala

This is a modern, responsive, and dynamic personal portfolio website built with HTML, CSS, and JavaScript. It features a dark-themed design with "glassmorphism" effects, smooth scroll animations, and a mobile-friendly layout.

## 🚀 Getting Started

Since this is a static website, you don't need to install any heavy dependencies.

### Option 1: Open Directly
Simply double-click the `index.html` file to open it in your web browser.

### Option 2: Run with a Local Server (Recommended for development)
If you have Node.js installed or VS Code:

**Using VS Code Live Server Extension:**
- Right-click `index.html` and select "Open with Live Server".

**Using npx:**
Run this command in the project folder:
```bash
npx serve .
```

## 🛠 Customization

### 1. Update Personal Info
Open `index.html` to change:
- Navigation links
- Hero section text (Bio, Tagline)
- Contact information
- Footer text

### 2. Add/Edit Projects
Open `script.js` and modify the `projects` array at the top of the file:
```javascript
const projects = [
    {
        title: "Your Project Name",
        description: "Project description...",
        tech: ["Tech 1", "Tech 2"],
        image: "path/to/image.png", // Optional
        githubLink: "https://github.com/...",
        liveLink: "https://..."
    },
    // ...
];
```

### 3. Skills
Open `index.html` and look for the `<section id="skills">`. You can manually edit the tags inside the `div class="tags"`.

### 4. Images
Place your project images in an `assets` folder (create one if it doesn't exist) and reference them in `script.js`.

### 5. Resume / CV
Place your PDF resume file in the `assets` folder and name it `Sushmitha_Resume.pdf`. This will allow the "Download CV" button to work.

## 🎨 Design Features
- **Responsive Navigation**: Hamburger menu for mobile devices.
- **Scroll Animations**: Elements fade in as you scroll down.
- **Interactive Elements**: Hover effects on cards and buttons.
- **Animated Background**: Floating globes in the background.

## License
Free to use for your personal portfolio.
