export interface Company {
  id: number;
  name?: string;
  contacts?: string;
  phone?: string;
  whatsapp?: string;
  email?: string;
  address?: string;
  working_hours?: string;
  front_image_path?: string;
  logo_image_path?: string;
  section?: string;
}

export interface Category {
  id: number;
  category: string;
  description?: string;
  image?: string;
}

export interface Product {
  id: number;
  name: string;
  description?: string;
  images?: Image[];
  categories?: Category[];
}

export interface Image {
  id: number;
  img_path: string;
  alt?: string;
}

export interface ImageType {
  path: string;
  alt: string;
}