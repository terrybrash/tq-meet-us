"use client";

import { Fragment, useEffect, useRef, useState } from "react";
import { Logo } from "./logo";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      if (!containerRef.current) {
        return;
      }
      const el = containerRef.current;
      el.scrollLeft += e.deltaY * 1.5;
      console.log(
        "progress",
        (el.scrollLeft + el.clientWidth) / el.scrollWidth
      );
    };
    window.addEventListener("wheel", handleWheel);
    return () => {
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  // useEffect(() => {
  //   const scroller = scrollRef.current;
  //   if (!scroller) {
  //     return;
  //   }

  //   const container = containerRef.current;
  //   if (!container) {
  //     return;
  //   }

  //   // const handleWheel = (e: WheelEvent) => {
  //   //   if (Math.abs(e.deltaY) > Math.abs(e.deltaX)) {
  //   //     scroller.scrollLeft += e.deltaY * 2;
  //   //     e.preventDefault();
  //   //   }
  //   // };
  //   // scroller.addEventListener("wheel", handleWheel, { passive: false });
  //   // return () => {
  //   //   scroller.removeEventListener("wheel", handleWheel);
  //   // };

  //   const handleScroll = () => {
  //     container.style.transform = `translateX(${-scroller.scrollTop}px)`;
  //     console.log("scroll");
  //   };
  //   scroller.addEventListener("scroll", handleScroll);
  //   return () => {
  //     scroller.removeEventListener("scroll", handleScroll);
  //   };
  // }, []);

  // useEffect(() => {
  //   const container = containerRef.current;
  //   if (!container) {
  //     return;
  //   }

  //   const observer = new ResizeObserver((entries) => {
  //     for (const entry of entries) {
  //       console.log("Resized:", entry.target, entry.contentRect);
  //       setWidth(entry.contentRect.width);
  //     }
  //   });

  //   observer.observe(container, { box: "device-pixel-content-box" });

  //   return () => {
  //     observer.disconnect();
  //   };
  // }, []);

  function person(
    name: string,
    image: number
  ): { name: string; image: number } {
    return {
      name,
      image,
    };
  }

  const teams = [
    {
      name: "Investment Team",
      anchor: "investment-team",
      members: [
        person("Andrew Marks", 1),
        person("Schuster Tanger", 2),
        person("Jana Iris", 3),
        person("Alexis Vitenas", 4),
        person("Elisabeth Rülke", 5),
      ],
    },
    {
      name: "Operating Executives",
      anchor: "operating-executives",
      members: [
        person("Michael Kilberry", 6),
        person("Finbarr Timbers", 7),
        person("Rajiv Swamy", 8),
        person("Elliot Graebert", 9),
        person("Josh Epstein", 10),
      ],
    },
    {
      name: "Infrastructure",
      anchor: "infrastructure",
      members: [
        person("Anna Gomez", 11),
        person("Brooke Kilgallen", 12),
        person("Olivia Bastianich", 13),
      ],
    },
  ];

  return (
    <>
      {/* <div ref={scrollRef} className="absolute top-0 left-0 h-4/5 overflow-y-scroll">
        <div className="bg-red-300 w-50" style={{ height: `${width}px` }}></div>
      </div> */}
      {/* <div className="absolute w-10 h-svh bg-red-200"></div> */}
      <div className="text-sm my-6 space-y-6 shrink-0 grow-0">
        <Logo className="mx-auto"></Logo>
        <div className="flex justify-between underline">
          <div>Companies.</div>
          <div>Meet Us.</div>
          <div>About Us.</div>
        </div>
        <p className="text-xs">
          TQ Ventures is led by longtime friends Schuster Tanger and Andrew
          Marks, who share a passion for investing and a vision to build a fund
          on their own terms. We’re a tight-knit team with diverse career arcs,
          shared values, and an obsession with what we do.
        </p>
      </div>
      <div ref={containerRef} className="company">
        {teams.map((team, ti) => (
          <div key={ti} className="team" id={team.anchor}>
            <a className="team-name">{team.name}</a>
            <div className="team-members">
              {team.members.map((member, ii) => (
                <div
                  key={ii}
                  className="headshot"
                  style={{
                    backgroundImage: `url("/${member.image}.avif")`,
                  }}
                >
                  <div className="socials">
                    <div>{member.name}</div>
                    <p className="text-gray-500">
                      <span className="underline">LI</span> <span>-</span>{" "}
                      <span className="underline">X</span>
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

// <div className="card" key={i}>
// </div>
