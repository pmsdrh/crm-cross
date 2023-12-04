const jwt = require('jsonwebtoken');
const {secret_key} = require('../config');

class authMiddleware{
  constructor(req, res, next) {
    this.req = req;
    this.res = res;
    this.next = next;
  }
  setMiddleware() {
    const token = this.req.headers.get('Authorization')?.split(' ')[1];
    if (!token) return this.res.status(400).json({error: 'نا معتبر'});
    if (token === 'false') {
      this.req.auth = false;
      return this.next();
    }
    jwt.verify(token, secret_key, (err, user) => {
      if (err) return this.res.status(403).json({error: 'توکن شما منقضی شده است'});
      this.req.user = user;
      this.req.auth = true;
      this.next();
    })
  }
}

module.exports = authMiddleware;