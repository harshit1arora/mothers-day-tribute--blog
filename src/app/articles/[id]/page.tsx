'use client';

import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {useRouter} from 'next/navigation';
import {useEffect, useState} from 'react';
import React from 'react';

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

interface Props {
  params: {
    id: string;
  };
}

export default function StoryDetailPage({params}: Props) {
  const {id} = params;
  const router = useRouter();
  const [article, setArticle] = useState<Article | undefined>(undefined);

  useEffect(() => {
    const loadArticle = async () => {
      try {
        const response = await fetch('/articles.json');
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        const articles: Article[] = await response.json();
        const foundArticle = articles.find((article) => article.id === id);
        setArticle(foundArticle);
      } catch (error) {
        console.error('Could not load articles:', error);
      }
    };

    loadArticle();
  }, [id]);

  if (!article) {
    return (
      <div className="flex justify-center items-center h-screen bg-gradient-to-br from-purple-200 to-pink-100">
        <Card className="w-96 shadow-xl rounded-2xl p-6">
          <CardHeader className="pb-4">
            <CardTitle className="text-2xl font-bold text-gray-800">Article Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-600 mb-4">The article you are looking for does not exist.</p>
            <Button onClick={() => router.push('/')} className="bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-300">
              Go to Home
            </Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="flex justify-center items-start min-h-screen bg-gradient-to-br from-purple-200 to-pink-100 py-12">
      <Card className="w-9/12 shadow-xl rounded-2xl overflow-hidden transition-transform duration-300 hover:scale-105">
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-72 object-cover object-center rounded-t-2xl"
        />
        <CardHeader className="p-6">
          <CardTitle className="text-3xl font-bold text-gray-900 mb-2">{article.title}</CardTitle>
          <p className="text-gray-700">
            By {article.authorName} on {new Date(article.submissionDate).toLocaleDateString()}
          </p>
          <p className="text-sm text-indigo-600 font-semibold mt-1">
            Category: {article.category} - {article.readingTime} min read
          </p>
        </CardHeader>
        <CardContent className="p-6">
          <p className="text-gray-800 leading-relaxed">{article.fullContent}</p>
        </CardContent>
        <div className="p-6 bg-gray-50 border-t border-gray-200">
          <Button onClick={() => router.back()} className="bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-300">
            Go Back
          </Button>
        </div>
      </Card>
    </div>
  );
}
