import MyDatePicker from "./MyDatePicker";
import MyTextField from "./MyTextField";
import MySelect from "./MySelect";
import { useSelector } from "react-redux";

export default function Search({cars,setCars}) {
    return (
        <>
            <div className="m-4">
                <div className="flex flex-wrap mx-auto py-8 px-8 primary-background-color rounded-3xl mt-3 gap-10 m-4">
                    <MyDatePicker/>
                    <MyDatePicker/>
                    <MyDatePicker/>
                    <MySelect name="city" setCars={setCars} cars={cars}/>
                </div>
            </div>
        </>
    );
}
