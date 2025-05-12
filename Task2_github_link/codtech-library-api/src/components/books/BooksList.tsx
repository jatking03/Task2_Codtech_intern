
import { useState } from "react";
import { Book } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Search, Edit, Trash2, BookOpen } from "lucide-react";

interface BooksListProps {
  books: Book[];
  onDeleteBook: (id: string) => void;
  onUpdateBook: (book: Book) => void;
}

const BooksList = ({ books, onDeleteBook, onUpdateBook }: BooksListProps) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [editingBook, setEditingBook] = useState<Book | null>(null);
  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const filteredBooks = books.filter(book => 
    book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.category.toLowerCase().includes(searchTerm.toLowerCase()) ||
    book.isbn.includes(searchTerm)
  );

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editingBook) {
      onUpdateBook(editingBook);
      setIsDialogOpen(false);
    }
  };

  return (
    <div className="space-y-4">
      <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
        <h2 className="text-2xl font-bold">Library Books</h2>
        <div className="relative w-full sm:w-64">
          <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search books..."
            className="pl-8"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>
      
      {filteredBooks.length === 0 ? (
        <div className="text-center py-8">
          <BookOpen className="mx-auto h-12 w-12 text-gray-400" />
          <p className="mt-2 text-lg font-medium">No books found</p>
          <p className="text-muted-foreground">Try adjusting your search terms</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredBooks.map((book) => (
            <Card key={book.id} className={book.available ? "border-green-200" : "border-red-200"}>
              <CardHeader className="pb-2">
                <div className="flex justify-between items-start">
                  <CardTitle className="text-lg">{book.title}</CardTitle>
                  <div className="flex space-x-1">
                    <Button 
                      variant="ghost" 
                      size="icon"
                      onClick={() => {
                        setEditingBook(book);
                        setIsDialogOpen(true);
                      }}
                    >
                      <Edit className="h-4 w-4" />
                    </Button>
                    <Button 
                      variant="ghost" 
                      size="icon" 
                      onClick={() => onDeleteBook(book.id)}
                    >
                      <Trash2 className="h-4 w-4 text-red-500" />
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-1">
                  <div className="text-sm">
                    <span className="font-medium">Author:</span> {book.author}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">ISBN:</span> {book.isbn}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Category:</span> {book.category}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">Published:</span> {book.publishedYear}
                  </div>
                  <div className="text-sm mt-2 flex items-center">
                    <span className={`inline-block w-2 h-2 rounded-full mr-2 ${book.available ? 'bg-green-500' : 'bg-red-500'}`}></span>
                    <span>{book.available ? 'Available' : 'Unavailable'}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
      
      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Book</DialogTitle>
          </DialogHeader>
          {editingBook && (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="title">Title</Label>
                <Input 
                  id="title" 
                  value={editingBook.title} 
                  onChange={(e) => setEditingBook({...editingBook, title: e.target.value})}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="author">Author</Label>
                <Input 
                  id="author" 
                  value={editingBook.author} 
                  onChange={(e) => setEditingBook({...editingBook, author: e.target.value})}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="isbn">ISBN</Label>
                <Input 
                  id="isbn" 
                  value={editingBook.isbn} 
                  onChange={(e) => setEditingBook({...editingBook, isbn: e.target.value})}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="category">Category</Label>
                <Input 
                  id="category" 
                  value={editingBook.category} 
                  onChange={(e) => setEditingBook({...editingBook, category: e.target.value})}
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="publishedYear">Published Year</Label>
                <Input 
                  id="publishedYear" 
                  type="number"
                  value={editingBook.publishedYear} 
                  onChange={(e) => setEditingBook({...editingBook, publishedYear: parseInt(e.target.value)})}
                  required
                />
              </div>
              
              <div className="flex items-center space-x-2">
                <Switch 
                  id="available" 
                  checked={editingBook.available}
                  onCheckedChange={(checked) => setEditingBook({...editingBook, available: checked})}
                />
                <Label htmlFor="available">Available</Label>
              </div>
              
              <div className="flex justify-end space-x-2">
                <Button type="button" variant="outline" onClick={() => setIsDialogOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Save Changes</Button>
              </div>
            </form>
          )}
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default BooksList;
