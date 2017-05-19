import React from 'react';
import ReactDOM from 'react-dom';

import './index.scss';

ReactDOM.render(
  (
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
  ),
  document.getElementById('spa-root')
);
