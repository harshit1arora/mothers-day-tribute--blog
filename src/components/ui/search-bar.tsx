'use client';

import {useState, useEffect} from 'react';

import {Button} from '@/components/ui/button';
import {Input} from '@/components/ui/input';
import {Search} from 'lucide-react';

interface Article {
  id: string;
  title: string;
  excerpt: string;
  fullContent: string;
  authorName: string;
  submissionDate: string;
  category: string;
  readingTime: number;
  imageUrl: string;
}

interface SearchBarProps {
  articles: Article[];
  onSearch: (results: Article[]) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({articles, onSearch}) => {
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Filter articles based on search term
    const results = articles.filter(article => {
      const titleMatch = article.title.toLowerCase().includes(searchTerm.toLowerCase());
      const excerptMatch = article.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
      return titleMatch || excerptMatch;
    });

    onSearch(results);
  }, [searchTerm, articles, onSearch]);

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  return (
    <div>
      <div className="flex items-center space-x-2 mb-4">
        <Input
          type="text"
          placeholder="Search articles..."
          value={searchTerm}
          onChange={handleInputChange}
        />
        <Button variant="outline" size="icon" aria-label="Search">
          <Search className="h-4 w-4"/>
        </Button>
      </div>
    </div>
  );
};

export default SearchBar;
