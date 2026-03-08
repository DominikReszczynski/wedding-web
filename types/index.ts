export type Lang = "pl" | "en" | "de";

export type StoryItem = {
  year: string;
  title: string;
  text: string;
};

export type ScheduleItem = [string, string];

export type MenuCategory = {
  title: string;
  items: string[];
};

export type FAQItem = [string, string];

export type ContactLabels = {
  bride: string;
  groom: string;
  witness: string;
};

export type WeddingTranslation = {
  nav: {
    home: string;
    story: string;
    schedule: string;
    menu: string;
    attractions: string;
    info: string;
    faq: string;
    rsvp: string;
    contact: string;
  };
  hero: {
    subtitle: string;
    dateLabel: string;
    ctaPrimary: string;
    ctaSecondary: string;
    quote: string;
  };
  countdown: {
    title: string;
    days: string;
    hours: string;
    minutes: string;
    seconds: string;
    finished: string;
  };
  details: {
    title: string;
    ceremony: string;
    party: string;
    ceremonyPlace: string;
    partyPlace: string;
    ceremonyTime: string;
    partyTime: string;
    address1: string;
    address2: string;
    map: string;
  };
  story: {
    title: string;
    intro: string;
    items: StoryItem[];
  };
  schedule: {
    title: string;
    items: ScheduleItem[];
  };
  menu: {
    title: string;
    sections: MenuCategory[];
  };
  attractions: {
    title: string;
    items: string[];
  };
  guestInfo: {
    title: string;
    items: string[];
  };
  faq: {
    title: string;
    items: FAQItem[];
  };
  rsvp: {
    title: string;
    desc: string;
    name: string;
    attending: string;
    yes: string;
    no: string;
    guests: string;
    meal: string;
    transport: string;
    accommodation: string;
    message: string;
    send: string;
  };
  contact: {
    title: string;
    text: string;
    bride: string;
    groom: string;
    witness: string;
  };
  footer: string;
};