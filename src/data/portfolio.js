export const projects = [
  {
    id: 'axcapital',
    title: 'AX CAPITAL',
    subtitle: 'The Most Trusted Real Estate Agency in Dubai',
    description: 'UX/UI design for a premium real estate agency. Focused on lead generation, conversion and brand positioning.',
    tags: ['Real Estate', 'Corporate Website'],
    url: 'https://axcapital.ae',
    color: '#1a1a2e',
    accentColor: '#6366f1',
    image: null,
    // Карточка на главной
    media: {
      thumbnail: '/media/axcapitalthumbnail.jpg',
      preview: '/media/axcapitalpreview_720p.mp4',
      isVideoPreview: true,
      loop: true,
      autoplay: false,
    },
    caseStudy: {
      year: '2023',
      role: 'Lead UX/UI Designer',
      duration: '3 months',
      client: 'AX Capital Real Estate',
      // Верхний hero-блок страницы кейса
      heroMedia: {
        image: '/media/axcapitalpreview.jpg',
        video: '/media/axcapitalpreview_1080p.mp4',
      },
      overview:
        "AX Capital is one of Dubai's top real estate agencies, handling billions in property transactions annually. The goal was to redesign their digital presence to reflect their premium positioning and significantly improve lead generation.",
      challenge:
        "The existing website had fragmented UX, poor mobile performance, and no clear conversion funnel. Leads were being lost at multiple touchpoints.",
      solution:
        "We rebuilt the information architecture from scratch, introduced a streamlined property search experience, and created a design system aligned with the brand's luxury identity. Every screen was optimised for conversion with clear CTAs and trust signals.",
      results: [
        { value: '+58%', label: 'Lead conversion' },
        { value: '2.4×', label: 'Session duration' },
        { value: '-34%', label: 'Bounce rate' },
        { value: '#1', label: 'Google ranking' },
      ],
      sections: [
        { type: 'hero', ratio: '16/9', label: 'Homepage hero redesign' },
        { type: 'grid-2', ratio: '4/3', label: 'Property listing & detail page' },
        { type: 'fullwidth', ratio: '21/9', label: 'Mobile experience' },
        { type: 'grid-3', ratio: '1/1', label: 'UI components & design tokens' },
        { type: 'quote', text: "The new design turned our website into our best-performing sales channel.", author: 'AX Capital Marketing Team' },
        { type: 'grid-masonry', label: 'Visual identity applied across product' },
      ],
    },
  },
  {
    id: 'aro',
    title: 'ARO',
    subtitle: 'PropTech · Platform',
    description: 'Redesign of a unique B2B & B2C platform with 3D interactive map of Dubai for property listings and exploration.',
    tags: ['PropTech', 'Platform'],
    url: 'https://aro.ae',
    color: '#0a1628',
    accentColor: '#3b82f6',
    image: null,
    media: {
      thumbnail: '/media/arothumbnail.jpg',
      preview: '/media/aropreview_720p.mp4',
      isVideoPreview: true,
      loop: true,
      autoplay: false,
    },
    caseStudy: {
      year: '2024',
      role: 'Product Designer',
      duration: '5 months',
      client: 'ARO PropTech',
      // heroMedia — верхний блок страницы (над заголовком)
      heroMedia: {
        image: '/media/aropreviewimage.jpg',
        video: '/media/aropreview_1080p.mp4',
      },
      overview:
        "ARO is a next-generation real estate platform combining a 3D interactive map of Dubai with smart property search for both buyers and agents. The challenge was designing a complex B2B/B2C product that feels intuitive for all user types.",
      challenge:
        "The platform needed to serve two very different audiences — property buyers wanting to explore Dubai visually, and agents managing listings and pipelines — within a single, coherent interface.",
      solution:
        "We designed a context-aware UI that adapts its primary flows based on user role. The 3D map became the centrepiece of the B2C experience, while the B2B dashboard was restructured with a data-dense but scannable layout.",
      results: [
        { value: '3×', label: 'Agent retention' },
        { value: '+71%', label: 'Map engagement' },
        { value: '-45%', label: 'Onboarding drop-off' },
        { value: '4.8★', label: 'App store rating' },
      ],
      sections: [
        // image/video здесь — отдельный слот для секции в гриде (независимо от heroMedia)
        { type: 'hero', ratio: '16/9', label: '3D map interface' },
        { type: 'fullwidth', ratio: '21/9', label: 'Platform overview', image: '/media/aromobilescreens.jpg' },
        {
          type: 'grid-2', ratio: '16/10', label: 'B2C search flow & B2B dashboard', items: [
            { image: '/media/aroprojects.jpg', video: '/media/aroprojects__720p.mp4' },
            { image: '/media/aro3projectview.jpg' },
          ]
        },
        { type: 'grid-3', ratio: '1/1', label: 'Mobile app screens' },
        { type: 'quote', text: "ARO's new design made complex data feel effortless to navigate.", author: 'ARO Product Team' },
        { type: 'grid-masonry', label: 'Component library highlights' },
      ],
    },
  },
  {
    id: 'paxful',
    title: 'Paxful',
    subtitle: 'P2P Crypto Marketplace',
    description: 'Freelance UI design for landing and marketing pages. Created custom vector icon set used across Security Features section.',
    tags: ['Fintech', 'Crypto'],
    url: null,
    color: '#0e1a14',
    accentColor: '#22c55e',
    image: null,
    caseStudy: {
      year: '2022',
      role: 'UI Designer (Freelance)',
      duration: '2 months',
      client: 'Paxful Inc.',
      overview:
        "Paxful is one of the world's largest peer-to-peer Bitcoin marketplaces. I was brought in to redesign key marketing and landing pages, and to create a cohesive custom icon set for the Security section.",
      challenge:
        "The marketing pages lacked visual consistency and failed to communicate trust — a critical factor for a crypto platform. The Security section in particular felt generic and unconvincing.",
      solution:
        "I designed a full custom vector icon set of 40+ icons aligned with the brand language, and rebuilt the landing pages with a stronger visual hierarchy, cleaner layout, and trust-forward messaging.",
      results: [
        { value: '40+', label: 'Custom icons created' },
        { value: '+22%', label: 'Page conversion' },
        { value: '2 mo', label: 'Delivery timeline' },
        { value: '100%', label: 'Brand consistency' },
      ],
      sections: [
        { type: 'hero', ratio: '16/9', label: 'Landing page redesign' },
        { type: 'grid-2', ratio: '4/3', label: 'Security section before & after' },
        { type: 'fullwidth', ratio: '21/9', label: 'Icon system overview' },
        { type: 'grid-3', ratio: '1/1', label: 'Individual icon designs' },
        { type: 'quote', text: "The icon set gave our security messaging the credibility it needed.", author: 'Paxful Design Team' },
        { type: 'grid-masonry', label: 'Marketing page variations' },
      ],
    },
  },
  {
    id: 'bigapple',
    title: 'Big Apple Moving',
    subtitle: 'Dubai Movers You Can Trust',
    description: 'Website redesign on WordPress with custom plugin development for booking and inventory management.',
    tags: ['Logistics', 'Corporate Website'],
    url: 'https://bigapplemoving.com',
    color: '#1a1208',
    accentColor: '#f59e0b',
    image: null,
    // Карточка на главной
    media: {
      thumbnail: '/media/bamthumbnail.jpg',
      preview: '/media/bampreview_720p.mp4',
      isVideoPreview: true,
      loop: true,
      autoplay: false,
    },
    caseStudy: {
      year: '2023',
      role: 'Designer & WordPress Developer',
      duration: '2 months',
      client: 'Big Apple Moving Dubai',
      // Верхний hero-блок страницы кейса
      heroMedia: {
        image: '/media/bampreview_img.jpg',
        video: '/media/bampreview_1080p.mp4',
      },
      overview:
        "Big Apple Moving is a Dubai-based relocation company serving both residential and corporate clients. The project involved a full website redesign plus custom WordPress plugin development for online booking and inventory tracking.",
      challenge:
        "The old website was outdated, mobile-unfriendly, and relied entirely on phone calls for bookings. There was no way for clients to get instant quotes or track their moves.",
      solution:
        "We redesigned the site with a modern, trust-building aesthetic and built a custom booking plugin that calculates moving quotes in real time based on inventory, distance and service tier. Clients can now track their booking status online.",
      results: [
        { value: '+180%', label: 'Online bookings' },
        { value: '-60%', label: 'Phone inquiries' },
        { value: '5★', label: 'Google reviews' },
        { value: '2×', label: 'Monthly revenue' },
      ],
      sections: [
        { type: 'hero', ratio: '16/9', label: 'New homepage design' },
        { type: 'grid-2', ratio: '4/3', label: 'Booking flow & quote calculator' },
        { type: 'fullwidth', ratio: '21/9', label: 'Services overview page' },
        { type: 'grid-3', ratio: '1/1', label: 'Mobile screens' },
        { type: 'quote', text: "The booking plugin transformed how we run the business — it's now our main sales channel.", author: 'Big Apple Moving Management' },
        { type: 'grid-masonry', label: 'UI details & interactions' },
      ],
    },
  },
]

export const skills = [
  { icon: '🔍', title: 'UX Research', desc: 'User journeys, CJM, heatmaps, prototype testing' },
  { icon: '✦', title: 'UI Design', desc: 'From wireframes to pixel-perfect visual language' },
  { icon: '⬡', title: 'Prototyping', desc: 'Interactive Figma prototypes for validation' },
  { icon: '⊞', title: 'Design Systems', desc: 'Scalable component libraries in Figma' },
  { icon: '</>', title: 'Web Development', desc: 'HTML, CSS, Sass — clean & responsive' },
  { icon: '⊕', title: 'WordPress', desc: 'Theme development, Elementor, Tilda' },
]

export const stats = [
  { value: '10+', label: 'Years experience' },
  { value: '30+', label: 'Projects completed' },
  { value: '20+', label: 'Happy clients' },
  { value: '6+', label: 'Industries' },
]