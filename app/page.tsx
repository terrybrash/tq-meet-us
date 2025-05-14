"use client";

import { Fragment, useEffect, useRef, useState } from "react";

export default function Home() {
  const containerRef = useRef<HTMLDivElement>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [width, setWidth] = useState(0);

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

  const teams = [
    { name: "Investment Team", images: [1, 2, 3, 4, 5] },
    { name: "Operating Executives", images: [6, 7, 8, 9] },
    { name: "Infrastructure", images: [10, 11, 12, 13] },
  ];

  return (
    <>
      {/* <div ref={scrollRef} className="absolute top-0 left-0 h-4/5 overflow-y-scroll">
        <div className="bg-red-300 w-50" style={{ height: `${width}px` }}></div>
      </div> */}
      {/* <div className="absolute w-10 h-svh bg-red-200"></div> */}
      <div className="text-sm p-10 space-y-10 shrink-0 grow-0">
        <p>
          TQ Ventures is led by longtime friends Schuster Tanger and Andrew fund
          on their own terms. We’re a tight-knit team with diverse career arcs,
          shared values, and an obsession with what we do.
        </p>
        {/* <p>
            TQ Ventures is led by longtime friends Schuster Tanger and Andrew
            Marks, who share a passion for investing and a vision to build a
            fund on their own terms. We’re a tight-knit team with diverse career
            arcs, shared values, and an obsession with what we do.
          </p> */}
      </div>
      <div className="company">
        {teams.map((team, ti) => (
          <div key={ti} className="team">
            <div className="team-name">{team.name}</div>
            <div className="team-members">
              {team.images.map((image, ii) => (
                <div
                  key={ii}
                  className="headshot"
                  style={{
                    backgroundImage: `url("/${image}.avif")`,
                  }}
                >
                  <div className="socials">
                    <div>First Middle Last</div>
                    <div className="opacity-70">LI - X</div>
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
