// Interface for PostData
export interface PostData {
  userId: number;
  id?: number;
  title: string;
  body: string;
}

// Interface for PostProps
export interface PostProps {
  id: number;
  userId: number;
  title: string;
  body: string;
}

// Interface for PostModalProps
export interface PostModalProps {
  onClose: () => void;
  onSubmit: (post: PostData) => void;
}

// Interface for UserData
export interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

// Interface for UserProps
export interface UserProps {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
}

// Interface for UserModalProps
export interface UserModalProps {
  onClose: () => void;
  onSubmit: (user: UserData) => void;
  onSubmit: (post: UserProps) => void;
}
