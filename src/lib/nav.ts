const site = "https://www.rolltoroll.org";

export type NavLink = {
  label: string;
  href: string;
  internal?: boolean;
  badge?: string;
};

export type NavColumn = {
  heading: string;
  items: NavLink[];
  cta?: NavLink;
};

export type NavMenu = {
  label: string;
  columns: NavColumn[];
};

export const navMenus: NavMenu[] = [
  {
    label: "Membership",
    columns: [
      {
        heading: "Join ARC",
        items: [
          { label: "Converter Membership", href: `${site}/member-benefits-converters` },
          { label: "Supplier Membership", href: `${site}/member-benefits-suppliers` },
          { label: "University Membership", href: `${site}/member-benefits-university` },
          { label: "Member List", href: `${site}/member-list` },
        ],
        cta: { label: "Join ARC Now", href: `${site}/member-application` },
      },
      {
        heading: "About Us",
        items: [
          { label: "Board of Directors", href: `${site}/board-of-directors` },
          { label: "Meet the Team", href: `${site}/meet-the-team` },
          { label: "Annual Reports & Press Kit", href: `${site}/member-documents` },
        ],
      },
      {
        heading: "Get in Touch",
        items: [
          { label: "Contact Us", href: `${site}/contact-us` },
          {
            label: "Set Up a Meeting",
            href: "https://bookings.cloud.microsoft/bookwithme/user/97adb35886654265b23271fec6af6725%40rolltoroll.org?anonymous&ismsaljsauthenabled",
          },
        ],
      },
    ],
  },
  {
    label: "Events & Training",
    columns: [
      {
        heading: "Events",
        items: [
          { label: "2026 ARC Summit Medical", href: `${site}/2026-arc-summit` },
          { label: "2026 ARC Exchange Europe", href: `${site}/2026-arc-exchange-europe` },
          { label: "2026 R2R USA Conference & Expo", href: `${site}/2026-r2r-usa-wrap-up` },
          { label: "2027 R2R USA Conference & Expo", href: `${site}/2027-r2r-usa-save-the-date` },
        ],
        cta: { label: "View Industry Events", href: `${site}/events` },
      },
      {
        heading: "Training",
        items: [
          { label: "Instructor-Led Courses", href: `${site}/education/#in-person-courses` },
          { label: "Online Courses", href: `${site}/education/#online-courses` },
        ],
      },
    ],
  },
  {
    label: "Programs & Resources",
    columns: [
      {
        heading: "Programs",
        items: [
          { label: "ARC Sponsorships", href: `${site}/2026-sponsorships` },
          { label: "Booth Ambassadors", href: `${site}/booth-ambassador` },
          { label: "Webinar Presentations", href: `${site}/webinars` },
          { label: "ARC Awards & Industry Recognition", href: `${site}/industry-recognition` },
        ],
      },
      {
        heading: "Member Resources",
        items: [
          { label: "Technical Library", href: "https://library.rolltoroll.org" },
          { label: "Committees", href: `${site}/committees` },
          { label: "Technical Advisory Panel", href: `${site}/technical-consultants` },
          { label: "ARC Forum", href: `${site}/ask-arc-forum` },
          { label: "Member News", href: `${site}/member-news` },
          { label: "Job Board", href: `${site}/job-board` },
        ],
      },
      {
        heading: "Industry Resources",
        items: [
          { label: "What Is Converting?", href: "/", internal: true, badge: "New" },
          { label: "Sourcebook", href: `${site}/sourcebook` },
          { label: "Converting Quarterly", href: "https://convertingquarterly.com" },
          { label: "Converting Glossary", href: `${site}/roll-to-roll-glossary` },
          {
            label: "Web Handling Testing Best Practices",
            href: `${site}/web-handling-testing-best-practices`,
          },
        ],
      },
    ],
  },
  {
    label: "Get Involved",
    columns: [
      {
        heading: "Get Involved",
        items: [
          { label: "Attend an Event", href: `${site}/events` },
          { label: "Be a Presenter", href: `${site}/r2r-call-for-papers` },
          { label: "WISE Scholarship", href: `${site}/wise-scholarship` },
        ],
      },
    ],
  },
];

export const signInLink: NavLink = { label: "Sign In", href: `${site}/sign-in` };
