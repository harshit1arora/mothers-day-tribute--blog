import {Avatar, AvatarFallback, AvatarImage} from '@/components/ui/avatar';

interface AuthorProfileProps {
  authorName: string;
  title: string;
  imageUrl: string;
}

const AuthorProfile: React.FC<AuthorProfileProps> = ({authorName, title, imageUrl}) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold mb-2">About {authorName}</h3>
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src={imageUrl} alt="Author Avatar"/>
          <AvatarFallback>{authorName.charAt(0).toUpperCase()}{authorName.charAt(1).toUpperCase()}</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{authorName}</p>
          <p className="text-xs text-muted-foreground">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;

