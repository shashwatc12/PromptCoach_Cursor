# Prompt Enhancer App

A Next.js application for enhancing AI prompts with Supabase authentication.

## Features

- Google Authentication with Supabase
- Modern UI with Tailwind CSS
- Fully typed with TypeScript
- Responsive design
- Secure authentication flow with PKCE

## Prerequisites

- Node.js 16+ and npm
- Supabase account
- Google Cloud Console project with OAuth 2.0 credentials

## Environment Variables

Create a `.env.local` file with the following variables:

```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

## Development

1. Install dependencies:
```bash
npm install
```

2. Run the development server:
```bash
npm run dev
```

3. Open [http://localhost:3000](http://localhost:3000)

## Deployment

### Vercel Deployment

1. Push your code to GitHub
2. Import your repository in Vercel
3. Add environment variables in Vercel project settings
4. Deploy

### Supabase Configuration

1. Add your production URL to Supabase Auth settings:
```
https://your-domain.vercel.app
```

2. Add the callback URL:
```
https://your-domain.vercel.app/auth/callback
```

3. Update Google OAuth settings with the production callback URL:
```
https://[YOUR_PROJECT_REF].supabase.co/auth/v1/callback
```

## Built With

- [Next.js](https://nextjs.org/)
- [Supabase](https://supabase.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [TypeScript](https://www.typescriptlang.org/) 