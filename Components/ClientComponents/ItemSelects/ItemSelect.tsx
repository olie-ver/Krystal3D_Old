"use client";
import Image from "next/image";
import Link from "next/link";

import style from "./ItemSelect.module.css";

import type { JSX } from "react";

export const ItemSelect = ({
  src,
  alt,
  href,
  title,
  prefetch,
}: {
  src: string;
  alt: string;
  href: string | { pathname: string; query: any };
  title: string;
  prefetch: boolean | undefined;
}): JSX.Element => {
  return (
    <Link className={style.Select} href={href} prefetch={prefetch}>
      <div className={style.Item}>
        <Image
          className={style.Preview}
          src={src}
          alt={alt}
          sizes="inherit"
          fill
          data-icon
          loading="lazy"
        ></Image>
        <p className={style.Title}>{title}</p>
      </div>
    </Link>
  );
};

export const ItemMenu = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className={style.MaterialContainer}>
      <br />
      <div className={style.ItemSelect}>{children}</div>
    </div>
  );
};
