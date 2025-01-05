import HeroVideoDialog from "../ui/hero-video-dialog";

const VideoHero = () => {
  return (
    <div className="relative container py-8 max-w-5xl px-16  mx-auto">
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="/video.mp4"
        thumbnailSrc="/image-02.jpg"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
};

export default VideoHero;
