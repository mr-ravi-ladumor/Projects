'use cache';
import SectionHeader from "@/components/common/section-header";
import ProductCard from "@/components/products/product-card";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { StarIcon, ArrowUpRightIcon } from "lucide-react";
import { getFeaturedProducts } from "@/lib/products/product-select";

const featuredProducts = [
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


export default async function FeaturedProducts() {
  const featuredProducts = await getFeaturedProducts();
  return (
    <section className="py-20 bg-muted/20">
      <div className="wrapper">
        <div className="flex items-center justify-between mb-8">
          <SectionHeader
            title="Featured Today"
            icon={StarIcon}
            description="Top picks from our community this week" />
          <Button variant={"outline"} asChild className="hidden sm:flex">
            <Link href="/explore">View All<ArrowUpRightIcon className="size-4" />
            </Link>
          </Button>
        </div>
        <div className="grid-wrapper">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </section>
  );
}