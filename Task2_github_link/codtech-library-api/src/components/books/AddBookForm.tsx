
import { useState } from "react";
import { Book, Author, Category } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

interface AddBookFormProps {
  onAddBook: (book: Omit<Book, "id">) => void;
  categories: Category[];
  authors: Author[];
}

const AddBookForm = ({ onAddBook, categories, authors }: AddBookFormProps) => {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isbn, setIsbn] = useState("");
  const [category, setCategory] = useState("");
  const [publishedYear, setPublishedYear] = useState<number>(new Date().getFullYear());
  const [available, setAvailable] = useState(true);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddBook({
      title,
      author,
      isbn,
      category,
      publishedYear,
      available
    });
    
    // Reset form
    setTitle("");
    setAuthor("");
    setIsbn("");
    setCategory("");
    setPublishedYear(new Date().getFullYear());
    setAvailable(true);
  };

  const currentYear = new Date().getFullYear();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Book</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title">Book Title</Label>
            <Input 
              id="title" 
              placeholder="Enter book title" 
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="author">Author</Label>
            <Input 
              id="author" 
              placeholder="Enter author name" 
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="isbn">ISBN</Label>
            <Input 
              id="isbn" 
              placeholder="Enter ISBN number" 
              value={isbn}
              onChange={(e) => setIsbn(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="category">Category</Label>
            <Select value={category} onValueChange={setCategory} required>
              <SelectTrigger>
                <SelectValue placeholder="Select category" />
              </SelectTrigger>
              <SelectContent>
                {categories.map((cat) => (
                  <SelectItem key={cat.id} value={cat.name}>
                    {cat.name}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div className="space-y-2">
            <Label htmlFor="year">Published Year</Label>
            <Input 
              id="year"
              type="number"
              min="1000"
              max={currentYear}
              value={publishedYear}
              onChange={(e) => setPublishedYear(parseInt(e.target.value))}
              required
            />
          </div>

          <div className="flex items-center space-x-2">
            <Switch 
              id="available" 
              checked={available}
              onCheckedChange={setAvailable}
            />
            <Label htmlFor="available">Available for checkout</Label>
          </div>

          <Button type="submit" className="w-full">Add Book</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddBookForm;
