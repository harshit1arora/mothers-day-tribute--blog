interface AuthorProfileProps {
  name: string;
  title: string;
  imageUrl: string;
}

const AuthorProfile: React.FC<AuthorProfileProps> = ({name, title, imageUrl}) => {
  return (
    <div className="mb-4">
      <h3 className="text-sm font-semibold mb-2">About {name}</h3>
      <div className="flex items-center space-x-2">
        <Avatar>
          <AvatarImage src={imageUrl} alt="Author Avatar"/>
          <AvatarFallback>HA</AvatarFallback>
        </Avatar>
        <div>
          <p className="text-sm font-medium">{name}</p>
          <p className="text-xs text-muted-foreground">
            {title}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AuthorProfile;
