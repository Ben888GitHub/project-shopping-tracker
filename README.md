# React Shopping Tracker

A Shopping Tracker Application made with React

![Screen Shot 2021-09-17 at 10 55 07 PM](https://user-images.githubusercontent.com/50259107/133818372-ebd81d1a-f11e-43b0-b877-bb6e196fb7e5.png)

## Overview

A Shopping Tracker Application with multiple features such as CRUD, Search & Filter, etc.

This project is purely made with Front-end 

## Getting Started

1. Clone the repository and `cd` into its root directory
2. Run `npm install` to install dependencies
3. Run `npm start` from the project directory to run in development mode

This application is served at [http://localhost:3000](http://localhost:3000) by default.

## Building

Run `npm run build` to build the static assets for external or local hosting. The files will be located inside the `build` folder by default.

It correctly bundles React in production mode and optimizes the build for the best performance.

## Usages

In the Home Page, you can Add a new Product, Update, and Delete existing Product. Click the Cart Button to navigate to Shopping Cart Page with all added Products from Shopping List Page. 

In Shopping Cart Page, you can update the quantity of each product along with remove the product from Cart Items and click on the `Proceed to Payment` button to navigate to Payment Confirmation Page.

In Payment Confirmation page, you can view all your added Products' prices and quantities from your Shopping Cart which allow you to click on the `PAY` button to bring you to the Payment Complete page.

In Payment Complete page, a simple payment receipt will show up together with the `Back to Home` button to bring you back to the main page.

**Note:** Products are not stored anywhere. Both Shopping Cart and Payment Confirmation pages will alert you that all your products will be gone if you leave or refresh the page.
