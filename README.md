# Parallax Cards
Demos speak louder than words: [Demo](https://chetanpate1.github.io/parallax-cards/)

## Motivation
I was inspired by Apple TVs UI, the way the user can swipe over the remote to shimmer the card that was selected.
This micro animation is subtle but adds so much more depth and user interaction to the web.

## Usage
```html
<link rel="stylesheet" href="/dist/parallax-cards.css" />
```

### HTML Markup
```html
<div class="card-container">
  <div class="card"> Your Content </div>
</div>
```
or customise HTML markup names with dist/parallax-cards.scss

### CSS
**NOTE:** Create your own CSS, add translateZ on what elements you want closer or further eg.
```css
.card h1 {
   transform: translateZ(50px);
}
```

### Scripts
```javascript
<script src="/node_modules/jquery/dist/jquery.js"></script>
```
```javascript
<script src="/dist/parallax-cards.js"></script>
```

### Initialize
```javascript
$('.card').parallaxCards(settings);
```

### Settings
How exteme the rotation
```javascript
var settings = {
	tolerance: 30 //between 5 - 100
}
```

## License
[MIT License](https://github.com/ChetanPate1/parallax-cards/blob/master/LICENCE.md)
© Chetan Patel
