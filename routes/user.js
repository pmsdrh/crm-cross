class User {
    constructor(db, app) {
        this.db = db;
        this.app = app;
    }
    handler() {
        this.app.get('/api/user', (res, req) => {
            
        })
    }
    
}