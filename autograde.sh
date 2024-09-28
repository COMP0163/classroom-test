#!/bin/bash

# Checkout code (This assumes you are already in the correct repository)
# If not, clone the repository first using git clone <repository-url>

# Set up Node.js environment
# Make sure you have Node.js version 22 installed
# You can use NVM (Node Version Manager) to install and use Node.js 22
nvm install 22
nvm use 22

# Install dependencies
npm install --save-dev hardhat
npm install --save-dev "hardhat@^2.22.12" "@nomicfoundation/hardhat-toolbox@^5.0.0"

# Run Hardhat tests for autograding
npx hardhat test
