import ImageRouder from '../ImageRouder';

function SliderContent() {
    return (
        <div className="w-[1200px] h-[500px] font-global  text-orange-900 bg-transparent">
            <div className="grid grid-flow-col justify-center items-center w-[1200px] h-[500px] gap-60">
                <div className=" w-[400px] h-full">
                    <div className="h-[500px] border-8 border-white rounded-t-full">
                        <ImageRouder />
                    </div>
                </div>
                <div className="w-[400px] h-auto md:w-[400px] md:h-[300px]">
                    <div>
                        <p className="mb-6 uppercase">january 11, 2023</p>
                        <h1 className="text-5xl leading-normal text-inherit mb-8">Minh them dc lam viec qua di</h1>
                        <a href="https://vnexpress.net/" target="_blank" rel="noreferrer" className="uppercase">
                            READ THE POST
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}

export { SliderContent };
