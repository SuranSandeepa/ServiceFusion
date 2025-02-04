## CI Pipeline Steps

This GitHub Actions workflow automates the build and testing process for our Dockerized microservices.

### Steps:
1. **Checkout Code**  
   - Uses `actions/checkout@v3` to clone the repository.

2. **Set up Docker**  
   - Verifies Docker installation.  
   - Updates the package list and installs `docker-compose`.  
   - Checks the installed version of Docker Compose.

3. **Build and Run Docker Compose**  
   - Builds and runs the microservices using `docker-compose up --build -d`.

4. **Test Node.js Service**  
   - Sends a request to `http://localhost:8080/` to verify if the Node.js service is running.

5. **Test Python Service**  
   - Sends a request to `http://localhost:5000/` to verify if the Python service is running.

6. **Stop Containers**  
   - Stops and removes the running containers using `docker-compose down`.

This ensures that every new push to the `main` branch triggers a clean build and test cycle.
