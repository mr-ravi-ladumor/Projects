import { CalendarIcon, RocketIcon } from 'lucide-react';
import SectionHeader from '../common/section-header';
import ProductCard from '../products/product-card';
import EmptyState from '../common/empty-state';
import { getRecentlyLaunchedProducts } from '@/lib/products/product-select';

let recentlyLaunchedProducts = [
  {
    id: 1,
    name: "Product 1",
    description: "This is the description for product 1.",
    tags: ["saas", "productivity"],
    votes: 615,
    isFeatured: true,
  },
  {
    id: 2,
    name: "Product 2",
    description: "This is the description for product 2.",
    tags: ["design", "tool"],
    votes: 482,
    isFeatured: true,
  },
  {
    id: 3,
    name: "Product 3",
    description: "This is the description for product 3.",
    tags: ["marketing", "analytics"],
    votes: 389,
    isFeatured: false,
  },
  {
    id: 4,
    name: "Product 4",
    description: "This is the description for product 4.",
    tags: ["development", "api"],
    votes: 274,
    isFeatured: true,
  }
];


export default async function RecentlyLaunchedProducts() {
  const recentlyLaunchedProducts = await getRecentlyLaunchedProducts();
  return (
    <section className="py-20">
      <div className="wrapper space-y-12">
        <SectionHeader
          title='Recently Launched'
          icon={RocketIcon}
          description='Discover the latest products from our community.'
        />
        {recentlyLaunchedProducts.length > 0 ? <div className="grid-wrapper">
          {recentlyLaunchedProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div> :
          <EmptyState
            message="No products launched in the last week. Check back soon for new launches."
            icon={CalendarIcon}
          />}
      </div>
    </section>
  );
};