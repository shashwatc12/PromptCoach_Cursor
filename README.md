# PromptCoach

A Next.js application for enhancing AI prompts with Supabase authentication and modern UI.

## Features

- 🔐 Google Authentication with Supabase
- 🎨 Modern UI with Tailwind CSS
- 📝 Prompt enhancement capabilities
- 🔄 Real-time updates
- 🛡️ Protected routes
- 💻 Fully responsive design
- ⚡ Fast and optimized performance
- 🔍 Type-safe with TypeScript

## Tech Stack

- [Next.js](https://nextjs.org/) - React framework
- [Supabase](https://supabase.com/) - Authentication & Database
- [Tailwind CSS](https://tailwindcss.com/) - Styling
- [TypeScript](https://www.typescriptlang.org/) - Type safety

## Prerequisites

- Node.js 16+ and npm
- Supabase account
- Google OAuth credentials

## Getting Started

1. Clone the repository:
```bash
git clone https://github.com/shashwatc12/PromptCoach_Cursor.git
cd PromptCoach_Cursor
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env.local
```
Then edit `.env.local` with your Supabase credentials.

4. Run the development server:
```bash
npm run dev
```

5. Open [http://localhost:3000](http://localhost:3000)

## Environment Variables

Create a `.env.local` file with:
```bash
NEXT_PUBLIC_SUPABASE_URL=your_supabase_project_url
NEXT_PUBLIC_SUPABASE_ANON_KEY=your_supabase_anon_key
```

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

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Author

[shashwatc12](https://github.com/shashwatc12) 