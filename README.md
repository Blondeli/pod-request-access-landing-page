# Frontend Mentor - Pod request access landing page solution

This is a solution to the [Pod request access landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/pod-request-access-landing-page-eyTmdkLSG).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](docs/assets/screenshot.png)

### Links

- Solution URL: [https://github.com/Blondeli/pod-request-access-landing-page](https://github.com/Blondeli/pod-request-access-landing-page)
- Live Site URL: [https://blondeli.github.io/pod-request-access-landing-page/](https://blondeli.github.io/pod-request-access-landing-page/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This is the first project where I used HTML forms.

<br/>

I also applied a new method to change the source of an image depending on the screen size:

```html
<div id="image"></div>
```

```css
#image {
  background-image: url("http://www.source");
  background-size: 100% 100%;
  width: 400px;
  height: 400px;
}

@media (max-width: 768px) {
  #image {
    background-image: url("https://www.newsource");
  }
}
```

<br/>

In order to change the colors of the svg images, I applied the filter method. It's important that you first set the color to black (add brightness(0) and saturate(100%) at the beginning of the filter), otherwise it won't work.

```css
#svg-image {
  filter: brightness(0) saturate(100%) invert(40%) sepia(11%) saturate(1238%) hue-rotate(
      187deg
    )
    brightness(94%) contrast(91%);
}
```

### Useful resources

- [Learn HTML Forms In 25 Minutes](https://www.youtube.com/watch?v=fNcJuPIZ2WE) - This helped me to refreshen my knowledge about HTML forms.
- [CSS Filter Color Converter](https://codepen.io/sosuke/pen/Pjoqqp) - This website converts a hexadecimal color to the corresponding CSS filter that is needed to change the background color of an svg image.

## Author

- Frontend Mentor - [@Blondeli](https://www.frontendmentor.io/profile/Blondeli)
- Linkedin - [Elisabeth Martin](https://www.linkedin.com/in/elisabeth-martin-873773199/)
