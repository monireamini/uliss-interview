import {
    faBolt,
    faCar,
    faGasPump,
    faLocationDot,
    faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import car1 from "../../assets/images/1.png";
import car2 from "../../assets/images/2.png";
import car4 from "../../assets/images/4.png";
import car5 from "../../assets/images/5.png";
import car6 from "../../assets/images/6.png";
import car7 from "../../assets/images/7.png";
import {useState} from "react";
import classNames from "classnames";
import Preview from "../preview/preview";

const products = [
    {
        id: 1,
        name: 'Earthen Bottle',
        href: '#',
        price: '$48',
        imageSrc: car1,
        imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
        id: 2,
        name: 'Nomad Tumbler',
        href: '#',
        price: '$35',
        imageSrc: car2,
        imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
        id: 3,
        name: 'Focus Paper Refill',
        href: '#',
        price: '$89',
        imageSrc: car5,
        imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
        id: 4,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: car4,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 5,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: car6,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
        id: 6,
        name: 'Machined Mechanical Pencil',
        href: '#',
        price: '$35',
        imageSrc: car7,
        imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
]

export default function Card() {

    const [showPreview] = useState(true);

    return (
        <div className="flex">
            <div className={classNames("flex basis-full", {"basis-2/3": showPreview})}>
                <div className="mx-auto max-w-2xl px-4 py-12 sm:px-12 sm:py-12 lg:max-w-7xl lg:px-12">
                    <h2 className="gray-color mb-3">Active Car in ...</h2>
                    <div
                        className={classNames("grid grid-cols-1 gap-x-5 gap-y-5 xl:gap-x-5", {"grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3": showPreview}, {"sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": !showPreview})}>
                        {products.map((product) => (
                            <a key={product.id} href={product.href}
                               className="group primary-background-color py-5 rounded-3xl px-4">
                                <div
                                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-color font-bold">Tesla Model X</h3>
                                    <div className="text-colors">
                                        <div className="bold text-color font-bold font-size-24">400$ <span
                                            className="gray-color font-size-18">/Day</span></div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <h3 className="text-color font-bold">2021</h3>
                                    <div className="gray-color">
                                        <h3><FontAwesomeIcon className="gray-color pr-1" icon={faLocationDot}/>GE,TBLIAISIS
                                        </h3>
                                    </div>
                                </div>
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full object-cover object-center group-hover:opacity-75"
                                    style={{height: 180, objectFit: "contain"}}
                                />
                                <div className="flex justify-around">
                                    <div>
                                        <FontAwesomeIcon className="item-property purple-color" icon={faBolt}/>
                                        <p className="flex justify-center gray-color font-size-13">Gas</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className="item-property purple-color" icon={faGasPump}/>
                                        <p className="flex justify-center gray-color font-size-13">Electric</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className="item-property red-white-color" icon={faStopwatch}/>
                                        <p className="flex justify-center gray-color font-size-13">Time</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className="item-property yellow-color" icon={faCar}/>
                                        <p className="flex justify-center gray-color font-size-13">6 Speed</p>
                                    </div>
                                </div>
                            </a>
                        ))}
                    </div>
                    {/*{showPreview && (*/}
                    {/*)}*/}
                </div>
            </div>
            {showPreview && (
                <>
                    <Preview/>
                </>
            )}
        </div>
    )
}
