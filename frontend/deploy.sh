#!/bin/bash

RED='\033[0;31m'
GREEN='\033[0;32m'
NC='\033[0m' # No Color

print_success() {
  echo -e "${GREEN}$1${NC}"
}

print_error() {
  echo -e "${RED}$1${NC}"
}

print_success "Starting deployment process..."

print_success "Building frontend..."
if npm run build; then
  print_success "Frontend built successfully, and moved to appscript backend"
else
  print_error "Frontend build failed. Exiting..."
  exit 1
fi

print_success "Pushing backend..."
cd ../backend
if npm run clasp:push; then
  print_success "Backend Pushed successfully."
else
  print_error "Backend Pushed failed. Exiting..."
  exit 1
fi

print_success "Deploying backend..."
if npm run clasp:deploy; then
  print_success "Backend Deployed successfully."
else
  print_error "Backend Deployed failed. Exiting..."
  exit 1
fi

cd ..

print_success "Deployment process completed."
