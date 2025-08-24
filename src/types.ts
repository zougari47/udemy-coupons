export interface CourseSummary {
  id: number;
  name: string;
  image: string;
  price: number;
  sale_price: number;
  lectures: number;
  views: number;
  rating: number;
  language: string;
  category: string;
  subcategory: string;
  slug: string;
  store: string;
  sale_start: string;
}

interface Course {
  id: number;
  name: string;
  description: string;
  content: string;
  price: number;
  sale_price: number;
  sale_start: string; // Could be Date if you parse it
  lectures: number;
  views: number;
  rating: number;
  image: string;
  url: string;
  store: string;
  type: string;
  slug: string;
  category: string;
  subcategory: string;
  tags: string; // Can be an array if you parse comma-separated tags
  language: string;
  courseid: number;
}
