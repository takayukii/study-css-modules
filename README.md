# example-css-modules

babel-plugin-react-css-modulesに関する調査記録です。

## 検証1

bootstrap-sassから読み込む

index.scss

```scss
@import "~bootstrap-sass/assets/stylesheets/bootstrap/variables";
@import "~bootstrap-sass/assets/stylesheets/bootstrap/mixins";
@import "~bootstrap-sass/assets/stylesheets/bootstrap/normalize";
@import "~bootstrap-sass/assets/stylesheets/bootstrap/forms";
@import "~bootstrap-sass/assets/stylesheets/bootstrap/buttons";
```

index.js

```javascript
import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

ReactDOM.render(
  (
    <h1>Hello.</h1>
  ),
  document.getElementById('spa-root')
);
```

結果としてstyle loaderによって下記のようなstyleタグが挿入される。

```css
html {
  font-family: sans-serif;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%; }

body {
  margin: 0; }

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
main,
menu,
nav,
section,
summary {
  display: block; }

audio,
canvas,
progress,
video {
  display: inline-block;
  vertical-align: baseline; }

...

.src-___index__form-control___29Gdt {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857;
  color: #555555;
  background-color: #fff;
  background-image: none;
  border: 1px solid #ccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  -o-transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s;
  transition: border-color ease-in-out 0.15s, box-shadow ease-in-out 0.15s; }
  .src-___index__form-control___29Gdt:focus {
    border-color: #66afe9;
    outline: 0;
    -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }
  .src-___index__form-control___29Gdt::-moz-placeholder {
    color: #999;
    opacity: 1; }
  .src-___index__form-control___29Gdt:-ms-input-placeholder {
    color: #999; }
  .src-___index__form-control___29Gdt::-webkit-input-placeholder {
    color: #999; }
  .src-___index__form-control___29Gdt::-ms-expand {
    border: 0;
    background-color: transparent; }
  .src-___index__form-control___29Gdt[disabled], .src-___index__form-control___29Gdt[readonly],
  fieldset[disabled] .src-___index__form-control___29Gdt {
    background-color: #eeeeee;
    opacity: 1; }
  .src-___index__form-control___29Gdt[disabled],
  fieldset[disabled] .src-___index__form-control___29Gdt {
    cursor: not-allowed; }
```


