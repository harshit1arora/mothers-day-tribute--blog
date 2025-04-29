
import {Avatar, AvatarFallback, AvatarImage} from './avatar';

const AuthorProfile = () => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold mb-2">Author Profile</h3>
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src="https://picsum.photos/50/50" alt="Author Avatar"/>
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">Jane Doe</p>
          <p className="text-xs text-muted-foreground">
            Passionate about sharing tribute stories.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
