import Slider from "react-slick";
import FormContact from "../components/FormContact";
import SliderContent from "../components/SliderContent";
import { MdPushPin } from "react-icons/md";
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
        <div className="w-[1200px] h-[500px] mx-auto bg-transparent pt-16">
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
        <div className="flex items-center justify-center text-center gap-14 w-[1200px] h-[180px] mx-auto">
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
        <div className="w-[1200px] mx-auto flex flex-row justify-center items-center">
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
        <div className="w-[1200px] mx-auto mt-6 mb-6">
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

      {/* BEGIN  SUGGEST */}
      <div>
        <div className="w-[1200px] h-[380px] mx-auto">
          <div className="mx-auto">
            <h3 className="text-center text-2xl font-special text-[#5c3f33]">
              readers are <i>loving </i> there!
            </h3>
            <div>
              <ul className="flex gap-8 items-start justify-center -mt-12">
                <li className="w-1/4 group">
                  <div className="w-[260px] h-[260px] border-8 border-[#f0e7de] rounded-full relative  ">
                    <a
                      className="block w-[220px] h-[220px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  "
                      href="https://vnexpress.net/ "
                    >
                      <img
                        className="block w-[220px] h-[220px] rounded-full"
                        src="https://i0.wp.com/thewordyhabitat.com/wp-content/uploads/2021/03/a-book-with-sticky-tabs-illustration-art.jpg?resize=450%2C450&ssl=1"
                        alt="1"
                      />
                    </a>
                    <a
                      className="hidden group-hover:flex opacity-0 group-hover:opacity-70 group-hover:transition-opacity bg-slate-50 rounded-full w-[220px] h-[220px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                      href="https://vnexpress.net/"
                    >
                      <span className=" text-center p-6">
                        30 Best Kindle Unlimited Romance Books That Will Hook
                        You In
                      </span>
                    </a>
                  </div>
                </li>
                <li className="w-1/4 group">
                  <div className="w-[260px] h-[260px] mt-24 border-8 border-[#f0e7de] rounded-full relative">
                    <a
                      className="block w-[220px] h-[220px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  "
                      href="https://vnexpress.net/ "
                    >
                      <img
                        className="block w-[220px] h-[220px] rounded-full"
                        src="https://i0.wp.com/thewordyhabitat.com/wp-content/uploads/2021/03/a-book-with-sticky-tabs-illustration-art.jpg?resize=450%2C450&ssl=1"
                        alt="1"
                      />
                    </a>
                    <a
                      className="hidden group-hover:flex opacity-0 group-hover:opacity-70 group-hover:transition-opacity bg-slate-50 rounded-full w-[220px] h-[220px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                      href="https://vnexpress.net/"
                    >
                      <span className=" text-center p-6">
                        30 Best Kindle Unlimited Romance Books That Will Hook
                        You In
                      </span>
                    </a>
                  </div>
                </li>
                <li className="w-1/4 group">
                  <div className="w-[256px] h-[256px] mt-24 border-8 border-[#f0e7de] rounded-full relative  ">
                    <a
                      className="block w-[220px] h-[220px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  "
                      href="https://vnexpress.net/ "
                    >
                      <img
                        className="block w-[220px] h-[220px] rounded-full"
                        src="https://i0.wp.com/thewordyhabitat.com/wp-content/uploads/2021/03/a-book-with-sticky-tabs-illustration-art.jpg?resize=450%2C450&ssl=1"
                        alt="1"
                      />
                    </a>
                    <a
                      className="hidden group-hover:flex opacity-0 group-hover:opacity-70 group-hover:transition-opacity bg-slate-50 rounded-full w-[220px] h-[220px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                      href="https://vnexpress.net/"
                    >
                      <span className=" text-center p-6">
                        30 Best Kindle Unlimited Romance Books That Will Hook
                        You In
                      </span>
                    </a>
                  </div>
                </li>
                <li className="w-1/4 group">
                  <div className="w-[260px] h-[260px] border-8 border-[#f0e7de] rounded-full relative  ">
                    <a
                      className="block w-[220px] h-[220px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2  "
                      href="https://vnexpress.net/ "
                    >
                      <img
                        className="block w-[220px] h-[220px] rounded-full"
                        src="https://i0.wp.com/thewordyhabitat.com/wp-content/uploads/2021/03/a-book-with-sticky-tabs-illustration-art.jpg?resize=450%2C450&ssl=1"
                        alt="1"
                      />
                    </a>
                    <a
                      className="hidden group-hover:flex opacity-0 group-hover:opacity-70 group-hover:transition-opacity bg-slate-50 rounded-full w-[220px] h-[220px] absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 items-center justify-center"
                      href="https://vnexpress.net/"
                    >
                      <span className=" text-center p-6">
                        30 Best Kindle Unlimited Romance Books That Will Hook
                        You In
                      </span>
                    </a>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* END  SUGGEST */}
    </div>
  );
}
