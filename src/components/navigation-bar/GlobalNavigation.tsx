"use client";

import Link from "next/link";
import { Item, demos } from "../../lib/Routes";
import { useState } from "react";
import { XMarkIcon } from "@heroicons/react/24/solid";
import clsx from "clsx";
import { useSelectedLayoutSegment } from "next/navigation";
import { RectangleStackIcon } from "@heroicons/react/20/solid";
import { listSocialMedia } from "../../lib/contact";
import IconComponent from "../../ui/component-icon";

export function GlobalNav() {
  const [isOpen, setIsOpen] = useState(false);
  const close = () => setIsOpen(false);
  return (
    <div className="fixed top-0 z-[9999] flex w-full flex-col border-b border-gray-800 bg-black lg:bottom-0 lg:z-auto lg:w-72 lg:border-b-0 lg:border-r lg:border-gray-800">
      <div className="flex h-14 items-center px-4 py-4 lg:h-auto">
        <Link
          href="/"
          className="group flex w-full items-center gap-x-2.5"
          onClick={close}
        >
          <p className="h-auto w-full h text-gray-300 hover:text-gray-400 transition-all text-xl lg:text-3xl">
            Website Portfolio
          </p>
        </Link>
        <button
          type="button"
          className="group absolute right-0 top-0 flex h-14 items-center gap-x-2 px-4 lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          <div className="font-medium text-gray-100 group-hover:text-gray-400">
            Menu
          </div>
          {isOpen ? (
            <XMarkIcon className="block w-6 text-gray-400" />
          ) : (
            <RectangleStackIcon className="block w-6 text-gray-400" />
          )}
        </button>
      </div>
      <div
        className={clsx("overflow-y-auto lg:static lg:block", {
          "fixed inset-x-0 bottom-0 top-14 mt-px bg-black": isOpen,
          hidden: !isOpen,
        })}
      >
        <nav className="space-y-6 px-2 pt-5">
          {demos.map((section) => {
            return (
              <div key={section.name}>
                <div className="mb-2 px-3 text-xs font-semibold uppercase tracking-wider text-gray-400/80">
                  <div>{section.name}</div>
                </div>
                <div className="space-y-1">
                  {section.items.map((item) => (
                    <GlobalNavItem item={item} key={item.slug} close={close} />
                  ))}
                </div>
              </div>
            );
          })}
        </nav>
        <ul className="flex items-center ml-5 mt-3">
          {listSocialMedia.social.map((media) => (
            <li key={media.name}>
              <a
                href={media.link}
                target="_blank"
                className="w-9 h-9 mr-3 rounded-full flex justify-center items-center border text-gray-300 border-gray-300 hover:border-primary hover:bg-primary hover:text-white"
              >
                <IconComponent>{media.logo}</IconComponent>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function GlobalNavItem({
  item,
  close,
}: {
  item: Item;
  close: () => false | void;
}) {
  const segment = useSelectedLayoutSegment();
  const isActive = item.slug === segment;

  return (
    <Link
      onClick={close}
      href={`/${item.slug}`}
      className={clsx(
        "block rounded-md px-3 py-2 text-sm font-medium hover:text-gray-300",
        {
          "text-gray-400 hover:bg-gray-800": !isActive,
          "text-white": isActive,
        }
      )}
    >
      {item.name}
    </Link>
  );
}
