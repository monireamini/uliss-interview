import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import classNames from 'classnames';

export default function ButtonItems({ icon, active }) {
    return (
        <>
            <button className={classNames("flex justify-center items-center rounded-full p-1 basis-1/12", {"mt-12 basis-1/12": active})}>
                <div className={classNames("sidebar-items rounded-full p-4", {"active": active})}>
                    <FontAwesomeIcon icon={icon} className="sidebar-icon" />
                </div>
            </button>
        </>
    )
}
