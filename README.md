# Restoring Hope Clinic Website

A modern, accessible website for Restoring Hope Clinic - a nonprofit free medical and dental clinic serving Northwest Arkansas.

## 🌟 Features

- **Modern Design**: Built with Next.js 14, TypeScript, and Tailwind CSS
- **Accessibility**: WCAG 2.1-AA compliant with screen reader support
- **Dark Mode**: Toggle between light and dark themes
- **Mobile-First**: Responsive design optimized for all devices
- **Performance**: Lighthouse score ≥ 95
- **SEO Optimized**: Meta tags, structured data, and semantic HTML

## 🏥 Services

- **Medical Care**: Primary healthcare services
- **Dental Care**: Comprehensive oral health services  
- **Mental Health**: Counseling and mental wellness support
- **Volunteer Management**: Application system with role filtering
- **Donation Processing**: Secure donations via Givebutter integration
- **Resource Mapping**: Interactive map of healthcare resources in NWA

## 🛠 Tech Stack

- **Framework**: Next.js 14 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS + shadcn/ui components
- **Forms**: React Hook Form + Zod validation
- **Maps**: Mapbox GL JS
- **Email**: Resend for transactional emails
- **Database**: Airtable for volunteer applications
- **Donations**: Givebutter widget integration
- **Deployment**: Vercel (free tier)

## 🚀 Quick Start

### Prerequisites

- Node.js 18+ 
- npm or yarn
- Git

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/blakeyoung81/RestoringHopeClinic.git
   cd RestoringHopeClinic
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Set up environment variables**
   ```bash
   cp .env.example .env.local
   ```
   
   Edit `.env.local` with your API keys:
   ```env
   # Required for map functionality
   NEXT_PUBLIC_MAPBOX_TOKEN=your_mapbox_token
   
   # Required for volunteer form submissions
   AIRTABLE_API_KEY=your_airtable_api_key
   AIRTABLE_BASE_ID=your_airtable_base_id
   RESEND_API_KEY=your_resend_api_key
   
   # Required for donation widget
   NEXT_PUBLIC_GIVEBUTTER_CAMPAIGN_ID=your_campaign_id
   ```

4. **Run the development server**
   ```bash
   npm run dev
   ```

5. **Open your browser**
   Navigate to [http://localhost:3000](http://localhost:3000)

## 📁 Project Structure

```
├── app/                    # Next.js 14 App Router
│   ├── about/             # About page
│   ├── api/               # API routes
│   │   ├── metrics/       # Statistics endpoint
│   │   └── volunteer/     # Volunteer form handler
│   ├── donate/            # Donation page
│   ├── get-care/          # Services page with tabs
│   ├── volunteer/         # Volunteer opportunities
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Home page
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   ├── Footer.tsx         # Site footer
│   ├── Hero.tsx           # Homepage hero
│   ├── CtaCard.tsx        # Call-to-action cards
│   ├── VolunteerForm.tsx  # Volunteer application
│   ├── DonationWidget.tsx # Givebutter integration
│   ├── WishList.tsx       # In-kind donations
│   ├── ResourceMap.tsx    # Mapbox integration
│   └── ThemeProvider.tsx  # Dark mode provider
├── lib/                   # Utility functions
│   └── utils.ts           # Helper functions
├── public/                # Static assets
└── tailwind.config.ts     # Tailwind configuration
```

## 🔧 Configuration

### Environment Variables

Create a `.env.local` file with the following variables:

| Variable | Description | Required |
|----------|-------------|----------|
| `NEXT_PUBLIC_MAPBOX_TOKEN` | Mapbox access token for maps | Yes |
| `AIRTABLE_API_KEY` | Airtable API key for volunteer data | Yes |
| `AIRTABLE_BASE_ID` | Airtable base ID | Yes |
| `RESEND_API_KEY` | Resend API key for emails | Yes |
| `NEXT_PUBLIC_GIVEBUTTER_CAMPAIGN_ID` | Givebutter campaign ID | Yes |

### API Setup

#### Mapbox
1. Create account at [mapbox.com](https://mapbox.com)
2. Generate access token
3. Add to `NEXT_PUBLIC_MAPBOX_TOKEN`

#### Airtable
1. Create account at [airtable.com](https://airtable.com)
2. Create base with "Volunteers" table
3. Get API key and base ID
4. Add to environment variables

#### Resend
1. Create account at [resend.com](https://resend.com)
2. Generate API key
3. Add to `RESEND_API_KEY`

#### Givebutter
1. Create campaign at [givebutter.com](https://givebutter.com)
2. Get campaign ID from embed code
3. Add to `NEXT_PUBLIC_GIVEBUTTER_CAMPAIGN_ID`

## 🚀 Deployment

### Vercel (Recommended)

1. **Connect to Vercel**
   ```bash
   npm i -g vercel
   vercel
   ```

2. **Set environment variables**
   - Go to Vercel dashboard
   - Navigate to project settings
   - Add all environment variables

3. **Deploy**
   ```bash
   vercel --prod
   ```

### Other Platforms

The app can be deployed to any platform supporting Next.js:
- Netlify
- Railway
- DigitalOcean App Platform
- AWS Amplify

## 🧪 Testing

```bash
# Run linting
npm run lint

# Build for production
npm run build

# Start production server
npm start
```

## 📱 Mobile Optimization

- **Breakpoints**: Optimized for iPhone 12 mini (375px) and up
- **Touch Targets**: Minimum 44px for accessibility
- **Performance**: Optimized images and lazy loading
- **Offline**: Service worker for basic offline functionality

## ♿ Accessibility

- **WCAG 2.1-AA** compliant
- **Screen Reader** support with proper ARIA labels
- **Keyboard Navigation** for all interactive elements
- **Color Contrast** meets accessibility standards
- **Focus Management** with visible focus indicators

## 🎨 Design System

### Colors
```css
--brand-dark: #0F3D3E
--brand-primary: #5FB0B7  
--brand-light: #F3F8F9
```

### Typography
- **Font**: Inter (Google Fonts)
- **Headings**: Font weights 600-800
- **Body**: Font weight 400-500

### Components
Built with shadcn/ui for consistency:
- Buttons with focus states
- Form inputs with validation
- Cards with hover effects
- Navigation with mobile menu

## 🔒 Security

- **HTTPS**: Enforced in production
- **Headers**: Security headers via Vercel
- **Validation**: Server-side form validation
- **Sanitization**: Input sanitization for XSS prevention

## 📊 Analytics

Optional integrations:
- Google Analytics 4
- Vercel Analytics
- Sentry for error tracking

## 🤝 Contributing

1. Fork the repository
2. Create feature branch (`git checkout -b feature/amazing-feature`)
3. Commit changes (`git commit -m 'Add amazing feature'`)
4. Push to branch (`git push origin feature/amazing-feature`)
5. Open Pull Request

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🆘 Support

For technical support:
- **Email**: [tech@restoringhopeclinic.org](mailto:tech@restoringhopeclinic.org)
- **Issues**: [GitHub Issues](https://github.com/blakeyoung81/RestoringHopeClinic/issues)

For clinic information:
- **Phone**: [(479) 555-1234](tel:+14795551234)
- **Email**: [info@restoringhopeclinic.org](mailto:info@restoringhopeclinic.org)
- **Website**: [restoringhopeclinic.org](https://restoringhopeclinic.org)

## 🙏 Acknowledgments

- **Volunteers**: Our amazing volunteer team
- **Donors**: Supporters who make our work possible
- **Community**: Northwest Arkansas community
- **Partners**: Walmart Foundation, Tyson Foods, and other partners

---

**Built with ❤️ for the Northwest Arkansas community** 