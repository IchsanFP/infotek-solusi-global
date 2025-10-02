import { FaRegFileAlt } from "react-icons/fa";
import { VscGraph } from "react-icons/vsc";
import { CiBellOn, CiGlobe } from "react-icons/ci";
import { LuRadar, LuShield, LuCircleAlert } from "react-icons/lu";
import { FiUsers } from "react-icons/fi";
import { MdOutlineRadar, MdElectricBolt } from "react-icons/md";
import { BsGraphUpArrow } from "react-icons/bs";
import { FaCircleNodes, FaGear, FaRegClock } from "react-icons/fa6";
import { FiMonitor } from "react-icons/fi";

export const CONSTANTSTRING = {
  ACCESSTOKEN: 'accessToken',
  REFRESHTOKEN: 'refreshToken'
}

export const LOGO = 'assets/images/logo_heliogic.png'
export const HERO = 'assets/images/hero_heliologic.jpeg'
export const HERO2 = 'assets/images/hero2.jpg'
export const AGGREEMENT = 'assets/images/aggreement.jpg'
export const CSD = 'assets/images/csd.jpg'
export const AI = 'assets/images/ai.jpg'
export const MOBILE = 'assets/images/mobile.jpg'
export const SOLUTIONS = 'assets/images/solutions.jpg'
export const PARTNER_1 = 'assets/images/partner_1.png'
export const PARTNER_2 = 'assets/images/partner_2_new.png'
export const PARTNER_3 = 'assets/images/partner_3_new.png'
export const PARTNER_4 = 'assets/images/partner_4.png'
export const PARTNER_5 = 'assets/images/partner_5.png'
export const PARTNER_6 = 'assets/images/partner_6_2.svg'
export const PARTNER_7 = 'assets/images/partner_7.png'
export const PARTNERSHIP = 'assets/images/partnership.jpg'
export const TEAM = 'assets/images/team.jpg'
export const SOLVING = 'assets/images/solving.jpg'
export const TECHNOLOGY = 'assets/images/technology.jpg'

export const dataPartner = [
  {
    image: PARTNER_1
  },
  {
    image: PARTNER_2
  },
  {
    image: PARTNER_4
  },
  {
    image: PARTNER_7
  },
]

