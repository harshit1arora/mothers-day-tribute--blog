

import AuthorProfile from '@/app/components/ui/author-profile';
import SearchBar from '@/components/ui/search-bar';
import WhereToNext from '@/components/ui/where-to-next';
import {Article} from '@/types/article';

interface HomeLayoutProps {
  articles: Article[];
  children: React.ReactNode;
  onSearch: (results: Article[]) => void;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({articles, children, onSearch}) => {
  return (
    <div className="flex flex-col md:flex-row">
      <div className="md:w-1/4 p-4">
        <SearchBar articles={articles} onSearch={onSearch}/>
        <AuthorProfile authorName="Harshit Arora" title="Passionate about sharing tribute stories." imageUrl="https://picsum.photos/50/50"/>
        <WhereToNext />
      </div>
      <div className="md:w-3/4 p-4">{children}</div>
    </div>
  );
};

export default HomeLayout;
