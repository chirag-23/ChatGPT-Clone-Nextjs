# ChatGPT Clone

A ChatGPT clone created with NextJs, TailwindCSS, Typescript, Firebase for Google-Authentication & Realtime Database, Vercel SWR for Data Fetching and ChatGPT API.

https://github.com/chirag-23/ChatGPT-Clone-Nextjs/assets/76790227/f0bd43a7-3eeb-4ee4-a877-d93fcaa73c98

## Live Demo 
<a href='https://chatai-1000.vercel.app/' target="_blank">ChatGPT Clone</a>

## Key Features
* <b>Google Login/Signup:</b> Seamlessly sign in or sign up using your Google account for a hassle-free user experience.

* <b>Active Side Navigation:</b> Easily switch between previous chats and create new ones with the user-friendly sidebar.

* <b>Log Out Button:</b> Conveniently located at the bottom of the sidebar, the log-out button allows you to sign out with a single click.

* <b>Interactive Input Bar:</b> Experience an input bar that mimics the original ChatGPT, ensuring an engaging and familiar chat interface.

* <b>Real-time Updates:</b> Stay informed with real-time data fetching using React-hot-toast notifications, keeping you up-to-date with the latest information.

* <b>ChatGPT API Integration:</b> Engage in real-time interactions with the ChatGPT API, enabling dynamic and responsive conversations.

## Technologies Used
This project was created using the following technologies -

* NextJs
* TypeScript 
* Open AI
* TailwindCSS & heroicons (for user interface)
* React-hot-toast (for notifications)
* FirebaseAuth & NextAuth (for authentication)
* SWR (for response fetching)
* Firebase (cloud firestore)
* vercel (for hosting)

## Installation

node.js is required to get `npm`.

If you would like to download the code and try it for yourself:

Clone the repo:
```bash
  git clone https://github.com/chirag-23/ChatGPT-Clone-Nextjs.git
```
```bash
  cd ChatGPT-Clone-Nextjs
```
Install packages: 
```bash 
npm install
```
To run this project, you will need to add the following environment variables to your .env file

`CHAT_GPT_KEY`

`NEXTAUTH_URL`

`WEB_CLIENT_ID`

`WEB_CLIENT_SECRET`

`NEXT_PUBLIC_FIREBASE_API_KEY`

`NEXT_PUBLIC_BASE_URL`

`NEXT_PUBLIC_FIREBASE_APP_ID`

`NEXT_PUBLIC_FIREBASE_PROJECT_ID`

`NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN`

`NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET`

`NEXT_PUBLIC_FIREBASE_MESSAGING_SET`

`FIREBASE_SERVICE_ACCOUNT_KEY`

Build project:
```bash
npm run dev
```
Open your browser at: 
```bash
http://localhost:3000
```

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/basic-features/font-optimization) to automatically optimize and load Inter, a custom Google Font.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
