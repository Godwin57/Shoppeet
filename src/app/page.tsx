import Image from "next/image";
import Link from "next/link";
import { FaArrowRight } from "react-icons/fa";

export default function Homepage() {
    return (
        <div className="px-6 flex space-x-6">
            <div className="flex flex-col space-y-5">
                <div className="space-y-3">
                    <h1 className="text-3xl font-bold mb-6">
                        Shoppeet <span>here!!!</span>
                    </h1>
                    <p className="font-light text-xl">
                        All your favorites in one place
                    </p>
                </div>
                <p className="text-3xl">
                    Get quality products and goods from a tested, trusted and
                    reliable source
                </p>
                <Link href={"/products"}>
                    <button
                        className="flex items-center space-y-2 rounded-lg bg-black text-white py-2 px-10 text-lg font-bold
                        hover:cursor"
                    >
                        Shop now <FaArrowRight />
                    </button>
                </Link>
            </div>

            {/* <Image /> */}
            <Image
                src={"/home-appliance.jpg"}
                alt="Picture of some home appliances"
                width={800}
                height={1000}
                className="hidden lg:block"
            />
        </div>
    );
}
