# Use a lightweight Nginx Alpine image
FROM nginx:alpine

# Copy the static content from the docs directory to the Nginx html directory
COPY ./docs /usr/share/nginx/html

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
