
import {Card, CardContent, CardHeader, CardTitle} from '@/components/ui/card';
import {Button} from '@/components/ui/button';
import {useRouter} from 'next/navigation';
import articles from '../../../articles.json';

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

  // Find the article with the matching ID
  const article: Article | undefined = articles.find((article) => article.id === id);

  if (!article) {
    return (
      <div className="container mx-auto py-10">
        <Card>
          <CardHeader>
            <CardTitle>Article Not Found</CardTitle>
          </CardHeader>
          <CardContent>
            <p>The article you are looking for does not exist.</p>
            <Button onClick={() => router.push('/')}>Go to Home</Button>
          </CardContent>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto py-10">
      <Card>
        <img
          src={article.imageUrl}
          alt={article.title}
          className="w-full h-64 object-cover rounded-md"
        />
        <CardHeader>
          <CardTitle className="text-2xl font-bold">{article.title}</CardTitle>
          <p className="text-sm text-muted-foreground">
            By {article.authorName} on {new Date(article.submissionDate).toLocaleDateString()}
          </p>
          <p className="text-sm text-muted-foreground">
            Category: {article.category} - {article.readingTime} min read
          </p>
        </CardHeader>
        <CardContent>
          <p>{article.fullContent}</p>
        </CardContent>
        {/* Optionally, add a back button or related articles section here */}
        <Button onClick={() => router.back()}>Go Back</Button>
      </Card>
    </div>
  );
}
