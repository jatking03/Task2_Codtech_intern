
import { ApiEndpoint } from "@/lib/types";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, BookmarkIcon } from "lucide-react";

const ApiDocs = () => {
  const bookEndpoints: ApiEndpoint[] = [
    {
      method: "GET",
      path: "/api/books",
      description: "Retrieve all books",
      responseBody: `[
  {
    "id": "1",
    "title": "The Great Gatsby",
    "author": "F. Scott Fitzgerald",
    "isbn": "9780743273565",
    "category": "Fiction",
    "publishedYear": 1925,
    "available": true
  },
  ...
]`
    },
    {
      method: "GET",
      path: "/api/books/:id",
      description: "Retrieve a specific book by ID",
      parameters: [
        {
          name: "id",
          type: "string",
          description: "The ID of the book",
          required: true
        }
      ],
      responseBody: `{
  "id": "1",
  "title": "The Great Gatsby",
  "author": "F. Scott Fitzgerald",
  "isbn": "9780743273565",
  "category": "Fiction",
  "publishedYear": 1925,
  "available": true
}`
    },
    {
      method: "POST",
      path: "/api/books",
      description: "Add a new book",
      requestBody: `{
  "title": "New Book Title",
  "author": "Author Name",
  "isbn": "1234567890123",
  "category": "Fiction",
  "publishedYear": 2023,
  "available": true
}`,
      responseBody: `{
  "id": "123",
  "title": "New Book Title",
  "author": "Author Name",
  "isbn": "1234567890123",
  "category": "Fiction",
  "publishedYear": 2023,
  "available": true
}`
    },
    {
      method: "PUT",
      path: "/api/books/:id",
      description: "Update a book",
      parameters: [
        {
          name: "id",
          type: "string",
          description: "The ID of the book to update",
          required: true
        }
      ],
      requestBody: `{
  "title": "Updated Book Title",
  "author": "Updated Author Name",
  "isbn": "1234567890123",
  "category": "Non-fiction",
  "publishedYear": 2022,
  "available": false
}`,
      responseBody: `{
  "id": "123",
  "title": "Updated Book Title",
  "author": "Updated Author Name",
  "isbn": "1234567890123",
  "category": "Non-fiction",
  "publishedYear": 2022,
  "available": false
}`
    },
    {
      method: "DELETE",
      path: "/api/books/:id",
      description: "Delete a book",
      parameters: [
        {
          name: "id",
          type: "string",
          description: "The ID of the book to delete",
          required: true
        }
      ],
      responseBody: `{
  "success": true,
  "message": "Book deleted successfully"
}`
    }
  ];

  const authorEndpoints: ApiEndpoint[] = [
    {
      method: "GET",
      path: "/api/authors",
      description: "Retrieve all authors",
      responseBody: `[
  {
    "id": "1",
    "name": "F. Scott Fitzgerald",
    "bio": "American novelist and short story writer"
  },
  ...
]`
    },
    {
      method: "GET",
      path: "/api/authors/:id",
      description: "Retrieve a specific author by ID",
      parameters: [
        {
          name: "id",
          type: "string",
          description: "The ID of the author",
          required: true
        }
      ],
      responseBody: `{
  "id": "1",
  "name": "F. Scott Fitzgerald",
  "bio": "American novelist and short story writer"
}`
    },
    {
      method: "POST",
      path: "/api/authors",
      description: "Add a new author",
      requestBody: `{
  "name": "New Author Name",
  "bio": "Author biography"
}`,
      responseBody: `{
  "id": "123",
  "name": "New Author Name",
  "bio": "Author biography"
}`
    },
    {
      method: "PUT",
      path: "/api/authors/:id",
      description: "Update an author",
      parameters: [
        {
          name: "id",
          type: "string",
          description: "The ID of the author to update",
          required: true
        }
      ],
      requestBody: `{
  "name": "Updated Author Name",
  "bio": "Updated author biography"
}`,
      responseBody: `{
  "id": "123",
  "name": "Updated Author Name",
  "bio": "Updated author biography"
}`
    },
    {
      method: "DELETE",
      path: "/api/authors/:id",
      description: "Delete an author",
      parameters: [
        {
          name: "id",
          type: "string",
          description: "The ID of the author to delete",
          required: true
        }
      ],
      responseBody: `{
  "success": true,
  "message": "Author deleted successfully"
}`
    }
  ];

  const categoryEndpoints: ApiEndpoint[] = [
    {
      method: "GET",
      path: "/api/categories",
      description: "Retrieve all categories",
      responseBody: `[
  {
    "id": "1",
    "name": "Fiction",
    "description": "Literary works based on imagination"
  },
  ...
]`
    },
    {
      method: "GET",
      path: "/api/categories/:id",
      description: "Retrieve a specific category by ID",
      parameters: [
        {
          name: "id",
          type: "string",
          description: "The ID of the category",
          required: true
        }
      ],
      responseBody: `{
  "id": "1",
  "name": "Fiction",
  "description": "Literary works based on imagination"
}`
    },
    {
      method: "POST",
      path: "/api/categories",
      description: "Add a new category",
      requestBody: `{
  "name": "New Category Name",
  "description": "Category description"
}`,
      responseBody: `{
  "id": "123",
  "name": "New Category Name",
  "description": "Category description"
}`
    },
    {
      method: "PUT",
      path: "/api/categories/:id",
      description: "Update a category",
      parameters: [
        {
          name: "id",
          type: "string",
          description: "The ID of the category to update",
          required: true
        }
      ],
      requestBody: `{
  "name": "Updated Category Name",
  "description": "Updated category description"
}`,
      responseBody: `{
  "id": "123",
  "name": "Updated Category Name",
  "description": "Updated category description"
}`
    },
    {
      method: "DELETE",
      path: "/api/categories/:id",
      description: "Delete a category",
      parameters: [
        {
          name: "id",
          type: "string",
          description: "The ID of the category to delete",
          required: true
        }
      ],
      responseBody: `{
  "success": true,
  "message": "Category deleted successfully"
}`
    }
  ];

  const renderEndpoint = (endpoint: ApiEndpoint) => (
    <Card className="mb-4" key={`${endpoint.method}-${endpoint.path}`}>
      <CardHeader className="pb-3">
        <div className="flex items-center gap-2">
          <Badge className={
            endpoint.method === "GET" 
              ? "bg-blue-500" 
              : endpoint.method === "POST" 
                ? "bg-green-500" 
                : endpoint.method === "PUT" 
                  ? "bg-amber-500" 
                  : "bg-red-500"
          }>
            {endpoint.method}
          </Badge>
          <CardTitle className="text-base font-mono">{endpoint.path}</CardTitle>
        </div>
        <CardDescription>{endpoint.description}</CardDescription>
      </CardHeader>
      <CardContent>
        {endpoint.parameters && endpoint.parameters.length > 0 && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Parameters:</h4>
            <div className="bg-gray-50 p-3 rounded-md">
              <ul className="list-disc pl-5 space-y-1">
                {endpoint.parameters.map((param, index) => (
                  <li key={index} className="text-sm">
                    <span className="font-mono font-medium">{param.name}</span> ({param.type})
                    {param.required && <span className="text-red-500 ml-1">*</span>} - {param.description}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        )}
        
        {endpoint.requestBody && (
          <div className="mb-4">
            <h4 className="text-sm font-semibold mb-2">Request Body:</h4>
            <div className="bg-gray-50 p-3 rounded-md">
              <pre className="text-xs font-mono whitespace-pre-wrap">{endpoint.requestBody}</pre>
            </div>
          </div>
        )}
        
        {endpoint.responseBody && (
          <div>
            <h4 className="text-sm font-semibold mb-2">Response:</h4>
            <div className="bg-gray-50 p-3 rounded-md">
              <pre className="text-xs font-mono whitespace-pre-wrap">{endpoint.responseBody}</pre>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-6">
      <div className="text-center mb-8">
        <h1 className="text-3xl font-bold mb-2">Library API Documentation</h1>
        <p className="text-gray-600 max-w-2xl mx-auto">
          This documentation describes the RESTful API endpoints for the Library Management System.
          All endpoints return JSON responses and accept JSON request bodies where applicable.
        </p>
      </div>
      
      <Card>
        <CardHeader>
          <CardTitle>Base URL</CardTitle>
          <CardDescription>All API requests should use the base URL</CardDescription>
        </CardHeader>
        <CardContent>
          <code className="bg-gray-50 p-2 rounded-md block">https://api.library.example.com/v1</code>
          <p className="mt-4 text-sm text-gray-600">
            All API requests must include an <code>Authorization</code> header with a valid API key:
          </p>
          <code className="bg-gray-50 p-2 rounded-md block mt-2">
            Authorization: Bearer YOUR_API_KEY
          </code>
        </CardContent>
      </Card>
      
      <Tabs defaultValue="books">
        <TabsList className="grid w-full grid-cols-3 mb-6">
          <TabsTrigger value="books" className="flex items-center gap-2">
            <BookOpen className="h-4 w-4" />
            Books
          </TabsTrigger>
          <TabsTrigger value="authors" className="flex items-center gap-2">
            <Users className="h-4 w-4" />
            Authors
          </TabsTrigger>
          <TabsTrigger value="categories" className="flex items-center gap-2">
            <BookmarkIcon className="h-4 w-4" />
            Categories
          </TabsTrigger>
        </TabsList>
        
        <TabsContent value="books">
          {bookEndpoints.map(renderEndpoint)}
        </TabsContent>
        
        <TabsContent value="authors">
          {authorEndpoints.map(renderEndpoint)}
        </TabsContent>
        
        <TabsContent value="categories">
          {categoryEndpoints.map(renderEndpoint)}
        </TabsContent>
      </Tabs>
    </div>
  );
};

export default ApiDocs;
