"use client";
import { Product } from "@/payload-types";
import { Button } from "./ui/button";
import { useEffect, useState } from "react";
import { useCart } from "@/hooks/use-cart";

const AddToCartButton = ({ product }: { product: Product }) => {
  const { addItem } = useCart();
  const [isSuccess, setIsSuccess] = useState<boolean>(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSuccess(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, [isSuccess]);

  return (
    <Button
      size="lg"
      className="w-full"
      onClick={() => {
        addItem(product);
        setIsSuccess(true);
      }}
    >
      {isSuccess ? "Added" : "Add to Cart"}
    </Button>
  );
};

export default AddToCartButton;
