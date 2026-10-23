import { products } from './data.js';
import Handlebars from 'handlebars';
import templateSource from 'bundle-text:./templates.hbs';

const template = Handlebars.compile(templateSource);
document.body.innerHTML = template(products);