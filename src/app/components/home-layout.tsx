'use client';

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarInset,
  SidebarTrigger,
  SidebarProvider,
} from '@/components/ui/sidebar';
import AuthorProfile from '@/app/components/ui/author-profile';
import SearchBar from '@/components/ui/search-bar';
import WhereToNext from '@/app/components/ui/where-to-next'; // Corrected import
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

  return (
    <SidebarProvider>
      <SidebarInset>
        <div className="md:hidden">
          <SidebarTrigger />
        </div>
        <div className="md:block">
          {children}
        </div>
      </SidebarInset>
      <Sidebar>
        <SidebarHeader>
          <SearchBar articles={articles} onSearch={() => {}}/>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <AuthorProfile authorName="Harshit Arora" title="Passionate about sharing tribute stories." imageUrl="https://picsum.photos/50/50"/>
          </SidebarGroup>
          <SidebarGroup>
            <WhereToNext />
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

