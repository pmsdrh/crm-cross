const {body} = require('express-validator');

const validator = {
  'register': [
    body('username')
  ]
}