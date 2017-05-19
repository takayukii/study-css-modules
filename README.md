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

### 検証2

bootstrap-sassのクラスを利用する。

```javascript
<form>
  <div styleName="form-group">
  <label htmlFor="exampleInputEmail1">Email address</label>
  <input type="email" styleName="form-control" id="exampleInputEmail1" placeholder="Email" />
  </div>
  <div styleName="form-group">
  <label htmlFor="exampleInputPassword1">Password</label>
  <input type="password" styleName="form-control" id="exampleInputPassword1" placeholder="Password" />
  </div>
  <div styleName="form-group">
  <label htmlFor="exampleInputFile">File input</label>
  <input type="file" id="exampleInputFile" />
  <p styleName="help-block">Example block-level help text here.</p>
  </div>
  <div styleName="checkbox">
  <label>
    <input type="checkbox" /> Check me out
  </label>
  </div>
  <button type="submit" styleName="btn btn-default">Submit</button>
</form>
```

下記のエラーが発生する。

```
ERROR in ./src/index.jsx
Module build failed: Error: /Users/takayukii/workspaces/sandbox/example-css-modules/src/index.jsx: Could not resolve the styleName 'form-group'.
```

クラスを利用するにはimportしているscssに定義が必要になる。先程のscssに定義を追記する。

```scss
.form-group {
  @extend .form-group;
}
.form-control {
  @extend .form-control;
}
.help-block {
  @extend .help-block;
}
.checkbox {
  @extend .checkbox;
}
.btn {
  @extend .btn;
}
.btn-default {
  @extend .btn-default;
}
```

下記のようにCSSクラスは同じ。名前を変えなかったためか。

```css
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
  [disabled].src-___index__form-control___29Gdt, [readonly].src-___index__form-control___29Gdt,
  fieldset[disabled] .src-___index__form-control___29Gdt {
    background-color: #eeeeee;
    opacity: 1; }
  [disabled].src-___index__form-control___29Gdt,
  fieldset[disabled] .src-___index__form-control___29Gdt {
    cursor: not-allowed; }
```

再定義は面倒だが使っているクラスが明確になるのは良いかもしれない。しかし@importする事で最終的なstyleタグには含まれるのにReact側で使えないというのは微妙。

### 調査3

CSSのbootstrapを使う。次のサイトからGlyphiconsを抜いてダウンロードして利用する。

http://getbootstrap.com/customize/?id=6c08966c5aaa35e929c10b7f1f16768e

React側から問題なく利用することができる。

```css
.src-___bootstrap__form-control___1jnT6 {
  display: block;
  width: 100%;
  height: 34px;
  padding: 6px 12px;
  font-size: 14px;
  line-height: 1.42857143;
  color: #555555;
  background-color: #ffffff;
  background-image: none;
  border: 1px solid #cccccc;
  border-radius: 4px;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075);
  -webkit-transition: border-color ease-in-out .15s, -webkit-box-shadow ease-in-out .15s;
  -o-transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s;
  transition: border-color ease-in-out .15s, box-shadow ease-in-out .15s; }

.src-___bootstrap__form-control___1jnT6:focus {
  border-color: #66afe9;
  outline: 0;
  -webkit-box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6);
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(102, 175, 233, 0.6); }

.src-___bootstrap__form-control___1jnT6::-moz-placeholder {
  color: #999999;
  opacity: 1; }

.src-___bootstrap__form-control___1jnT6:-ms-input-placeholder {
  color: #999999; }

.src-___bootstrap__form-control___1jnT6::-webkit-input-placeholder {
  color: #999999; }
```
