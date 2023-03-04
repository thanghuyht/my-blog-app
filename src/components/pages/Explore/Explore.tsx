import Category from "../components/Category";
import Product from "../components/Product";

export function Explore() {
  return (
    <div className="pt-40">
      <div>
        <h2 className="font-special text-4xl text-center mb-24">
          explore the different corners of <i>the wordy habitat</i>
        </h2>
        <div className="max-w-6xl mx-auto">
          <div className="text-center relative h-[740px]">
            <h3 className="bg-[#f0e7de] pt-16 pb-96  font-special text-2xl">
              the bookish {/*category_name*/} corner
            </h3>
            <div className="absolute top-40 px-6 w-[1080px] h-auto left-1/2 -translate-x-1/2  ">
              <Category />
            </div>
          </div>
          <div className="text-center relative h-[740px]">
            <h3 className="bg-[#f0e7de] pt-16 pb-96  font-special text-2xl">
              the bookish {/*category_name*/} corner
            </h3>
            <div className="absolute top-40 px-6 w-[1080px] h-[480px] left-1/2 -translate-x-1/2  ">
              <Category />
            </div>
          </div>
          <div className="text-center relative h-[740px]">
            <h3 className="bg-[#f0e7de] pt-16 pb-96  font-special text-2xl">
              the bookish {/*category_name*/} corner
            </h3>
            <div className="absolute top-40 px-6 w-[1080px] h-[480px] left-1/2 -translate-x-1/2  ">
              <Category />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
