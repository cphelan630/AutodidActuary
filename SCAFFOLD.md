```markdown
# GitHub Copilot Prompt — Scaffold “autodidactuary” GitHub Pages site  
Create a minimal, responsive static website suitable for GitHub Pages.

1. **Files & structure**  
```

/index.html
/books.html
/clips.html
/thoughts.html
/cas-exam-prep.html
/quotes.html
/comedy.html
/assets/css/style.css
/assets/js/site.js           # only if needed for dark-mode toggle or menu collapse

```

2. **Global layout requirements**  
* Use semantic HTML5 (`<header>`, `<nav>`, `<main>`, `<footer>`).  
* Top of every page: a fixed, responsive navigation bar with six tabs **exactly** in this order:  
  `Books  |  Clips  |  Thoughts  |  CAS Exam Prep  |  Quotes  |  Comedy`  
  – highlight the active tab via an `.active` class.  
  – collapse into a hamburger menu under 640 px width.  
* Clean, minimalist styling: system font stack, wide reading width, plenty of white-space.  
* Provide a light theme by default and a dark theme that can be toggled with a small moon/sun button stored in `localStorage`.  
* Footer on every page: “© 2025 Connor Phelan • autodidactuary” and a GitHub icon linking to `https://github.com/<username>`.

3. **Page-specific placeholders**  
* **index.html** — short welcome blurb and site mission (“a digital garden of self-directed learning”).  
* **books.html** — unordered list (`<ul>`) with three sample book-review cards.  
* **clips.html** — responsive grid of three embedded YouTube iframes (use dummy IDs).  
* **thoughts.html** — Markdown-style blog roll; show two example posts in `<article>` blocks.  
* **cas-exam-prep.html** — starter outline for study resources and your planned review notes.  
* **quotes.html** — blockquote gallery with two sample quotes.  
* **comedy.html** — placeholder paragraph inviting future stand-up clips or jokes.

4. **CSS guidelines (assets/css/style.css)**  
* CSS variables for color themes (`--bg`, `--text`, `--link`).  
* Mobile-first; max-width = 72ch for main text.  
* Subtle `:hover` transition on nav links.  
* Use Flexbox for the nav; CSS Grid for the Clips page thumbnails.

5. **(Optional) JS (assets/js/site.js)**  
* Dark-mode toggle logic.  
* Hamburger menu toggle for small screens (add/remove `show` class).

Deliver fully validated HTML (W3C), commented where non-obvious. No external build tools—pure HTML/CSS/JS so the repo can be served directly by GitHub Pages.
```
