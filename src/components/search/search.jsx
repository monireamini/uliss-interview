import MyDatePicker from "../MyDatePicker";
import MyTextField from "../MyTextField";

export default function Search() {

    return (
        <>
            <div className="flex mx-auto max-w-6xl py-8 px-8 primary-background-color rounded-3xl mt-3 gap-10">
                <MyDatePicker/>
                <MyDatePicker/>
                <MyDatePicker/>
                <MyDatePicker/>
                <MyTextField/>

            </div>
        </>
    );
}
