import Button from '../../../global/Button';

function FormContact() {
    return (
        <form className="flex flex-row items-center gap-6 h-10 font-special text-xs">
            <input
                className="h-8 p-5 leading-6 text-center border border-yellow-600 focus:outline-none focus:ring focus:ring-orange-200 "
                type="text"
                name="userfirstName"
                id="1"
                placeholder="FIRST NAME"
            />
            <input
                className="h-8 p-5 leading-6 text-center border border-yellow-600 focus:outline-none focus:ring focus:ring-orange-200 "
                type="email"
                name="useremail"
                id="2"
                placeholder="EMAIL ADDRESS"
            />
            <Button
                onClick={(e) => e.preventDefault()}
                className="border px-8 py-2 bg-[#d4b89f] leading-6 hover:ring hover:ring-orange-200 hover:outline-none"
                type="submit"
            >
                Subscribe
            </Button>
        </form>
    );
}

export { FormContact };
