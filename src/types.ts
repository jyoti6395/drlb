export interface Service {
  id: string;
  title: string;
  shortDescription: string;
  longDescription: string;
  symptoms: string[];
  treatments: string[];
  iconName: string; // Used to map to Lucide icons
}

export interface OfficeLocation {
  id: string;
  city: string;
  address: string;
  phone: string;
  fax: string;
  mapUrl: string;
  directionsUrl: string;
  hours: {
    day: string;
    hours: string;
  }[];
}

export interface Article {
  id: string;
  title: string;
  category: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  readTime: string;
  imageUrl?: string;
}

export interface PatientReview {
  id: string;
  name: string;
  location: string;
  rating: number;
  condition: string;
  text: string;
  date: string;
}
