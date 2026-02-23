import FeaturedProducts from '@/components/landing-page/featured-products';
import HeroSection from '@/components/landing-page/hero-section';
import RecentlyLaunchedProducts from '@/components/landing-page/recently-launched-products';
import { Suspense } from 'react';
import { LoaderIcon } from 'lucide-react';
import ProductSkeleton from '@/components/products/product-skeleton';

export default function Home() {
  return (
    <div className="">
      <HeroSection />
      <FeaturedProducts />
      <Suspense
        fallback={<ProductSkeleton />}>
        <RecentlyLaunchedProducts />
      </Suspense>
    </div>
  );
}


<div className="wrapper flex items-center gap-2">Loading...
  <LoaderIcon className="size-4 animate-spin" />
</div>