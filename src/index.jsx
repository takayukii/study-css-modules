import React from 'react';
import ReactDOM from 'react-dom';

import bs from './bootstrap.css';
import cs from './index.scss';

ReactDOM.render(
  (
    <form styleName="cs.red-colored">
      <div styleName="bs.form-group">
        <label htmlFor="exampleInputEmail1">Email address</label>
        <input type="email" styleName="bs.form-control" id="exampleInputEmail1" placeholder="Email" />
      </div>
      <div styleName="bs.form-group">
        <label htmlFor="exampleInputPassword1">Password</label>
        <input type="password" styleName="bs.form-control" id="exampleInputPassword1" placeholder="Password" />
      </div>
      <div styleName="bs.form-group">
        <label htmlFor="exampleInputFile">File input</label>
        <input type="file" id="exampleInputFile" />
          <p styleName="bs.help-block">Example block-level help text here.</p>
      </div>
      <div styleName="bs.checkbox">
        <label>
          <input type="checkbox" /> Check me out
        </label>
      </div>
      <button type="submit" styleName="bs.btn bs.btn-default">Submit</button>
    </form>
  ),
  document.getElementById('spa-root')
);
