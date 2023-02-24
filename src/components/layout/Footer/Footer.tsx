import FormContact from "../../pages/components/FormContact";

export function Footer() {
  return (
    <footer className="bg-[#f0e7de]">
      <div className="mx-auto w-[1200px] pt-8">
        <div className="flex flex-row gap-4">
          <div className="w-1/3 flex flex-col text-center">
            <h2 className="text-3xl mb-6">support the habitat</h2>
            <ul>
              <li className="mb-9">
                <a
                  className=" bg-[#d4b89f] px-6 py-3"
                  href="https://motchill.tv/"
                >
                  Buy me a coffee
                </a>
              </li>
              <li className="mb-9">
                <a
                  className=" bg-[#d4b89f] px-6 py-3"
                  href="https://motchill.tv/"
                >
                  Buy a book
                </a>
              </li>
              <li className="mb-9">
                <a
                  className=" bg-[#d4b89f] px-6 py-3"
                  href="https://motchill.tv/"
                >
                  Buy thousand books
                </a>
              </li>
              {/* <li>
                            <Button
                                className="  mb-8 px-6 py-4 leading-10 border border-red-200 "
                                onClick={() => alert('hihi')}
                            >
                                Buy thousand books
                            </Button>
                        </li> */}
            </ul>
          </div>
          <div className="w-3/5 flex justify-center">
            <div>
              <h2 className="text-3xl text-center mb-3">
                join the inner circle
              </h2>
              <p className="text-center mb-3">
                for exclusive curated content & access to the resource library
              </p>
              <FormContact />
            </div>
          </div>
          <div className="w-1/3 ">
            <h2 className="text-2xl text-red-900 mb-3">
              some more amazing blogs
            </h2>
            <ul className="text-center">
              <li className="text-[#8d502] hover:text-red-600">
                <a href="https://vnexpress.net/">Pretty Little Scribbles</a>
              </li>
              <li className="text-[#8d502] hover:text-red-600">
                <a href="https://vnexpress.net/">Stuck in Fiction</a>
              </li>
              <li className="text-[#8d502] hover:text-red-600">
                <a href="https://vnexpress.net/">The Perks of Being Noura</a>
              </li>
              <li className="text-[#8d502] hover:text-red-600">
                <a href="https://vnexpress.net/">Leosthetics</a>
              </li>
              <li className="text-[#8d502] hover:text-white">
                <a href="https://vnexpress.net/">Ally Writes Things</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </footer>
  );
}
