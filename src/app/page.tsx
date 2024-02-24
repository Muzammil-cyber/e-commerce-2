import MaxWidthWrapper from "@/components/MaxWidthWrapper";
import { Button, buttonVariants } from "@/components/ui/button";
import { ArrowDownToLine, CheckCircle, Leaf } from "lucide-react";
import Link from "next/link";

const perks = [
  {
    name: "Instant delivery",
    Icon: ArrowDownToLine,
    description: "Get your assets delivered instantly after purchase.",
  },
  {
    name: "Guaranteded Quality",
    Icon: CheckCircle,
    description: "Every asset is verified by our team to ensure quality.",
  },
  {
    name: "For the Planet",
    Icon: Leaf,
    description: "We plant a tree for every asset sold on our platform.",
  },
];

export default function Home() {
  return (
    <>
      <MaxWidthWrapper>
        <div className="py-20 mx-auto text-center flex flex-col items-center max-w-3xl">
          <h1 className="text-4xl font-bold tracking-tight">
            Your marketplace for high-quality{" "}
            <span className=" text-blue-600">digital asssets.</span>
          </h1>
          <p className="mt-6 text-lg max-w-prose text-muted-foreground">
            Welcome to DigitalHippo. Every assest on our platform is verified by
            oue team to ensure our higest quality standards.
          </p>
          <div className="flex -flex-col sm:flex-auto gap-4 mt-0">
            <Link href="/product" className={buttonVariants()}>
              Browse Trending
            </Link>
            <Button variant={"ghost"}>Our qualtity promise &rarr;</Button>
          </div>
        </div>
        {/* TODO: List Products */}
      </MaxWidthWrapper>
      <section className="border-t border-gray-200 bg-gray-50">
        <MaxWidthWrapper className="py-20">
          <div className="grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-6 lg:gap-y-0">
            {perks.map((perk) => (
              <div
                key={perk.name}
                className="text-center md:flex md:items-start md:text-left lg:block lg:text-center"
              >
                <div className="md:flex-shrink-0 flex justify-center">
                  <div className="h-16 w-16 flex items-center justify-center rounded-full bg-blue-100 text-blue-900">
                    {<perk.Icon className="w-1/3 h-1/3" />}
                  </div>
                </div>
                <div className="mt-6 md:ml-4 md:mt-0 lg:ml-0 lg:mt-6">
                  <h3 className="text-base font-medium text-gray-900">
                    {perk.name}
                  </h3>
                  <p className="mt-3 text-sm text-muted-foreground">
                    {perk.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </MaxWidthWrapper>
      </section>
    </>
  );
}
