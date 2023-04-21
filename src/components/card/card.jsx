import {
    faBolt,
    faCar,
    faGasPump,
    faLocationDot,
    faStopwatch,
} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {useState} from "react";
import classNames from "classnames";
import Preview from "../preview/preview";
import {useSelector} from "react-redux";

export default function Card() {
    const cars = useSelector((state) => state.data.cars);
    const cities = useSelector((state) => state.data.cities);
    const brands = useSelector((state) => state.data.brands);
    const [carID, setCarID] = useState()
    const [showPreview, setShowPreview] = useState(false);

    function handleClick(id) {
        setShowPreview(true);
        setCarID(id);
    }

    return (
        <div className="flex">
            <div className={classNames("flex basis-full", {"basis-2/3": showPreview})}>
                <div className="mx-auto max-w-2xl px-4 py-12 sm:px-12 sm:py-12 lg:max-w-7xl lg:px-12">
                    <h2 className="gray-color mb-3">Active Car in ...</h2>
                    <div
                        className={classNames("grid grid-cols-1 gap-x-5 gap-y-5 xl:gap-x-5", {"grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3": showPreview}, {"sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4": !showPreview})}>
                        {cars.map((car) => (
                            <button key={car.id} onClick={() => handleClick(car.id)}
                               className="group primary-background-color py-5 rounded-3xl px-4">
                                <div
                                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                                </div>
                                <div className="flex justify-between items-center">
                                    <h3 className="text-color font-bold">{car.model}<span className="px-1">{brands.map(brand => brand.id == car.brandId ? brand.name : '')}</span></h3>
                                    <div className="text-colors">
                                        <div className="bold text-color font-bold font-size-24">{car.pricePerDay}$ <span
                                            className="gray-color font-size-18">/Day</span></div>
                                    </div>
                                </div>
                                <div className="flex justify-between">
                                    <h3 className="text-color font-bold">{car.productionYear}</h3>
                                    <div className="gray-color">
                                        <h3><FontAwesomeIcon className="gray-color pr-1" icon={faLocationDot}/>{cities.map(city => city.id == car.locationId ? city.name : '') }
                                        </h3>
                                    </div>
                                </div>
                                <img
                                    src={car.img}
                                    alt={car.name}
                                    className="w-full object-cover object-center group-hover:opacity-75"
                                    style={{height: 180, objectFit: "contain"}}
                                />
                                <div className="flex justify-around">
                                        <div>
                                            <FontAwesomeIcon className="item-property purple-color" icon={car.Fuel === 'Gas' ? faGasPump : faBolt}/>
                                            <p className="flex justify-center gray-color font-size-13">{car.Fuel}</p>
                                        </div>

                                    <div>
                                        <FontAwesomeIcon className="item-property red-white-color" icon={faStopwatch}/>
                                        <p className="flex justify-center gray-color font-size-13">{car.oneDayRentalAvailable ? '1 day available': '1 week available'}</p>
                                    </div>
                                    <div>
                                        <FontAwesomeIcon className="item-property yellow-color" icon={faCar}/>
                                        <p className="flex justify-center gray-color font-size-13">{car.speed} speed</p>
                                    </div>
                                </div>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
            {showPreview && (
                <>
                    <Preview setShowPreview={setShowPreview} cars={cars} cities={cities} carID={carID}  brands={brands}/>
                </>
            )}
        </div>
    )
}
