## shintech/express-postgres

### Installation
    # Ubuntu 18.04
    
    ./install.sh
    
### Usage
#### Development
    
    npm run dev
    
    # or
    
    yarn dev
    
    # GET /api/users
    Returns a list of all users
    
    # POST /api/login/:id [ username, password ]
    Should return object containing username and id if user is authorized
    
#### Production
    docker-compose build && docker-compose up -d
    
### NOTES
    
    # Environment Variables
    
    HOSTNAME=example.org #fdqn
    SERVER_URL=localhost:65330
    
### TODO

- [ ] prevent username and password from being returned on POST /api/login