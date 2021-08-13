---
title: 'A little view of my Systems Engineering career'
date: '2021-07-06'
---

# Some CSS tips to mantain clean CSS code  
In this short article I'm going to enumerate some practices in CSS that will improve the code quality, being more mantainable.  

## Use shorthands  

With shorthands we can write less code to do the same things. That is, we will write more compact code.  
Let's see an example  

```css
.box{
    background-color: #000;
    background-image: url(images/bg.png);
    background-repeat: no-repeat;
    background-position: left top;
}
```  

This could be just one line of code writting it as follows  

```css
.box{
    background: #000 url(images/bg.png) no-repeat left top;
}
```  

And the code have now 3 lines less of code.  
Visit this [link](https://developer.mozilla.org/en-US/docs/Web/CSS/Shorthand_properties) to know more about shorthand properties.  


## DRY (Dont Repeat Yourself)  

With this, I mean, parameterize what changes. If we have 3 elements that are similar in many ways, abstract that *"repeated code"* in one place and make variable what changes.  

The following code is wrong  

```html
<button type="submit" class="btn-send">Send</button>
<button type="submit" class="btn-cancel">Cancel</button>

```  
But written as follows, is right  

```html
<button type="submit" class="btn btn-send">Send</button>
<button type="submit" class="btn btn-cancel">Cancel</button>

```  

*Can you guess what is the class that avoids to repeat code?*  

## Good selector names  

A good selector name is  
*   self-descriptive  
*   readable  
*   short  

This is an aweful className  

```css
.p{background-color: red;}
```

This could be a better name for a paragraph  

```css
.articleParagraph{background-color: red;}
```  

In order to do so, you must think in functionalities, not positions or things that could change in the future. An article will always be an article, in fact, if we call some element as **"topText"**, in two months maybe we would like to change the text position to the bottom and that name have no more sense.  


# Conclusion  
And that's it, these are some useful tips that anyone can implement from the beginning to write more readable and mantainable code, in order to work in groups more easily.  


