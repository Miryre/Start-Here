# StartHere 🎓

**Your guide to affordable college living**

A React-based web application helping college students discover essential resources for affordable living, academic support, emergency aid, and career development.

**🌐 Live Site:** [https://start-here-eight.vercel.app](https://start-here-eight.vercel.app)

---

## 🎯 The Problem

College students face financial and practical challenges that can impact their success:

- Finding affordable food, housing, and clothing options
- Accessing emergency financial assistance during crises
- Discovering academic support and tutoring services
- Locating free or low-cost campus activities
- Getting career guidance and internship opportunities
- Connecting with a supportive student community

These resources exist, but they're scattered and hard to find when students need them most.

---

## 💡 The Solution

StartHere brings essential student resources together in one accessible platform with:

- **Organized Categories** - Resources grouped by need (Living Essentials, Emergency Aid, Academic Support, Activities, Career, Community)
- **Student-Focused** - Built by students, for students
- **Email Updates** - Stay informed about new resources and opportunities
- **Clean Interface** - Easy navigation and mobile-responsive design
- **Real Stories** - Student testimonials showing real impact

---

## 🚀 Current Status

**✅ LIVE - Version 1.0**

The MVP is deployed and functional! Currently accepting email signups and displaying resource categories.

### ✅ Completed:

- Full React application with routing
- Professional navbar with resource modal
- Email signup integration (Formspree)
- Student testimonials section
- 6 resource category pages (Living Essentials, Emergency Aid, Academic Support, Activities, Career, Community)
- About and Contact pages
- Responsive design (mobile, tablet, desktop)
- Deployed to production on Vercel
- Auto-deployment from GitHub

### 🔲 Up Next:

- Populate resource pages with actual content
- Add resource cards with links, descriptions, and details
- Build contact form functionality
- Create social media presence
- Add more student testimonials
- Implement resource submission form
- Location-based filtering (future phase)

---

## 🛠️ Tech Stack

**Frontend:**
- React 18
- React Router DOM (client-side routing)
- JavaScript (ES6+)
- CSS3 (custom styling, glassmorphism effects)
- HTML5

**Integrations:**
- Formspree (email collection)
- Unsplash (placeholder images)

**Deployment & Tools:**
- Vercel (hosting & CI/CD)
- Git & GitHub (version control)
- VS Code (development)
- npm (package management)

---

## 📂 Project Structure
```
hello-start-here/
├── public/              # Static files
├── src/
│   ├── components/      # Reusable components
│   │   ├── Navbar.js    # Navigation with modals
│   │   ├── Navbar.css
│   │   ├── Hero.js      # Hero section with image carousel
│   │   ├── Hero.css
│   │   ├── Reviews.js   # Student testimonials
│   │   ├── Reviews.css
│   │   ├── Footer.js    # Site footer
│   │   └── Footer.css
│   ├── pages/           # Page components
│   │   ├── Home.js
│   │   ├── LivingEssentials.js
│   │   ├── EmergencyAid.js
│   │   ├── AcademicSupport.js
│   │   ├── Activities.js
│   │   ├── Career.js
│   │   ├── Community.js
│   │   ├── About.js
│   │   ├── Contact.js
│   │   └── Pages.css
│   ├── App.js           # Main app with routing
│   ├── App.css          # Global styles
│   └── index.js         # Entry point
├── package.json
└── README.md
```

---

## 💻 Local Development

Want to run this project locally?

### Prerequisites

- Node.js (v14 or higher)
- npm (comes with Node.js)
- Git

### Installation

1. **Clone the repository:**
```bash
git clone https://github.com/Miryre/Start-Here.git
cd Start-Here
```

2. **Install dependencies:**
```bash
npm install
```

3. **Start the development server:**
```bash
npm start
```

4. **Open your browser:**
Navigate to `http://localhost:3000`

The app will automatically reload when you make changes!

---

## 🎨 Current Features

### Live on Production:

✅ **Resource Discovery**
- Browse 6 main resource categories
- Clean, organized navigation
- Modal-based resource explorer

✅ **Email Newsletter**
- Working email signup
- Collects email and school (optional)
- Integrates with Formspree

✅ **Student Testimonials**
- Real student stories
- Shows impact of resources
- Builds trust and community

✅ **Responsive Design**
- Mobile-first approach
- Works on all screen sizes
- Touch-friendly interface

✅ **Professional UI**
- Dark theme with cyan accents
- Smooth animations
- Clean, modern design

---

## 🗺️ Development Roadmap

**✅ Phase 1: MVP & Deployment (COMPLETE)**
- Core UI and navigation
- Email signup functionality
- Category structure
- Production deployment

**🔄 Phase 2: Content Development (IN PROGRESS)**
- Research and add actual resources
- Populate all category pages
- Write About page content
- Build contact form

**📅 Phase 3: Community Features (PLANNED)**
- Resource submission form
- User-generated reviews
- Upvoting system
- Resource verification

**📅 Phase 4: Advanced Features (FUTURE)**
- User authentication
- Location-based filtering
- Map integration
- Mobile app

---

## 🤝 Contributing

This project is in active development. Suggestions and feedback are welcome!

**How to help:**
- Share resources that should be included
- Test the site and report bugs
- Suggest new categories or features
- Spread the word to other students

---

## 👩‍💻 About the Developer

Built by Elysa Diane, a developer passionate about using technology to help students succeed. This project combines web development skills with a real-world mission: making college more affordable and accessible for everyone.

**Connect:**
- GitHub: [@Miryre](https://github.com/Miryre)
- Live Site: [StartHere](https://start-here-eight.vercel.app)

---

## 📝 License

This project is open source and available under the MIT License.

---

## 🙏 Acknowledgments

- Built with guidance from AI-powered learning tools
- Inspired by the real challenges students face every day
- Designed for students, by someone who understands the struggle
- Deployed with Vercel's generous free tier
- Email powered by Formspree

---

**StartHere** - _Because every student deserves to know where to start._ 🎓💙
