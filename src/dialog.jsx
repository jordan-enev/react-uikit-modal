'use strict';

import React from 'react';
import uikit from 'react-uikit-base';
import ufunc from 'ufunc';
import Button from 'react-uikit-button';

const Dialog = (props) => {
  // CSS classes
  const cssClassNames = uikit.helpers.cleanClasses([
    'uk-modal-dialog',
    props.blank ? 'uk-modal-dialog-blank uk-height-viewport' : null,
    props.large ? 'uk-modal-dialog-large' : null,
    props.lightbox ? 'uk-modal-dialog-lightbox' : null
  ]);

  const closeCSSClasses = uikit.helpers.cleanClasses([
    'uk-modal-close uk-close',
    props.lightbox ? 'uk-close-alt' : null
  ]);


  // Elements
  const caption = ufunc.maybeIf(
    <div className='uk-modal-caption'>{props.caption}</div>
  )(props.caption);


  const close = ufunc.maybeIf(<a
    href='#'
    className={closeCSSClasses}
    data-kitid={props.kitid ? props.kitid : `close-${props.kitid}`}
    onClick={props.onClose}
    float='right'/>
  )(props.onClose);


  const footer = (children, right) => ufunc.maybeIf(
    <div className={right ? 'uk-modal-footer uk-text-right' : 'uk-modal-footer'}>
      {children}
    </div>
  )(props.footer || props.type === 'alert' || props.type === 'prompt');


  const header = ufunc.maybeIf(
    <div className='uk-modal-header'>
      <h2>{props.header}</h2>
    </div>
  )(props.header);


  const type = {
    block: <div
      className={cssClassNames}
      data-kitid={`dialog-${props.kitid}`}
    >
      {close}
      {header}
      {props.children}
      {caption}
      {footer(props.footer)}
    </div>,

    alert: <div
      className={cssClassNames}
      data-kitid={`dialog-${props.kitid}`}
    >
      {props.children}
      {footer(<Button body='ok' {...props.ok}/>, true)}
    </div>,

    prompt: <div
      className={`${cssClassNames} uk-form`}
      data-kitid={`dialog-${props.kitid}`}
    >
      {props.children}

      <input data-kitid={`input-${props.kitid}`} type='text' className='uk-width-1-1' />

      {footer(
        <div>
          <Button body='cancel' margin='right' {...props.cancel}/>
          <Button body='ok' {...props.ok}/>
        </div>,
        true
      )}
    </div>
  };


  // Return Component
  return type[props.type] || type['block'];
};


Dialog.propTypes = {
  blank    : React.PropTypes.bool,
  cancel   : React.PropTypes.object,
  caption  : React.PropTypes.string,
  children : React.PropTypes.any,
  close    : React.PropTypes.bool,
  footer   : React.PropTypes.node,
  header   : React.PropTypes.node,
  kitid    : React.PropTypes.string,
  large    : React.PropTypes.bool,
  lightbox : React.PropTypes.bool,
  onClose  : React.PropTypes.func,
  ok       : React.PropTypes.object,
  type     : React.PropTypes.oneOf(['block', 'alert', 'prompt'])
};

export default uikit.base(Dialog);
