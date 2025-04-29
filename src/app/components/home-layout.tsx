
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInput,
  SidebarInset,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarProvider,
  SidebarRail,
  SidebarSeparator,
  SidebarTrigger,
} from '@/components/ui/sidebar';
import AuthorProfile from '@/components/ui/author-profile';
import Destinations from '@/components/ui/destinations';
import SearchBar from '@/components/ui/search-bar';
import {useState} from 'react';
import {Button} from '@/components/ui/button';

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

interface HomeLayoutProps {
  articles: Article[];
  children: React.ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({articles, children}) => {
  const [searchResults, setSearchResults] = useState<Article[]>(articles);

  const handleSearch = (results: Article[]) => {
    setSearchResults(results);
  };

  return (
    <SidebarProvider>
      <SidebarInset>
        <div className="md:hidden">
          <SidebarTrigger/>
        </div>
        {children}
      </SidebarInset>
      <Sidebar>
        <SidebarHeader>
          <SearchBar articles={articles} onSearch={handleSearch}/>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <AuthorProfile/>
          </SidebarGroup>
          <SidebarSeparator/>
          <SidebarGroup>
            <Destinations/>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <Button variant="outline">Settings</Button>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
};

export default HomeLayout;
