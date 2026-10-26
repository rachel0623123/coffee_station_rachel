export interface Coffee {
  id: number;
  name: string;
  price: number;
  content: string;
  star: number;
  category: string;
  image: string;
}

export interface Ambience {
  id: number;
  alt: string;
  image: string;
}

export interface TestimonialData {
  id: number;
  quote: string;
  name: string;
  role: string;
  avatar: string;
}

export interface Staff {
  id: number;
  alt: string;
  name: string;
  role: string;
  image: string;
}

export interface CartItem {
  id: number;
  quantity: number;
}