import IconsMenu from "../../global/IconsMenu";

function About() {
  return (
    <div>
      <div className="bg-[#d4b89f]">
        <div className="max-w-screen-xl mx-auto pt-48 pb-4 text-center ">
          <h6 className="text-xl mb-6 font-special">Welcome!</h6>
          <h2 className="text-4xl leading-[64px] font-special pb-28">
            my name is sumedha. i'm an avid reader, book blogger, asian drama
            binger, and tea lover.
          </h2>
        </div>
      </div>
      {/* ----------- */}
      <div className="bg-[#f0e7de]">
        <div className="max-w-screen-xl mx-auto text-center">
          <h3 className="font-special text-2xl pt-10 mb-10">Sumedha's Story</h3>
          <div className="flex flex-row  justify-items-center ">
            <div className="px-16">
              <h2 className="font-special text-4xl mb-8">
                <i>past</i>
              </h2>
              <p className="mb-14">
                <a
                  href="https://vnexpress.net/"
                  target="_blank"
                  rel="noreferrer noopener"
                  role="link"
                  className="text-[#b07824]"
                >
                  My blogging journey
                </a>
                &nbsp;started on a random day in January 2016 with an
                (embarrassing) blog name and an anonymous persona. Since then,
                I've grown and changed my blog to grow with me.
              </p>
            </div>
            <div className="px-16">
              <h2 className="font-special text-4xl mb-8">
                <i>present</i>
              </h2>
              <p className="mb-14">
                I'm a software engineer by day and a blogger by night (and my
                eyes do NOT thank me for the screen time). I post about three
                main categories in this blog and share other musings in my{" "}
                <a
                  href="https://vnexpress.net/"
                  target="_blank"
                  rel="noreferrer noopener"
                  role="link"
                  className="text-[#b07824]"
                >
                  new letter.
                </a>
              </p>
            </div>
            <div className="px-16">
              <h2 className="font-special text-4xl mb-8">
                <i>future</i>
              </h2>
              <p className="mb-14">
                Although all the content on this blog is written by me and
                documents my passions, my aim is to maintain it as an open and
                friendly space where each post is basically a friendly chat
                between you and me
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* ---------- */}
      <div className="bg-[#faf7f5]">
        <div className="flex justify-center items-center max-w-screen-xl mx-auto ">
          <div className="w-1/2 py-9">
            <img
              className="mx-auto w-[420px] h-[600px] border-8 border-[#a87141] text-center"
              src="https://images.pexels.com/photos/1828875/pexels-photo-1828875.jpeg"
              alt="photo"
            />
            <IconsMenu
              className={[
                "text-4xl text-[#a87141] flex justify-center items-center gap-4 my-4",
              ]}
              iconHoverEffect={[
                "animate-none duration-300 hover:duration-700 hover:animate-bounce",
              ]}
            />
          </div>
          <div className="w-1/2 text-center font-special">
            <h5 className="text-xl mb-6">quick facts</h5>
            <h4 className="text-2xl mb-6 leading-10">
              I'm an organizational junkie (
              <a
                href="https://thewordyhabitat.com/how-to-write-amazing-blog-posts-using-notion/"
                target="_blank"
                rel="noreferrer noopener"
                role="link"
              >
                Notion
              </a>
              &nbsp;is my saviour to manage blogging), romance book lover, lo-fi
              music listener, and a part-time artist (
              <strong>
                <span>all the illustrations on this blog are made by me!</span>
              </strong>
              ).
            </h4>
            <h5 className="text-xl mb-6">what my friends say about me</h5>
            <h4 className="text-2xl mb-6 leading-10">
              I'm curt, decisive, put-together, and get obsessed with the most
              random things (I loved watching slime videos on Instagram at one
              point). One of my internet friends said that I'm too sane to be on
              Twitter—that line describes my personality on the internet.
            </h4>
            <hr className="block w-[2px] mx-auto border border-[#5c3f33] border-y-[20px] mb-6" />
            <h4 className="text-2xl">what about you?</h4>
          </div>
        </div>
        <div className="bg-[#d4b89f] py-10">
          <div className="max-w-screen-xl text-center">
            <h2 className="font-special text-3xl mb-10">
              support the mayor by keeping her stocked with books & tea!
            </h2>
            <ul className="pb-10">
              <li className="inline mr-10 mb-9 text-sm text-white">
                <a
                  className=" bg-[#a87141] px-6 py-2"
                  href="https://motchill.tv/"
                  target={"_blank"}
                >
                  Buy me a coffee
                </a>
              </li>
              <li className="inline mr-10 mb-9 text-sm  text-white">
                <a
                  className="bg-[#a87141] px-6 py-2"
                  href="https://motchill.tv/"
                  target={"_blank"}
                >
                  Buy a book
                </a>
              </li>
              <li className="inline mr-10 mb-9 text-sm  text-white">
                <a
                  className=" bg-[#a87141] px-6 py-2"
                  href="https://motchill.tv/"
                  target={"_blank"}
                >
                  Buy thousand books
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export { About };
