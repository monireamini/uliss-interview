import MyDatePicker from "../MyDatePicker";
import MyTextField from "../MyTextField";
import MySelect from "../MySelect";
import { useSelector } from "react-redux";

export default function Search() {
    const data = useSelector((state) => state.data.data);

    return (
        <>
            <div className="flex mx-auto max-w-6xl py-8 px-8 primary-background-color rounded-3xl mt-3 gap-10">
                <MyDatePicker/>
                <MyDatePicker/>
                <MyDatePicker/>
                <MyTextField/>
                <MySelect name="city" value={data}/>
            </div>
        </>
    );
}
