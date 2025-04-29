
'use client';

import {useEffect, useState} from 'react';
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {cn} from '@/lib/utils';
import {useRouter} from 'next/navigation';
import {ChevronLeft, ChevronRight} from 'lucide-react';
import HomeLayout from '@/app/components/home-layout';

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

const categories = ['Stories', 'Health', 'Inspiration'];

export default function Home() {
  const [articles, setArticles] = useState<Article[]>([]);
  const [filteredArticles, setFilteredArticles] = useState<Article[]>([]);
  const [searchResults, setSearchResults] = useState<Article[]>([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const router = useRouter();

  useEffect(() => {
    // Load articles from local JSON file
    const loadArticles = async () => {
      try {
        const response = await fetch('/articles.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data: Article[] = await response.json();
        setArticles(data);
        setFilteredArticles(data); // Initialize filtered articles with all articles
        setSearchResults(data);
      } catch (error) {
        console.error('Could not load articles:', error);
      }
    };

    loadArticles();
  }, []);

  // Hero Section Carousel Logic
  const featuredArticles = articles.slice(0, 3); // Take the first 3 articles as featured
  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % featuredArticles.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + featuredArticles.length) % featuredArticles.length);
  };

  // Category Filtering Logic
  const filterArticlesByCategory = (category: string) => {
    if (category === 'All') {
      setFilteredArticles(articles);
    } else {
      const filtered = articles.filter((article) => article.category === category);
      setFilteredArticles(filtered);
    }
  };

  const handleCategoryClick = (category: string) => {
    filterArticlesByCategory(category);
  };

  // Update searchResults when filteredArticles change
  useEffect(() => {
    setSearchResults(filteredArticles);
  }, [filteredArticles]);

  // Navigation to Story Detail Page
  const navigateToStory = (id: string) => {
    router.push(`/articles/${id}`);
  };

  return (
    <HomeLayout articles={articles}>
      <div className="container mx-auto py-10">
        {/* Hero Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-semibold mb-4">Featured Tribute Stories</h2>
          <div className="relative">
            {featuredArticles.length > 0 ? (
              <>
                <Card className="w-full overflow-hidden">
                  <img
                    src={featuredArticles[currentSlide].imageUrl}
                    alt={featuredArticles[currentSlide].title}
                    className="w-full h-64 object-cover rounded-md"
                  />
                  <CardContent className="p-6">
                    <CardTitle>{featuredArticles[currentSlide].title}</CardTitle>
                    <CardDescription>{featuredArticles[currentSlide].excerpt}</CardDescription>
                  </CardContent>
                </Card>
                <div className="absolute top-1/2 transform -translate-y-1/2 left-4">
                  <Button variant="ghost" size="icon" onClick={prevSlide}>
                    <ChevronLeft className="h-6 w-6"/>
                  </Button>
                </div>
                <div className="absolute top-1/2 transform -translate-y-1/2 right-4">
                  <Button variant="ghost" size="icon" onClick={nextSlide}>
                    <ChevronRight className="h-6 w-6"/>
                  </Button>
                </div>
              </>
            ) : (
              <p>Loading featured stories...</p>
            )}
          </div>
        </section>

        {/* Explore by Category Section */}
        <section className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">Explore by Category</h2>
          <div className="flex space-x-4 overflow-x-auto">
            <Button variant="outline" onClick={() => handleCategoryClick('All')}>
              All
            </Button>
            {categories.map((category) => (
              <Button key={category} variant="outline" onClick={() => handleCategoryClick(category)}>
                {category}
              </Button>
            ))}
          </div>
        </section>

        {/* Recent Articles Section */}
        <section>
          <h2 className="text-2xl font-semibold mb-4">Recent Articles</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {searchResults.map((article) => (
              <Card key={article.id} className="bg-secondary">
                <img
                  src={article.imageUrl}
                  alt={article.title}
                  className="w-full h-48 object-cover rounded-md"
                />
                <CardHeader>
                  <CardTitle>{article.title}</CardTitle>
                  <CardDescription>{article.category} - {article.readingTime} min read</CardDescription>
                </CardHeader>
                <CardContent>
                  <p className="text-sm text-muted-foreground">{article.excerpt}</p>
                </CardContent>
                <CardFooter>
                  <Button onClick={() => navigateToStory(article.id)}>Read More</Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </HomeLayout>
  );
}
