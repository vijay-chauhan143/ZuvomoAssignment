# React Native Product Explorer

## Features

- **Product Listing:** Fetches and displays products from the DummyJSON API.
- **Product Details:** Tap a product to view its detailed information, including images, description, price, rating, and category.
- **Skeleton Loading:** Displays skeleton placeholders while product data is loading.
- **Error Handling:** Provides an error state and retry option when API requests fail, if implemented.
- **Pull to Refresh:** Refreshes the product list using the pull-to-refresh gesture, if implemented.
- **Navigation:** Uses stack navigation for product details and bottom-tab navigation for the main screens.
- **Light and Dark Themes:** Allows users to switch between light and dark themes, if implemented.

## Tech Stack

- React Native
- Expo
- TypeScript
- React Navigation
- Redux Toolkit
- Axios
- DummyJSON Products API

## API Endpoints

The application uses the public DummyJSON API. No API key is required.

**Base URL**

`https://dummyjson.com`

**Fetch all products**

`GET https://dummyjson.com/products`

**Fetch a product by ID**

`GET https://dummyjson.com/products/{id}`

Example: `GET https://dummyjson.com/products/1`

## Prerequisites

Before running the application, make sure you have installed:

- Node.js and npm
- Expo-compatible development environment
- Expo Go, Android Studio, or an iOS simulator, depending on your target platform

## Getting Started

### 1. Clone the repository

```bash
git clone https://github.com/vijay-chauhan143/ZuvomoAssignment.git
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure the API URL

If the project uses the `EXPO_PUBLIC_API_URL` environment variable, create a `.env` file in the project root with the following content:

```env
EXPO_PUBLIC_API_URL=https://dummyjson.com
```

### 4. Start the application

```bash
npx expo start
```

Follow the instructions displayed in the terminal to open the app using Expo Go or a supported simulator/emulator.&#x20;

## Application Behaviour

- The product list is retrieved from the API and displayed in a scrollable list.
- Selecting a product opens its details screen.
- Skeleton placeholders are displayed while data is being fetched.
- API failures should display an appropriate error message and retry option.
- Pull-to-refresh should request the latest product list without unnecessarily replacing existing items with skeleton placeholders.

The error handling and refresh behaviours described above should be retained in this section only if they are implemented in the submitted version.

## Assignment Scope

This project demonstrates API integration, navigation between list and detail screens, loading and error-state handling, pull-to-refresh, and reusable UI components in React Native.

##

