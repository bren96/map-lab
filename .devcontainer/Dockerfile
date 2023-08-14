# Use an official Node.js runtime as the base image
FROM node:20

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install Nx CLI globally
RUN npm install -g nx

# Install npm dependencies
RUN npm install

# Set the default command to run Nx CLI
CMD ["nx"]