export interface SignatureDish {
  number: string;
  name: string;
  description: string;
  image: string;
}

export const signatureDishes: SignatureDish[] = [
  {
    number: '01',
    name: 'Ghee Roast Masala Dosa',
    description: 'Crisp golden dosa finished with aromatic ghee, wrapped around spiced potato masala.',
    image: 'https://images.pexels.com/photos/20422138/pexels-photo-20422138.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    number: '02',
    name: 'South Indian Meals',
    description: 'A wholesome banana-leaf thali with rice, sambar, rasam, curries, curd & a sweet.',
    image: 'https://images.pexels.com/photos/35008222/pexels-photo-35008222.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    number: '03',
    name: 'Rava Dosa',
    description: 'Lacy semolina dosa with onion, green chilli & curry leaves. Served hot off the tava.',
    image: 'https://images.pexels.com/photos/20422126/pexels-photo-20422126.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    number: '04',
    name: 'Pongal',
    description: 'Comforting rice & lentil porridge tempered with pepper, cumin, cashews & ghee.',
    image: 'https://images.pexels.com/photos/35687385/pexels-photo-35687385.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
  {
    number: '05',
    name: 'Filter Coffee',
    description: 'Authentic South Indian degree coffee — strong decoction & frothy milk in a steel tumbler.',
    image: 'https://images.pexels.com/photos/13376622/pexels-photo-13376622.jpeg?auto=compress&cs=tinysrgb&w=1200',
  },
];

export type MenuCategory =
  | 'Breakfast'
  | 'Tiffin'
  | 'Meals'
  | 'Rice & Noodles'
  | 'Beverages'
  | 'Desserts';

export interface MenuDish {
  name: string;
  description: string;
  price: number;
  category: MenuCategory;
  signature?: boolean;
}

export const menuCategories: MenuCategory[] = [
  'Breakfast',
  'Tiffin',
  'Meals',
  'Rice & Noodles',
  'Beverages',
  'Desserts',
];

export const menuDishes: MenuDish[] = [
  { name: 'Idli Vada', description: 'Steamed rice cakes & crisp lentil donuts with sambar & chutney', price: 120, category: 'Breakfast', signature: true },
  { name: 'Pongal', description: 'Rice & lentil porridge tempered with pepper, cumin & ghee', price: 140, category: 'Breakfast' },
  { name: 'Upma', description: 'Roasted semolina cooked with vegetables & curry leaves', price: 110, category: 'Breakfast' },

  { name: 'Ghee Roast Masala Dosa', description: 'Crispy dosa finished with aromatic ghee & spiced potato masala', price: 180, category: 'Tiffin', signature: true },
  { name: 'Rava Dosa', description: 'Lacy semolina dosa with onion, green chilli & curry leaves', price: 210, category: 'Tiffin' },
  { name: 'Mysore Masala Dosa', description: 'Dosa spread with spicy red chutney & potato masala', price: 190, category: 'Tiffin' },
  { name: 'Plain Dosa', description: 'Classic crisp rice & lentil crepe with coconut chutney & sambar', price: 130, category: 'Tiffin' },

  { name: 'South Indian Meals', description: 'Complete banana-leaf thali: rice, sambar, rasam, curries, curd & sweet', price: 320, category: 'Meals', signature: true },
  { name: 'Mini Meals', description: 'A lighter thali with rice, sambar, one curry, poriyal & curd', price: 220, category: 'Meals' },
  { name: 'Special Meals', description: 'Full meals with additional curry, sweet, appalam & payasam', price: 380, category: 'Meals' },

  { name: 'Burnt Garlic Fried Rice', description: 'Wok-tossed rice with smoky burnt garlic & crunchy vegetables', price: 280, category: 'Rice & Noodles' },
  { name: 'Veg Hakka Noodles', description: 'Indo-Chinese noodles tossed with vegetables & soy', price: 270, category: 'Rice & Noodles' },
  { name: 'Schezwan Fried Rice', description: 'Spicy schezwan-style fried rice with mixed vegetables', price: 290, category: 'Rice & Noodles' },

  { name: 'Filter Coffee', description: 'Traditional South Indian degree coffee in a steel tumbler', price: 60, category: 'Beverages', signature: true },
  { name: 'Masala Chai', description: 'Spiced milk tea brewed with cardamom, ginger & cloves', price: 40, category: 'Beverages' },
  { name: 'Buttermilk', description: 'Spiced churned curd with curry leaves & roasted cumin', price: 45, category: 'Beverages' },
  { name: 'Fresh Lime Soda', description: 'Refreshing lime with soda — sweet, salt or mixed', price: 55, category: 'Beverages' },

  { name: 'Falooda', description: 'Rose syrup, vermicelli, basil seeds, milk & ice cream with nuts', price: 160, category: 'Desserts' },
  { name: 'Gulab Jamun', description: 'Warm milk-solid dumplings soaked in rose-scented syrup', price: 90, category: 'Desserts' },
  { name: 'Rava Kesari', description: 'Semolina halwa with ghee, saffron & cashews', price: 80, category: 'Desserts' },
];

export interface PhotoStoryItem {
  label: string;
  title: string;
  image: string;
  caption: string;
}

export const photoStory: PhotoStoryItem[] = [
  {
    label: '01',
    title: 'The Food',
    image: 'https://images.pexels.com/photos/20422123/pexels-photo-20422123.jpeg?auto=compress&cs=tinysrgb&w=1000',
    caption: 'Every dish begins with whole ingredients, ground spices & batter fermented overnight.',
  },
  {
    label: '02',
    title: 'The Space',
    image: 'https://images.pexels.com/photos/279768/pexels-photo-279768.jpeg?auto=compress&cs=tinysrgb&w=1000',
    caption: 'A warm, understated dining room designed for unhurried vegetarian meals.',
  },
  {
    label: '03',
    title: 'The People',
    image: 'https://images.pexels.com/photos/6182692/pexels-photo-6182692.jpeg?auto=compress&cs=tinysrgb&w=1000',
    caption: 'The chefs & servers who make every visit feel like coming home.',
  },
];

export interface Testimonial {
  quote: string;
  name: string;
  detail: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: 'An inviting place for delicious vegetarian food, great dosa and wonderful filter coffee.',
    name: 'Ananya K.',
    detail: 'Google Review · Demo',
  },
  {
    quote: 'The South Indian meals on a banana leaf felt just like home. Warm service, clean and family-friendly.',
    name: 'Rajesh S.',
    detail: 'Google Review · Demo',
  },
  {
    quote: 'Loved the pongal and the burnt garlic fried rice. Genuinely pure veg — our go-to spot in Kilpauk now.',
    name: 'Meera I.',
    detail: 'Google Review · Demo',
  },
];

export const galleryImages = [
  'https://images.pexels.com/photos/20422121/pexels-photo-20422121.jpeg?auto=compress&cs=tinysrgb&w=1000',
  'https://images.pexels.com/photos/4331490/pexels-photo-4331490.jpeg?auto=compress&cs=tinysrgb&w=1000',
  'https://images.pexels.com/photos/20446398/pexels-photo-20446398.jpeg?auto=compress&cs=tinysrgb&w=1000',
  'https://images.pexels.com/photos/34692791/pexels-photo-34692791.jpeg?auto=compress&cs=tinysrgb&w=1000',
  'https://images.pexels.com/photos/20422133/pexels-photo-20422133.jpeg?auto=compress&cs=tinysrgb&w=1000',
  'https://images.pexels.com/photos/28107046/pexels-photo-28107046.jpeg?auto=compress&cs=tinysrgb&w=1000',
];
