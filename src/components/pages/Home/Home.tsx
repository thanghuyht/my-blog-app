import Slider from "react-slick";
import FormContact from "../components/FormContact";
import SliderContent from "../components/SliderContent";
import { HiArrowNarrowRight } from "react-icons/hi";
import Button from "../../global/Button";
import Product from "../components/Product";

export function Home() {
  var settings = {
    // dots: true,
    autoplay: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };
  return (
    <div className="pt-24">
      {/* BEGIN Slider */}
      <div className=" bg-[#f0e7de]">
        <div className="max-w-screen-xl h-[500px] mx-auto bg-transparent pt-16">
          <Slider {...settings}>
            <div>
              <SliderContent />
            </div>
            <div>
              <SliderContent />
            </div>
            <div>
              <SliderContent />
            </div>
            <div>
              <SliderContent />
            </div>
          </Slider>
        </div>
      </div>
      {/* END Slider */}

      {/* BEGIN Form contact */}
      <div className=" bg-white mt-20">
        <div className="flex items-center justify-center text-center gap-14 max-w-screen-xl h-[180px] mx-auto">
          <div className="w-1/4">
            <h2 className=" font-special text-amber-900 text-2xl mb-3">
              join the inner circle
            </h2>
            <p className="">
              for exclusive curated content & access to the resource library
            </p>
          </div>
          <FormContact />
        </div>
      </div>
      {/* END Form contact */}

      {/* BEGIN Infor */}
      <div className="bg-[#f0e7de] pt-16 pb-40">
        <div className="max-w-screen-xl mx-auto flex flex-row justify-center items-center">
          <div className="w-3/4">
            <div className="relative">
              <img
                className="w-[490px] h-[590px]"
                src="https://thewordyhabitat.com/wp-content/uploads/2022/06/collage-of-illustrations.png"
                alt="backgr"
              />
              <div className="absolute top-24 left-32 ">
                <img
                  className="w-[490px] h-[590px] border-8 border-[#f0e7de] rounded-t-full"
                  src="https://thewordyhabitat.com/wp-content/uploads/2023/02/sumedha-@-thewordyhabitat-illustration.jpg"
                  alt="avata"
                />
              </div>
            </div>
          </div>
          <div className="w-1/2 ">
            <h2 className="text-3xl mb-10 font-special">the mayor</h2>
            <p className="mb-8">
              Hi! I am Sumedha, a blogger by passion looking to share obsessions
              and create a cosy, friendly space for everyone.
            </p>
            <p className="mb-8">
              <i>The Wordy Habitat</i> is my curated comfort place where I post
              about my best obsessions—books, blogging, Kdramas, and
              organization/productivity. And I hope that it becomes a comfort
              space for you as well.
              <HiArrowNarrowRight className="inline" />
            </p>
            <Button
              className="border border-[#8d502e] bg-transparent px-12 py-4"
              href="/about"
              righticon={<HiArrowNarrowRight className="inline" />}
            >
              learn more
            </Button>
          </div>
        </div>
      </div>
      {/* END Infor */}

      {/* BEGIN collection */}
      <div>
        <div className="max-w-screen-xl mx-auto mt-6 mb-6">
          <div className="grid grid-cols-2 gap-10 py-12">
            <Product />
            <Product />
            <Product />
            <Product />
          </div>
          <div className="mt-4 mb-24 text-center">
            <Button
              className="ml-auto w-52 border border-[#8d502e] bg-transparent px-12 py-4 text-center mr-4"
              href="/about"
            >
              go back
            </Button>
            <Button
              className=" w-52 border border-[#8d502e] bg-transparent px-12 py-4 text-center ml-4"
              href="/about"
            >
              next page
            </Button>
          </div>
        </div>
      </div>
      {/* END collection */}
    </div>
  );
}
