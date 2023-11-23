class Register {
  constructor(db, app) {
      this.db = db;
      this.app = app;
  }
  setHandler() {
      this.app.get('/api/register', (res, req) => {
          
      })
  }
  
}

module.exports = Register;