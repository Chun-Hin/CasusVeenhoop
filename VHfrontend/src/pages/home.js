import React from "react";

function Contact() {
    return(
        <div className="h-screen w-full py-16 text-white px-4 text-center flex flex-col justify-center items-center" id="Contact">
            <div className="max-w-[1240px] mx-auto">
                <div className="lg:col-span-2 my-4 items-center text-center">
                    <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-2">Dou you want to contact me?</h1>
                    <p className="max-w-[450px] md:ml-4 my-4">You can always contact my by sending me an e-mail. Whether you have a question or just want to say hi, I’ll try my best to get back to you!</p>
                    <a href="mailto:chunhin.ip05@gmail.com" className="bg-[#00df9a] text-black rounded-lg font-medium w-[200px] mt-8 px-5 py-3">Say Hi!</a>
                </div>
            </div>
        </div>
    );
}

export default Contact