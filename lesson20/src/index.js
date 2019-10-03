'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);
import 'formdata-polyfill';
import 'es6-promise';
import 'fetch-polyfill';

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import changePhoto from './modules/changePhoto';
import regInput from './modules/regInput';
import calc from './modules/calc';
import sendForm from './modules/sendForm';

countTimer('1 January 2020');

toggleMenu();

togglePopUp();

tabs();

slider();

changePhoto();

regInput();

calc(100);

sendForm();