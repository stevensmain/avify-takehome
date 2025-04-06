# UK Energy Mix Dashboard

This application displays the energy generation mix in the United Kingdom, using real-time data from the Carbon Intensity API.

## Technologies Used

- React 18
- TypeScript
- React Query for state management and API requests
- Jest and Testing Library for testing
- Tailwind CSS for styling
- Chart.js for visualizations
- Shadcn/UI for interface components

## Testing

The application includes comprehensive tests:

- Unit tests for services and adapters
- Tests for custom hooks with renderHook
- Component tests with testing-library
- Mocks of services and API responses

To run the tests:

```
npm test          # Run all tests
npm test:watch    # Run tests in watch mode
```

## How to Run the Application

1. Install dependencies:

   ```
   npm install
   ```

2. Start the application in development mode:
   ```
   npm start
   ```
   The application will be available at http://localhost:8080
