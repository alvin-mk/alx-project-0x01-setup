// Interface for a Post
export interface PostProps {
    userId: number;
    id: number;
    title: string;
    body: string;
  }
  
  // Interface for the PostModal component
  export interface PostData {
    userId: number;
    id?: number;
    title: string;
    body: string;
  }
  
  export interface PostModalProps {
    onClose: () => void;
    onSubmit: (post: PostData) => void;
  }
  
  // Interface for a User
  export interface Geo {
    lat: string;
    lng: string;
  }
  
  export interface Address {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: Geo;
  }
  
  export interface Company {
    name: string;
    catchPhrase: string;
    bs: string;
  }
  
  export interface UserData {
    id?: number;
    name: string;
    username: string;
    email: string;
    address: Address;
    phone: string;
    website: string;
    company: Company;
  }
  
  // Interface for the UserModal component
  export interface UserModalProps {
    onClose: () => void;
    onSubmit: (user: UserData) => void;
  }
  