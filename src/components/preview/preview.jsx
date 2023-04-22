import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faBolt,
    faCar, faChartLine, faCircle, faDoorOpen,
    faGasPump,
    faLocationDot,
    faStar,
    faStopwatch, faTimesCircle,
} from "@fortawesome/free-solid-svg-icons";

export default function Preview({setShowPreview, cars, cities, carID, brands}) {
    const result = cars.find( car  => car.id === carID);

    return (
        <>
            <div className="flex width-preview py-16 pr-10 container-mobile">
                <div
                    className="mx-auto max-w-2xl py-8 px-2 lg:max-w-7xl secondary-background-color rounded-3xl w-full relative">
                    <button onClick={() => setShowPreview(false) } className="absolute top-0 right-0 gray-color font-size-24 p-3">
                        <FontAwesomeIcon icon={faTimesCircle}/>
                    </button>
                    <a href="#">
                        <div className="flex justify-center items-center">
                            <FontAwesomeIcon className="gray-color pr-1 font-size-24" icon={faLocationDot}/>
                        </div>
                        <div className="flex justify-center items-center gray-color py-3">
                            {cities.map(city => city.id == result.locationId ? city.name : '')}
                        </div>
                        <div className="rounded-3xl w-full primary-background-color">
                            <div className="flex p-2">
                                <img className="h-16 w-16 rounded-full self-center" src={result.owner.img}
                                     alt="avatar"/>
                                <div className="flex flex-col p-2 w-full">
                                    <div className="flex justify-between items-center">
                                        <div className="gray-color font-bold">
                                            {result.owner.name}
                                        </div>
                                        <div className="bold text-color font-bold font-size-24">{result.pricePerDay}$<span
                                            className="gray-color font-size-18">/Day</span></div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="gray-color font-size-13"> review:
                                            {result.numberOfReviews}
                                        </div>
                                        <div className="gray-color font-size-13">
                                            doors: {result.numOfDoors}
                                        </div>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <div className="gray-color font-size-13">
                                            seats: {result.numOfSeats}
                                        </div>
                                        <div className="gray-color font-size-16 font-bold">
                                            {result.rate}<FontAwesomeIcon className="font-size-13 px-1 blue-color"
                                                                icon={faStar}/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-3xl w-full primary-background-color mt-2">
                            <div className="flex p-2">
                                <img
                                    src={result.img}
                                    alt={result.alt}
                                    className="w-full object-cover object-center group-hover:opacity-75 p-2"
                                    style={{width: 140, objectFit: "contain"}}
                                />
                                <div className="flex flex-col p-1 w-full">
                                    <div className="text-color font-bold">{result.model}
                                    </div>
                                    <div className="gray-color font-size-13 py-1">
                                        {brands.map(brand => brand.id == result.brandId ? brand.name : '')}
                                    </div>
                                    <div className="gray-color font-size-13">
                                        <FontAwesomeIcon className="px-1" icon={faStopwatch}/>
                                        {result.oneDayRentalAvailable ? '1 day available rental car' : '1 week available rental car'}
                                    </div>
                                    <div className="gray-color font-size-13 py-1">
                                        <FontAwesomeIcon className="px-1" icon={faLocationDot}/>
                                        {cities.map(city => city.id == result.locationId ? city.name : '')}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-3xl w-full primary-background-color mt-2">

                            <div className="px-6 py-4">
                                <div className="text-color font-bold">
                                    {result.name}
                                    <span className="px-1">
                                        {brands.map(brand => brand.id == result.brandId ? brand.name : '')}
                                    </span>
                                </div>
                                <div className="flex justify-between pt-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon className="item-property purple-color" icon={result.Fuel === 'Gas' ? faBolt : faGasPump}/>
                                        <p className="flex justify-center gray-color font-size-13">{result.Fuel}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon className="item-property red-white-color"
                                                         icon={faStopwatch}/>
                                        <p className="flex justify-center gray-color font-size-13">{result.oneDayRentalAvailable ? '1 day available': '1 week available'}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon className="item-property yellow-color" icon={faCar}/>
                                        <p className="flex justify-center gray-color font-size-13">{result.speed} speed</p>
                                    </div>
                                </div>
                                <div className="flex justify-between pt-4">
                                    <div className="flex items-center">
                                        <FontAwesomeIcon className="item-property green-color" icon={faDoorOpen}/>
                                        <p className="flex justify-center gray-color font-size-13">{result.numOfDoors}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon className="item-property yellow-color" icon={faChartLine}/>
                                        <p className="flex justify-center gray-color font-size-13">{result.numOfDoors}</p>
                                    </div>
                                    <div className="flex items-center">
                                        <FontAwesomeIcon className="item-property blue-color" icon={faCircle}/>
                                        <p className="flex justify-center gray-color font-size-13">{result.Cylinder}</p>
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
                                    {result.description}
                                </p>
                            </div>
                        </div>
                    </a>
                </div>
            </div>
        </>
    )
}
