#### Use the official Node.js 18 image based on Alpine
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /src/app

# Copy package.json and package-lock.json (if available)
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Copy the TypeScript configuration file if it exists
COPY tsconfig.json .

# Expose the port the app runs on
EXPOSE 5000

# Build the application
RUN npm run build

# Define the command to run the application
CMD ["npm", "start"]
