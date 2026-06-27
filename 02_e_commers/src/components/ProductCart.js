"use client";

import { ShoppingCart, Heart, Star } from "lucide-react";

import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export default function ProductCard({ product }) {
  return (
    <Card className="group overflow-hidden rounded-xl border transition-all duration-300 hover:shadow-lg ">
      {/* Image */}
      <div className="relative h-64 overflow-hidden p-6">
        <Button
          size="icon"
          variant="secondary"
          className="absolute right-3 top-3 z-10 rounded-full"
        >
          <Heart className="h-4 w-4" />
        </Button>

        <img
          src={product.image}
          alt={product.title}
          className="object-contain p-6 transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <CardContent className="space-y-4 p-5 ">
        <Badge variant="secondary" className="capitalize">
          {product.category}
        </Badge>

        <h3 className="line-clamp-2 text-lg font-semibold">
          {product.title.slice(0, 30)}...
        </h3>

        <p className="line-clamp-2 text-sm text-muted-foreground">
          {product.description}
        </p>

        {/* Rating */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />

            <span className="font-medium">{product.rating.rate}</span>

            <span className="text-sm text-muted-foreground">
              ({product.rating.count} reviews)
            </span>
          </div>
        </div>

        {/* Price + Button */}
        <div className="flex items-center justify-between">
          <span className="text-2xl font-bold">${product.price}</span>

          <Button size="sm">
            <ShoppingCart className="mr-2 h-4 w-4" />
            Add
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
