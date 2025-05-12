
export interface Book {
  id: string;
  title: string;
  author: string;
  isbn: string;
  category: string;
  publishedYear: number;
  available: boolean;
}

export interface Author {
  id: string;
  name: string;
  bio: string;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}

export interface ApiEndpoint {
  method: string;
  path: string;
  description: string;
  requestBody?: string;
  responseBody?: string;
  parameters?: {
    name: string;
    type: string;
    description: string;
    required: boolean;
  }[];
}
