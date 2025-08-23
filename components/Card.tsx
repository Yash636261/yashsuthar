import React from "react";
import Image from "next/image";
import Link from "next/link";

type CardProps = {
  title: string;
  description: string;
  image: string;
  tags: string[];
  link: string;
};

const Card = ({ title, description, image, link, tags }: CardProps) => {
  return (
    <Link href={link} target="_blank" className="group">
      <div
        // href={link}
        // target="_blank"
        className="rounded-[24px] bg-neutral-50 p-2 no-underline transition-colors hover:bg-neutral-100 dark:bg-neutral-800 dark:hover:bg-neutral-800/80 shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)] shadow-[rgba(17,24,28,0.08)_0_0_0_1px,rgba(17,24,28,0.08)_0_1px_2px_-1px,rgba(17,24,28,0.04)_0_2px_4px] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)] m-2  max-w-[1060px]"
      >
        <div className="relative mb-6 w-full rounded-[20px] shadow-[0px_1px_1px_0px_rgba(0,0,0,0.05),0px_1px_1px_0px_rgba(255,252,240,0.5)_inset,0px_0px_0px_1px_hsla(0,0%,100%,0.1)_inset,0px_0px_1px_0px_rgba(28,27,26,0.5)] dark:shadow-[0_1px_0_0_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(255,255,255,0.03)_inset,0_0_0_1px_rgba(0,0,0,0.1),0_2px_2px_0_rgba(0,0,0,0.1),0_4px_4px_0_rgba(0,0,0,0.1),0_8px_8px_0_rgba(0,0,0,0.1)] h-[320px]">
          {/* <img alt="Sick title" loading="lazy" width="200" height="200" decoding="async" data-nimg="1" className="absolute inset-0 size-full rounded-[16px] object-cover " srcset="/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FGgMiuRpa4AAoW2y%3Fformat%3Djpg%26name%3Dmedium&amp;w=256&amp;q=75 1x, /_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FGgMiuRpa4AAoW2y%3Fformat%3Djpg%26name%3Dmedium&amp;w=640&amp;q=75 2x" src="/_next/image?url=https%3A%2F%2Fpbs.twimg.com%2Fmedia%2FGgMiuRpa4AAoW2y%3Fformat%3Djpg%26name%3Dmedium&amp;w=640&amp;q=75" style="color: transparent;"> */}
          <Image
            src={image}
            alt={"Sick title"}
            width={200}
            height={200}
            unoptimized={true}
            className="absolute inset-0 size-full rounded-[16px] object-cover aspect-square "
          />
          <div className="absolute inset-0 rounded-[16px]">
            <div className="absolute inset-0 rounded-[16px] shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_#fff,0px_0px_0px_4px_rgba(0,0,0,.08)] dark:shadow-[0px_0px_0px_1px_rgba(0,0,0,.07),0px_0px_0px_3px_rgba(100,100,100,0.3),0px_0px_0px_4px_rgba(0,0,0,.08)]"></div>
            <div className="absolute inset-0 rounded-[16px] dark:shadow-[0px_1px_1px_0px_rgba(0,0,0,0.15),0px_1px_1px_0px_rgba(0,0,0,0.15)_inset,0px_0px_0px_1px_rgba(0,0,0,0.15)_inset,0px_0px_1px_0px_rgba(0,0,0,0.15)]"></div>
          </div>
        </div>
        <h3 className="mt-2 px-1 text-lg font-semibold leading-tight">
          {title}
        </h3>
        <p className="px-1 pb-2 text-sm text-neutral-500">{description}</p>
      </div>
    </Link>
  );
};

export default Card;
