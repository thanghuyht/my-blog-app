import { MdPushPin } from "react-icons/md";
import { HiArrowNarrowRight } from "react-icons/hi";

function Product() {
  return (
    <div className="h-[820px] bg-transparent relative">
      <img
        className="t-0 w-[500px] h-[580px] absolute left-0 top-0"
        src="https://i0.wp.com/thewordyhabitat.com/wp-content/uploads/2023/02/green-typewriter-illustration.jpg?fit=683%2C1024&ssl=1"
        alt="product"
      />
      <div className="w-[500px] h-[296px] absolute bottom-0 right-0 bg-[#f0e7de] border-8 border-white p-6">
        <div className="py-4  text-xl">
          <time>February 11, 2023 </time>
          <MdPushPin className="inline" />
          <span> Personal</span>
        </div>
        <a className="leading-8 text-3xl" href="https://vnexpress.net/">
          Two Years of TWH dot com! || Blog Revamp, Celebrating, Looking Back, &
          Looking Forward
        </a>
        <a className="block py-4" href="https://vnexpress.net/">
          read
          <span>
            {" "}
            <HiArrowNarrowRight className="inline" />
          </span>
        </a>
      </div>
    </div>
  );
}

export { Product };
