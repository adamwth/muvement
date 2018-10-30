import {Icon} from "antd";
import React from 'react';

const SlideShareSvg = () => (
  <svg viewBox="0 0 90.001 90" data-icon="slideshare" width="1em" height="1em"
       fill="url(#cool-gradient)" aria-hidden="true" x="0px" y="0px">
    <g>
      <path id="SlideShare" d="M88.621,35.316c-3.438,6.591-10.616,8.598-17.634,12.282c0,5.189,0,12.215,0,14.227
      c0,2.006-2.585,13.676-12.442,13.676c-9.86,0-13.114-5.646-13.114-7.984c0-1.141,0-7.225,0-13.183
      c-0.968-0.233-1.921-0.565-2.839-1.045c0,5.362,0,11.888,0,14.228c0,2.344-3.674,5.689-8.518,5.689
      c-4.844,0-14.198-6.857-14.198-11.381c0-4.52,0-15.404,0-15.404s-12.962-5.074-15.97-8.758c-3.01-3.686-4.513-5.191-3.676-7.362
      c0.804-2.103,10.526,6.023,16.205,7.362c5.685,1.34,15.539,2.011,19.718,1.845c4.179-0.168,6.519,1.506,8.856,3.679
      c0.125,0.116,0.271,0.239,0.421,0.361c0-1,0-1.64,0-1.64c0-2.006,5.347-2.845,8.521-2.845c3.177,0,12.526,0,14.195,0
      s14.625-4.245,17.634-7.597C88.787,28.121,91.854,29.122,88.621,35.316z M58.688,34.417c5.489,0,9.939-4.457,9.939-9.959
      c0-5.501-4.45-9.958-9.939-9.958c-5.486,0-9.938,4.457-9.938,9.958C48.751,29.96,53.202,34.417,58.688,34.417z M32.499,34.417
      c5.489,0,9.939-4.457,9.939-9.959c0-5.501-4.45-9.958-9.939-9.958c-5.489,0-9.938,4.457-9.938,9.958
      C22.561,29.96,27.008,34.417,32.499,34.417z"/>
    </g>
  </svg>
);

const SlideShareIcon = props => (
  <Icon component={SlideShareSvg} {...props}/>
);

export default SlideShareIcon;