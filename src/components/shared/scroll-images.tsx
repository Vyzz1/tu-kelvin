import { motion } from "framer-motion";
import { ImagesSlider } from "../ui/images-slider";

const ScrollImage = () => {
  const images = [
    "/scroll.jpg",
    ...Array.from({ length: 8 }).map((_, i) => `/image-0${i + 1}.jpg`),
  ];

  return (
    <ImagesSlider className="h-[50rem] px-5" images={images}>
      <motion.div
        initial={{
          opacity: 0,
          y: -80,
        }}
        animate={{
          opacity: 1,
          y: 0,
        }}
        transition={{
          duration: 0.6,
        }}
        className="z-50 flex flex-col justify-center items-center"
      >
        <motion.p className="font-bold text-5xl md:text-6xl text-center bg-clip-text text-transparent bg-gradient-to-b from-neutral-50 to-neutral-400 py-4">
          05/01/2003
        </motion.p>
      </motion.div>
    </ImagesSlider>
  );
};

export default ScrollImage;
