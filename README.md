# Prompt Share

Prompt Share is a web application developed using the Next.js framework, allowing users to share and discover AI prompts. With Prompt Share, users can share prompts from their profile and explore new prompts from the feed, where all the shared prompts are displayed.

## Technologies Used

- **Next.js**: Next.js is a React framework that enables server-side rendering, static site generation, and more for React-based web applications.
- **MongoDB**: MongoDB is used as the database to store prompt data.
- **Google Cloud Console**: Authentication is implemented using Google Cloud Console, providing secure user authentication and authorization.
- **NextAuth.js**: NextAuth.js is used for authentication and session management.
  
## Features

- **User Authentication**: Users can sign in securely using Google Cloud Console authentication.
- **Prompt Sharing**: Users can share AI prompts from their profile.
- **Prompt Discovery**: Users can explore new prompts from the feed, where all shared prompts are displayed.

## Getting Started

To run the Prompt Share project locally, follow these steps:

1. Clone the repository:
   
   ```bash
      git clone https://github.com/rahulo15/Prompt_Share
   ```
   
2. Install dependencies

   ```bash
      cd Prompt_Share
      npm install
   ```

3. Set up environment variables:

    Create a .env file in the root directory and add the following environment variables:

   ```env
      MONGODB_URI=your-mongodb-uri
      GOOGLE_CLIENT_ID=your-google-client-id
      GOOGLE_CLIENT_SECRET=your-google-client-secret
      NEXTAUTH_URL=your-nextauth-url
      NEXTAUTH_URL_INTERNAL=your-nextauth-url-internal
      NEXTAUTH_SECRET=your-nextauth-secret
   ```

4. Run the development server:
   
   ```bash
      npm run dev
   ```


5. Open your browser and navigate to `http://localhost:3000` to access the Prompt Share application.

## Contributing

Contributions are welcome! If you'd like to contribute to Prompt Share, please open an issue or submit a pull request with your changes.
