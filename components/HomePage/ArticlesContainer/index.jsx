/* eslint-disable @next/next/no-img-element */
import React from "react";
import { articles } from "../../data";
import { Description, ViewMore } from "../../modules/cards";

const ArticleContainer = () => {
  return (
    <section>
      <div className="px-5 relative pb-20 flex flex-col gap-10 xl:max-w-6xl xl:mx-auto xl:px-0 xl:py-28">
        <h1 className="font-montBold text-4.5xl md:leading-large lg:text-large lg:leading-72">
          Stay in the loop <br className="hidden md:block" /> on tech topics
        </h1>

        <div className="flex gap-8 overflow-x-scroll scrollbar-hide lg:mt-10">
          {articles.map(
            ({ imageUrl, title, date, readingTime, theme, author }, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-col gap-3 hover:text-blue-primary transition-all cursor-pointer"
                >
                  <img
                    src={imageUrl}
                    alt={title}
                    className="w-175 h-107 md:w-218 md:h-132 lg:w-352 lg:h-215"
                  />
                  <p className="uppercase text-sm font-montBold">{theme}</p>
                  <div className="flex justify-around items-center lg:justify-between w-175 lg:w-352">
                    <div className="max-w-relative-11 hidden lg:block overflow-hidden whitespace-nowrap text-ellipsis">
                      <Description>{author}</Description>
                    </div>
                    <div className="w-smaller h-smaller bg-yellow-400 rounded-full" />
                    <Description>
                      <span>{date}</span>
                    </Description>
                    <div className="w-smaller h-smaller bg-yellow-400 rounded-full" />
                    <Description>
                      <span>{readingTime}</span>
                    </Description>
                  </div>

                  <h1 className="text-slg font-montBold md:w-218 lg:w-352">
                    {title}
                  </h1>
                </div>
              );
            }
          )}
        </div>

        <ViewMore title="View more blogs" />
      </div>
    </section>
  );
};

export default ArticleContainer;
