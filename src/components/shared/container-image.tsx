import { ContainerScroll } from "../ui/container-scroll-animation";
import WishingHeading from "./wishing-heading";

const ContainerImage = () => {
  return (
    <section className="px-4 ">
      <div className="flex flex-col overflow-hidden">
        <ContainerScroll
          titleComponent={
            <div className="mb-12">
              <WishingHeading />
            </div>
          }
        >
          <img
            src={`/scroll.jpg`}
            alt="hero"
            className="mx-auto w-full  rounded-2xl object-cover h-full object-left-top"
            draggable={false}
          />
        </ContainerScroll>
      </div>
    </section>
  );
};

export default ContainerImage;
