// Interface for Post Properties
export interface PostProps {
  userId: number;
  id: number;
  title: string;
  body: string;
}

// Interface for Post Data
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

// Interface for Post Modal Props
export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// Interface for User Properties
export interface UserProps {
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

// Interface for User Modal Props
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserProps) => void; // Added for User Modal
}
