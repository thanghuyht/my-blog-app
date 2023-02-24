import { FaSearch } from "react-icons/fa";
import { GiCrossMark } from "react-icons/gi";
import { Link } from "react-router-dom";
import Modal from "react-modal";
import { SetStateAction, useState } from "react";

import IconsMenu from "../../global/IconsMenu";

function Header() {
  // ---Modal fnc
  Modal.setAppElement("#root");
  // let subtitle: any;
  const [modalIsOpen, setIsOpen] = useState(false);
  const customStyles = {
    content: {
      top: "0",
      left: "0",
      right: "0",
      bottom: "0",
      width: "100vw",
      height: "100vh",
    },
  };
  function openModal() {
    setIsOpen(true);
  }
  // function afterOpenModal() {
  //     // references are now sync'd and can be accessed.
  //     subtitle.style.color = '#f00';
  // }
  function closeModal() {
    setIsOpen(false);
  }
  // ---end

  //---handle Input Search on Nav
  const [inputSearchValue, setInputSearchValue] = useState("");
  function handleInputSearch(value: SetStateAction<string>) {
    setInputSearchValue(value);
  }
  //---end

  return (
    <header>
      <nav className="w-full font-special fixed bg-white z-50">
        <div className="max-w-[1280px] grid grid-cols-3 gap-4 justify-between items-center h-[88px] mr-auto ml-auto px-16 text-orange-900">
          <ul className="flex gap-5">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/explore">Explore</Link>
            </li>
            <li>
              <Link to="/library">Resposive library</Link>
            </li>
          </ul>
          <span className="font-global text-[40px] text-center hover:text-blue-800 hover:duration-500">
            <Link to="/">the wordy habitat</Link>
          </span>
          <ul className="flex flex-row gap-3 leading-8  ml-auto">
            <div className="flex flex-row gap-3">
              <li>
                <Link to="/gallery">Gallery</Link>
              </li>
              <li>
                <Link to="/contact">Contact</Link>
              </li>
            </div>
            <div className="flex gap-3">
              <IconsMenu />
              <button
                className="hover:text-orange-500 hover:duration-150 text-sm"
                onClick={openModal}
              >
                <FaSearch />
              </button>
            </div>
          </ul>
        </div>
      </nav>

      <Modal
        isOpen={modalIsOpen}
        // onAfterOpen={afterOpenModal}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
        {/* <h2 ref={(_subtitle) => (subtitle = _subtitle)}>Hello</h2> */}
        <div className="bg-opacity-80 w-full h-full flex flex-col items-center justify-center gap-10 text-[#8d502e]">
          <button className="text-3xl" onClick={() => closeModal()}>
            <GiCrossMark />
          </button>
          <form action="submit" className="relative" method="get">
            <input
              className="px-6 py-4 text-xl w-[420px] border border-[#8d502e] outline-none"
              type="text"
              name="getinfor"
              id="random"
              value={inputSearchValue}
              onChange={(e) => handleInputSearch(e.target.value)}
              placeholder="TYPE & HIT ENTER"
            />
            <button
              className="block absolute right-8 top-1/2 translate-x-1/2 -translate-y-1/2 "
              type="submit"
              onClick={(e) => e.preventDefault()}
            >
              <FaSearch />
            </button>
          </form>
        </div>
      </Modal>
    </header>
  );
}

export { Header };
