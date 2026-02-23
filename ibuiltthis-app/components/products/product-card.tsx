import Link from "next/link";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChevronUpIcon, ChevronDownIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { InferSelectModel } from "drizzle-orm";
import { products } from "@/db/schema";
import VotingButtons from "@/components/products/voting-buttons";
import { ProductType } from "@/types";

interface Product {
  id: number;
  name: string;
  description: string;
  tags: string[];
  votes: number;
  isFeatured: boolean;
}


export default function ProductCard({ product }: { product: ProductType }) {
  const hasVoted: boolean = false;
  return (
    <Link href={`/products/${product.slug}`} >
      <Card className="group card-hover hover:bg-primary-foreground/10 border-solid border-gray-400 min-h-45">
        <CardHeader>
          <div className="flex items-start gap-4">
            <div className="flex-1 min-w-0">
              <div className="flex items-start gap-2">
                <CardTitle className="text-lg group-hover:text-primary transition-colors" >{product.name}</CardTitle>
                {product.voteCount > 100 && <Badge
                  className="gap-1 bg-primary text-primary-foreground">Featured</Badge>}
              </div>
              <CardDescription>{product.description}</CardDescription>
            </div>
            {/* Votes Section */}
            <VotingButtons
              hasVoted={hasVoted}
              voteCount={product.voteCount}
              productId={product.id}
            />
          </div>

        </CardHeader>
        <CardFooter>
          <div className="flex items-center gap-2">
            {product.tags?.map((tag) => (
              <Badge key={tag} variant="secondary">{tag}</Badge>
            ))}
          </div>
        </CardFooter>
      </Card>
    </Link>
  );
};