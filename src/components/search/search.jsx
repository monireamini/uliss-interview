import MyDatePicker from "../MyDatePicker";
import MyTextField from "../MyTextField";
import MySelect from "../MySelect";
import { useSelector } from "react-redux";

export default function Search() {
    const cars = useSelector((state) => state.data.cars);
    // const [category, setCategory] = useState();
    console.log(cars)
    return (
        <>
            <div className="m-4">
                <div className="flex flex-wrap mx-auto max-w-6xl py-8 px-8 primary-background-color rounded-3xl mt-3 gap-10 m-4">
                    <MyDatePicker/>
                    <MyDatePicker/>
                    <MyDatePicker/>
                    <MyTextField/>
                    <MySelect name="city"/>
                </div>
            </div>
        </>
    );
}
