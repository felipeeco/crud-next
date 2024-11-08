export interface Menu {
  title: string;
  icon: React.ReactNode;
  href: string;
}

export interface Product {
  id    : string;
  name  : string;
  price : number;
  rating: number;
  image : string;
}