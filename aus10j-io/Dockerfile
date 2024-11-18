# Step 1: Build the app
FROM node:18 AS build

# Set the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package.json package-lock.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the React app
RUN npm run build

# Step 2: Serve the app
FROM nginx:alpine

# Copy the built app from the previous build stage
COPY --from=build /app/build /usr/share/nginx/html

# Expose port 80 to allow traffic to the app
EXPOSE 80

# Start nginx server
CMD ["nginx", "-g", "daemon off;"]
