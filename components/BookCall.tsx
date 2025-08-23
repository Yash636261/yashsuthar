"use client";
import React from "react";
import Cal, { getCalApi } from "@calcom/embed-react";
import { useEffect } from "react";

const BookCall = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi();
      cal("ui", {
        styles: { branding: { brandColor: "#000000" } },
        hideEventTypeDetails: false,
        layout: "month_view",
      });
    })();
  }, []);

  return (
    <section className="w-full container bg-background" id="book-call">
      <h1 className=" title text-center font-normal bg-gradient-to-b from-black to-[#888888] bg-clip-text text-transparent">
        Book a Call
      </h1>
      <div className="flex flex-col items-center justify-center space-y-10 text-center">
        <div className="w-full">
          <Cal
            calLink="yashsuthar/30min"
            style={{ width: "100%", height: "100%", overflow: "scroll" }}
            config={{
              layout: "month_view",
              hideEventTypeDetails: "false",
              styles: {
                branding: "#000000",
                borderRadius: "20px",
              },
            }}
          />
        </div>
        <p className="text-xs text-gray-500 dark:text-gray-400">
          Choose a time that works best for you. The call will be confirmed
          instantly.
        </p>
      </div>
    </section>
  );
};

export default BookCall;
