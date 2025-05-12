
import { useState } from "react";
import { Author } from "@/lib/types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

interface AddAuthorFormProps {
  onAddAuthor: (author: Omit<Author, "id">) => void;
}

const AddAuthorForm = ({ onAddAuthor }: AddAuthorFormProps) => {
  const [name, setName] = useState("");
  const [bio, setBio] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAddAuthor({
      name,
      bio
    });
    
    // Reset form
    setName("");
    setBio("");
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Add New Author</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Author Name</Label>
            <Input 
              id="name" 
              placeholder="Enter author name" 
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          <div className="space-y-2">
            <Label htmlFor="bio">Biography</Label>
            <Textarea 
              id="bio" 
              placeholder="Enter author biography" 
              value={bio}
              onChange={(e) => setBio(e.target.value)}
              rows={4}
            />
          </div>

          <Button type="submit" className="w-full">Add Author</Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default AddAuthorForm;
