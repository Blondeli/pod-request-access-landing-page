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
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- View the optimal layout depending on their device's screen size
- See hover states for interactive elements
- Receive an error message when the form is submitted if:
  - The `Email address` field is empty should show "Oops! Please add your email"
  - The email is not formatted correctly should show "Oops! Please check your email"

### Screenshot

![](./screenshot.jpg)

### Links

- Solution URL: [Add solution URL here](https://your-solution-url.com)
- Live Site URL: [Add live site URL here](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow

### What I learned

This is the first project where I used HTML forms. I watched a video on Youtube from Web Dev Simplified to refreshen my knowledge about forms (linked in the "Useful resources" section). In the following, I will highlight some important things about HTML forms:

There are two options to link a label to a specific input:

- The label's "for" attribute needs to have the same name as the input's "id":

```html
<label for="name">Name</label> <input name="name" id="name" />
```

- You nest the input inside the label:

```html
<label>
  Name
  <input name="name" />
</label>
```

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

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Learn HTML Forms In 25 Minutes](https://www.youtube.com/watch?v=fNcJuPIZ2WE) - This helped me to refreshen my knowledge about HTML forms.

**Note: Delete this note and replace the list above with resources that helped you during the challenge. These could come in handy for anyone viewing your solution or for yourself when you look back on this project in the future.**

## Author

- Website - [Add your name here](https://www.your-site.com)
- Frontend Mentor - [@yourusername](https://www.frontendmentor.io/profile/yourusername)
- Twitter - [@yourusername](https://www.twitter.com/yourusername)
