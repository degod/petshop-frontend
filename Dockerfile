# Stage 1: Build the Vue.js application
FROM node:14-alpine AS build-stage

# Set the working directory
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Vue.js application
RUN npm run build || { echo 'Build failed'; exit 1; }

# List the contents of /app to verify the build output
RUN ls -al /app

# List the contents of /app/dist to verify the build output
RUN ls -al /app/dist || { echo '/app/dist not found'; exit 1; }

# Stage 2: Serve the application with Nginx
FROM nginx:alpine

# Copy the built files from the previous stage
COPY --from=build-stage /app/dist /usr/share/nginx/html

# Copy the custom Nginx configuration file
COPY ./nginx/default.conf /etc/nginx/conf.d/default.conf

# Expose port 80 to the outside world
EXPOSE 80

# Start Nginx when the container starts
CMD ["nginx", "-g", "daemon off;"]