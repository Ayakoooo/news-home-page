# Frontend Mentor - News homepage solution

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Screenshot
View the [website live](https://ayakoooo.github.io/news-home-page/) 

![](/assets/images/screenshot.png)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow

### What I learned

This is one of the first projects in which I have used the `grid-template-areas` property to create a layout. It made me realize how powerful this property can be and how enjoyable it is to use.

```css
.grid-layout {
  grid-template-areas:
    "banner banner"
    "heading cta"
    "article article";
  grid-auto-columns: 1fr;
}
```

### Continued development

I want to continue working on improving website accessibility by using proper HTML structure and implementing `aria` attributes.
