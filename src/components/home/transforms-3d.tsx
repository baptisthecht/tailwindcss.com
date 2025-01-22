"use client";

import { motion } from "framer-motion";
import _3dTransformsImg from "./why-tailwind-css-section/3d-transforms.jpeg";

export function Transforms3d() {
  return (
    <div className="grid size-full place-content-center">
      <div className="-translate-y-4 transition duration-300 perspective-[1200px] perspective-origin-top">
        <motion.img
          initial={{
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          }}
          whileInView={{
            rotateX: 30,
            rotateY: -5,
            rotateZ: 15,
          }}
          whileHover={{
            rotateX: 0,
            rotateY: 0,
            rotateZ: 0,
          }}
          viewport={{
            margin: "-400px 0px -400px 0px",
          }}
          alt=""
          src={_3dTransformsImg.src}
          className="absolute inset-0 size-82 rounded-2xl shadow-2xl outline outline-gray-950/5 transition duration-300 transform-3d"
        />
        <div className="col-start-1 row-start-1 size-82 rounded-2xl bg-gray-950/5 p-2 inset-ring shadow-inner inset-ring-gray-950/5 dark:bg-white/10 dark:inset-ring-white/10">
          <div className="size-full rounded-lg outline outline-gray-950/10 outline-dashed"></div>
        </div>
      </div>
    </div>
  );
}