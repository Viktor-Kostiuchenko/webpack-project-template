import './css/styles.css'
import image from './images/example.jpg'
import data from './data/example.json'
import template from './templates/example.hbs'
import { example } from './js/example'


console.log(example)
const markup = template(data)
document.body.insertAdjacentHTML('beforeend', markup)
document.body.insertAdjacentHTML('beforeend', `<img src=${image} alt="doggy" width="400" height="400">`)