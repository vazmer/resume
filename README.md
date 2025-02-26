Hope You Enjoyed My Resume!
---------

This custom resume was built with HTML, [Astro](https://astro.build/), [Tailwind CSS](https://tailwindcss.com/), and the [Universal Résumé Template](https://github.com/WebPraktikos/universal-resume)

Check Out My Finished Resume
--------
Hosted with Netlify & Mobile Responsive [Bojan Vazmer - Resume](https://bojan-vazmer.netlify.app/)

How to run it
---------

Navigate to the base directory:

```
cd bojan-vazmer-resume
```

Install the dependencies:

```
npm install
```

Start the development server:

```
npm run start
```

Only generate CSS that is used on the page which results in a much smaller file size:

```
npm run build
```

Generate Resume PDF file using Playwright:

```
npm run generate-pdf:ci
```

Starting Point
---------

`dist/index.html` is the main content file. By copying HTML: add pages, sections, subsection, and other parts.

`npm run build` will make the **docs** directory ready for drag-n-drop to, for example, https://app.netlify.com/drop (free registration required beforehand).

Also, it’s ready for push to GitHub and integration with GitHub Pages. GitHub Pages are free for public repositories. Under your repository name, not profile, click “Settings” and enable GitHub Pages by navigating to: `Options → GitHub Pages → Source → /docs`.

Tailwind CSS
---------

Tailwind CSS is a highly customizable, low-level CSS framework that gives you all of the building blocks you need to build bespoke designs without any annoying opinionated styles you have to fight to override. It has a great [documentation](https://tailwindcss.com/docs/installation).


Build Your Own Resume
--------

- Made With Universal Résumé Template
- Credit To @webpraktikos For The Repo
