# Rupali Gera - Portfolio Website

A modern, responsive portfolio website for Rupali Gera, Content Writer & Strategist.

## ✨ Features

- **Modern Design** - Clean, professional design with dark mode support
- **Fully Responsive** - Optimized for mobile, tablet, and desktop
- **Password-Protected Portfolio** - Work samples secured with server-side authentication
- **SEO Optimized** - Meta tags, Open Graph, and protected content excluded from indexing
- **Fast Performance** - Built with Next.js App Router and static generation

## 🛠️ Tech Stack

- **Framework:** [Next.js 16](https://nextjs.org/) (App Router)
- **Language:** TypeScript
- **Styling:** [Tailwind CSS 4](https://tailwindcss.com/)
- **Deployment:** [Vercel](https://vercel.com/)
- **Linting:** ESLint

## 📄 Pages

| Page | Path | Description |
|------|------|-------------|
| Home | `/` | Hero section, services, protected work teaser |
| About | `/about` | Bio, education, certifications, languages |
| Experience | `/experience` | Career timeline with work history |
| Skills | `/skills` | Skills visualization and tools |
| Resume | `/resume` | Visual resume with PDF download |
| Contact | `/contact` | Contact form and information |
| Work | `/work/*` | 🔒 Password-protected portfolio |

### Protected Work Categories

- 📝 Blogs
- 📚 Documentation
- 📊 Case Studies
- 🎯 How to Guides
- 🧲 Lead Magnets

## 🚀 Getting Started

### Prerequisites

- Node.js 18+
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/dgr8akki/rupaligeradotcom.git
   cd rupaligeradotcom
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create environment file:
   ```bash
   cp .env.example .env.local
   ```

4. Set your password in `.env.local`:
   ```
   WORK_PASSWORD=your_secure_password
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open [http://localhost:3000](http://localhost:3000)

## 📦 Scripts

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server |
| `npm run build` | Build for production |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

## 🔐 Password Protection

The Work section is protected with server-side authentication:

- Password is stored in `WORK_PASSWORD` environment variable
- Verification happens server-side (never exposed to client)
- Sessions stored in HTTP-only secure cookies
- Protected pages excluded from search engine indexing

### Setting Up on Vercel

1. Go to your Vercel project settings
2. Navigate to **Settings** → **Environment Variables**
3. Add `WORK_PASSWORD` with your chosen password
4. Redeploy the application

## 📁 Project Structure

```
src/
├── app/
│   ├── about/          # About page
│   ├── actions/        # Server actions (auth)
│   ├── contact/        # Contact page
│   ├── experience/     # Experience page
│   ├── resume/         # Resume page
│   ├── skills/         # Skills page
│   ├── unlock/         # Password entry page
│   ├── work/           # Protected work pages
│   │   └── [category]/ # Dynamic category pages
│   ├── globals.css     # Global styles
│   ├── layout.tsx      # Root layout
│   └── page.tsx        # Home page
├── components/
│   ├── Footer.tsx      # Site footer
│   ├── Header.tsx      # Navigation header
│   └── WorkCard.tsx    # Work sample card
├── lib/
│   └── data.ts         # Site data and content
└── middleware.ts       # Auth middleware
```

## 🎨 Customization

### Updating Content

All site content is centralized in `src/lib/data.ts`:

- Personal information (`siteConfig`)
- Work experience (`experience`)
- Skills and tools (`skills`, `tools`)
- Work samples (`workSamples`)
- Education and certifications

### Styling

- Global styles: `src/app/globals.css`
- Tailwind configuration: Uses Tailwind CSS 4 with CSS-first configuration
- Color scheme: Violet accent with zinc neutrals

## 📄 License

This project is private and proprietary.

## 👤 Author

**Rupali Gera**
- Email: gerarupali@gmail.com
- LinkedIn: [rupali-gera](https://www.linkedin.com/in/rupali-gera)
