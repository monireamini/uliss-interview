import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBolt,
    faCar,
    faGasPump,
    faLocationDot,
    faStar,
    faStopwatch, faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";
import car1 from "../../assets/images/1.png";
import avatarPic from "../../assets/images/_D1A8546-min-min-min-min.jpg";

export default function Preview({setShowPreview}) {
    return (
        <>
            <div className="flex basis-1/3 py-24 pr-10">
                <div
                    className="mx-auto max-w-2xl py-8 px-2 lg:max-w-7xl secondary-background-color rounded-3xl w-full relative">
                    <button onClick={() => setShowPreview(false) } className="absolute top-0 right-0 gray-color font-size-24 p-3">
                        <FontAwesomeIcon icon={faTimesCircle}/>
                    </button>
                    <a>
                        <div className="flex justify-center items-center">
                            <FontAwesomeIcon className="gray-color pr-1 font-size-24" icon={faLocationDot}/>
                        </div>
                        <div className="flex justify-center items-center gray-color py-3">
                            GE,TBLIAISIS
                        </div>
                        <div className="rounded-3xl w-full primary-background-color">
                            <div className="flex p-2">
                                <img className="h-16 w-16 rounded-full self-center" src={avatarPic}
                                     alt="avatar"/>
                                <div className="flex flex-col p-2 w-full">
                                    <div className="flex justify-between items-center">
                                        <div className="gray-color font-bold">
                                            Alborz Moon
                                        </div>
                                        <div className="bold text-color font-bold font-size-24">400$<span
                                            className="gray-color font-size-18">/Day</span></div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="gray-color font-size-13">
                                            front-end-developer
                                        </div>
                                        <div className="gray-color font-size-13">
                                            $184 essentials
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="gray-color font-size-13">
                                            34 tips join in the class
                                        </div>
                                        <div className="gray-color font-size-16 font-bold">
                                            5.0<FontAwesomeIcon className="font-size-13 px-1 blue-color"
                                                                icon={faStar}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-3xl w-full primary-background-color mt-2">
                            <div className="flex p-2">
                                <img
                                    src={car1}
                                    alt={car1}
                                    className="w-full object-cover object-center group-hover:opacity-75 p-2"
                                    style={{width: 140, objectFit: "contain"}}
                                />
                                <div className="flex flex-col p-1 w-full">
                                    <div className="text-color font-bold">Tesla Model X
                                    </div>
                                    <div className="gray-color font-size-13 py-1">
                                        229 Xd dive
                                    </div>
                                    <div className="gray-color font-size-13">
                                        <FontAwesomeIcon className="px-1" icon={faStopwatch}/>
                                        1 day available rental car
                                    </div>
                                    <div className="gray-color font-size-13 py-1">
                                        <FontAwesomeIcon className="px-1" icon={faLocationDot}/>
                                        address
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-3xl w-full primary-background-color mt-2">

                            <div className="px-6 py-4">
                                <div className="text-color font-bold">Tesla Model X
                                </div>
                                <div className="flex justify-between pt-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon className="item-property purple-color" icon={faBolt}/>
                                        <p className="flex justify-center gray-color font-size-13">Gas</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon className="item-property purple-color"
                                                         icon={faGasPump}/>
                                        <p className="flex justify-center gray-color font-size-13">Electric</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon className="item-property red-white-color"
                                                         icon={faStopwatch}/>
                                        <p className="flex justify-center gray-color font-size-13">Time</p>
                                    </div>
                                </div>
                                <div className="flex justify-between pt-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon className="item-property purple-color" icon={faBolt}/>
                                        <p className="flex justify-center gray-color font-size-13">Gas</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon className="item-property yellow-color" icon={faCar}/>
                                        <p className="flex justify-center gray-color font-size-13">6 Speed</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon className="item-property yellow-color" icon={faCar}/>
                                        <p className="flex justify-center gray-color font-size-13">6 Speed</p>
                                    </div>
                                </div>
                            </div>
                            <button className="m-4 p-3 sidebar-border-color gray-color border rounded-xl">more
                            </button>
                            <div className="px-6 py-4">
                                <div className="text-color font-bold">
                                    Description
                                </div>
                                <p className="gray-color pt-1">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}