export const dataProduct = [
  {
    name: 'Intextive',
    thumbnail: AI,
    title: 'Turn incident cases into insights faster, smarter, and reliable.',
    description: 'Intextive empowers organizations to capture, report, summarize, and analyze cases and events seamlessly. From real-time alerts to actionable analytics, it ensures no detail is lost and every case leads to better decisions.',
    feature: [
      {
        title: 'Smart Case Reporting',
        desc: 'Streamlined forms and uploads for quick, accurate case and incident capture.',
        icon: FaRegFileAlt,
        color: '#3B82F6'
      },
      {
        title: 'Interactive Dashboard',
        desc: 'Real-time overview of cases, patterns, and trends. Summarized automatically for your perusal.',
        icon: VscGraph,
        color: '#3B82F6'
      },
      {
        title: 'Automated Alerts',
        desc: 'Notifications for priority cases and critical updates.',
        icon: CiBellOn,
        color: '#3B82F6'
      },
      {
        title: 'Pattern Radar',
        desc: 'AI-assisted detection of recurring or related events.',
        icon: LuRadar,
        color: '#3B82F6'
      },
      {
        title: 'Collaboration Tools',
        desc: 'Shared access and workflows for cross-team response.',
        icon: FiUsers,
        color: '#3B82F6'
      },
    ]
  },
  {
  name: 'Cell Sentinel Lab',
  thumbnail: CSD,
    title: 'Guarding your network, one signal at a time.',
    description: 'Cell Sentinel Lab provides precise detection and analysis of cellular signals. Whether its identifying rogue BTS towers, tracking suspicious activity, or ensuring network reliability, this platform delivers clarity where it matters most.',
    feature: [
      {
        title: 'BTS Detection & Mapping',
        desc: 'Identify and visualize active base stations in real time.',
        icon: LuRadar,
        color: "#EC4899"
      },
      {
        title: 'Rogue Tower Alerts',
        desc: 'Detect anomalies and unauthorized transmissions.',
        icon: LuShield,
        color: '#EC4899'
      },
      {
        title: 'Geo-Intelligence',
        desc: 'Map signals with geolocation for better situational awareness.',
        icon: MdOutlineRadar,
        color: '#EC4899'
      },
      {
        title: 'Data Export & Reports',
        desc: 'Structured reports for audits, security, and compliance.',
        icon: FaRegFileAlt,
        color: '#EC4899'
      },
      {
        title: 'Research Mode',
        desc: 'Tools for deeper investigation and lab-based analysis.',
        icon: VscGraph,
        color: '#EC4899'
      },
    ]
  },
  {
  name: 'SignaLens Media',
  thumbnail: SOLUTIONS,
    title: 'Stay ahead of the narrative monitor, analyze, and act.',
    description: 'SignaLens Media tracks online news and social chatter to help you understand how narratives form and spread. With sentiment analysis, influencer mapping, and customizable dashboards, its your strategic lens into the media landscape.',
    feature: [
      {
        title: 'Real-Time News Capture',
        desc: 'Aggregate news and updates from multiple channels in real-time.',
        icon: CiGlobe,
        color: '#22C55E'
      },
      {
        title: 'Sentiment Analysis',
        desc: 'Measure tone, trends, and shifts in public perception automatically.',
        icon: BsGraphUpArrow,
        color: '#22C55E'
      },
      {
        title: 'Social Network Analysis',
        desc: 'Reveal key actors and connections driving conversations.',
        icon: FaCircleNodes,
        color: '#22C55E'
      },
      {
        title: 'Custom Dashboards',
        desc: 'Visualize insights tailored to your specific goals and KPIs.',
        icon: FiMonitor,
        color: '#22C55E'
      },
      {
        title: 'Reports & Alerts',
        desc: 'Export intelligence or receive alerts on emerging issues.',
        icon: LuCircleAlert,
        color: '#22C55E'
      },
    ]
  },
  {
  name: 'HelioPulse',
  thumbnail: MOBILE,
    title: 'Powering the future of payments secure, fast, and scalable.',
    description: 'HelioPulse provides intelligent payment solutions that simplify digital transactions for businesses of all sizes. From QRIS integration to real-time analytics, it ensures secure, efficient, and growth-ready payment processing.',
    feature: [
      {
        title: 'Real-Time Settlement',
        desc: 'Accelerated processing ensures funds are transferred securely and quickly, keeping your cash flow strong.',
        icon: MdElectricBolt,
        color: '#EAB308'
      },
      {
        title: 'Enterprise-Grade Security',
        desc: 'Advanced encryption and fraud detection protect every transaction, building trust with your customers.',
        icon: LuShield,
        color: '#EAB308'
      },
      {
        title: 'Developer-Friendly APIs',
        desc: 'Simple integration with flexible APIs and SDKs to fit seamlessly into your applications and workflows.',
        icon: FaGear,
        color: '#EAB308'
      },
      {
        title: 'Scalable Infrastructure',
        desc: 'Built to handle growth, from startups to enterprises, with high availability and robust reliability.',
        icon: BsGraphUpArrow,
        color: '#EAB308'
      },
      {
        title: 'Analytics & Insights',
        desc: 'Track transactions, monitor performance, and gain actionable insights with an intuitive dashboard.',
        icon: FaRegClock,
        color: '#EAB308'
      },
    ]
  },
]

export const dataAdvantage = [
  {
    title: 'Experienced Team',
    desc: 'Multidisciplinary experts with proven track records',
    thumbnail: TEAM
  },
  {
    title: 'Latest Technology',
    desc: 'Cutting-edge solutions and global best practices',
    thumbnail: TECHNOLOGY
  },
  {
    title: 'End-to-End Solutions',
    desc: 'Complete journey from ideation to execution',
    thumbnail: SOLVING
  },
  {
    title: 'Long-term Partnership',
    desc: 'Ongoing support and strategic collaboration',
    thumbnail: PARTNERSHIP
  },
]