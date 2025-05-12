
import { useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import BooksList from "@/components/books/BooksList";
import AddBookForm from "@/components/books/AddBookForm";
import AuthorsList from "@/components/authors/AuthorsList";
import AddAuthorForm from "@/components/authors/AddAuthorForm";
import CategoriesList from "@/components/categories/CategoriesList";
import AddCategoryForm from "@/components/categories/AddCategoryForm";
import ApiDocs from "@/components/docs/ApiDocs";
import { Book, Author, Category } from "@/lib/types";
import { useToast } from "@/components/ui/use-toast";

const Index = () => {
  const { toast } = useToast();
  const [books, setBooks] = useState<Book[]>([
    { id: '1', title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', isbn: '9780743273565', category: 'Fiction', publishedYear: 1925, available: true },
    { id: '2', title: 'To Kill a Mockingbird', author: 'Harper Lee', isbn: '9780061120084', category: 'Fiction', publishedYear: 1960, available: true },
    { id: '3', title: 'The Hobbit', author: 'J.R.R. Tolkien', isbn: '9780547928227', category: 'Fantasy', publishedYear: 1937, available: false },
  ]);
  
  const [authors, setAuthors] = useState<Author[]>([
    { id: '1', name: 'F. Scott Fitzgerald', bio: 'American novelist and short story writer' },
    { id: '2', name: 'Harper Lee', bio: 'American novelist widely known for To Kill a Mockingbird' },
    { id: '3', name: 'J.R.R. Tolkien', bio: 'English writer, poet, philologist, and academic' },
  ]);
  
  const [categories, setCategories] = useState<Category[]>([
    { id: '1', name: 'Fiction', description: 'Literary works based on imagination' },
    { id: '2', name: 'Non-fiction', description: 'Content based on facts and real events' },
    { id: '3', name: 'Fantasy', description: 'Fiction with fantastic themes, often involving magic or the supernatural' },
  ]);

  const handleAddBook = (book: Omit<Book, "id">) => {
    const newBook: Book = {
      ...book,
      id: Date.now().toString(),
    };
    setBooks([...books, newBook]);
    toast({
      title: "Book Added",
      description: `${book.title} has been added to the library.`,
    });
  };

  const handleDeleteBook = (id: string) => {
    setBooks(books.filter(book => book.id !== id));
    toast({
      title: "Book Deleted",
      description: "The book has been removed from the library.",
    });
  };

  const handleUpdateBook = (updatedBook: Book) => {
    setBooks(books.map(book => book.id === updatedBook.id ? updatedBook : book));
    toast({
      title: "Book Updated",
      description: `${updatedBook.title} has been updated.`,
    });
  };

  const handleAddAuthor = (author: Omit<Author, "id">) => {
    const newAuthor: Author = {
      ...author,
      id: Date.now().toString(),
    };
    setAuthors([...authors, newAuthor]);
    toast({
      title: "Author Added",
      description: `${author.name} has been added to the system.`,
    });
  };

  const handleDeleteAuthor = (id: string) => {
    setAuthors(authors.filter(author => author.id !== id));
    toast({
      title: "Author Deleted",
      description: "The author has been removed from the system.",
    });
  };

  const handleUpdateAuthor = (updatedAuthor: Author) => {
    setAuthors(authors.map(author => author.id === updatedAuthor.id ? updatedAuthor : author));
    toast({
      title: "Author Updated",
      description: `${updatedAuthor.name} has been updated.`,
    });
  };

  const handleAddCategory = (category: Omit<Category, "id">) => {
    const newCategory: Category = {
      ...category,
      id: Date.now().toString(),
    };
    setCategories([...categories, newCategory]);
    toast({
      title: "Category Added",
      description: `${category.name} has been added to the system.`,
    });
  };

  const handleDeleteCategory = (id: string) => {
    setCategories(categories.filter(category => category.id !== id));
    toast({
      title: "Category Deleted",
      description: "The category has been removed from the system.",
    });
  };

  const handleUpdateCategory = (updatedCategory: Category) => {
    setCategories(categories.map(category => category.id === updatedCategory.id ? updatedCategory : category));
    toast({
      title: "Category Updated",
      description: `${updatedCategory.name} has been updated.`,
    });
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <header className="bg-[#1a365d] text-white p-6 shadow-md">
        <div className="container mx-auto">
          <h1 className="text-3xl font-bold">Library Management System</h1>
          <p className="text-gray-200">RESTful API Implementation</p>
        </div>
      </header>
      
      <main className="container mx-auto py-8 px-4">
        <Tabs defaultValue="books" className="w-full">
          <TabsList className="grid w-full grid-cols-5 mb-8">
            <TabsTrigger value="books">Books</TabsTrigger>
            <TabsTrigger value="add-book">Add Book</TabsTrigger>
            <TabsTrigger value="authors">Authors</TabsTrigger>
            <TabsTrigger value="categories">Categories</TabsTrigger>
            <TabsTrigger value="api-docs">API Documentation</TabsTrigger>
          </TabsList>
          
          <TabsContent value="books" className="space-y-4">
            <BooksList 
              books={books} 
              onDeleteBook={handleDeleteBook} 
              onUpdateBook={handleUpdateBook}
            />
          </TabsContent>
          
          <TabsContent value="add-book">
            <AddBookForm onAddBook={handleAddBook} categories={categories} authors={authors} />
          </TabsContent>
          
          <TabsContent value="authors" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <AuthorsList 
                  authors={authors} 
                  onDeleteAuthor={handleDeleteAuthor} 
                  onUpdateAuthor={handleUpdateAuthor}
                />
              </div>
              <div>
                <AddAuthorForm onAddAuthor={handleAddAuthor} />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="categories" className="space-y-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <CategoriesList 
                  categories={categories} 
                  onDeleteCategory={handleDeleteCategory} 
                  onUpdateCategory={handleUpdateCategory}
                />
              </div>
              <div>
                <AddCategoryForm onAddCategory={handleAddCategory} />
              </div>
            </div>
          </TabsContent>
          
          <TabsContent value="api-docs">
            <ApiDocs />
          </TabsContent>
        </Tabs>
      </main>
      
      <footer className="bg-[#1a365d] text-white p-4 mt-12">
        <div className="container mx-auto text-center">
          <p>© 2025 CODTECH Library API - Created for Internship Task 2</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
