import '../../assets/styles/style.css';
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCar, faHome, faComment, faBell, faGear} from '@fortawesome/free-solid-svg-icons';
import avatarPic from '../../assets/images/_D1A8546-min-min-min-min.jpg';
import ButtonItems from "../buttonItems";

export default function Sidebar() {

    return (
        <>
            <div className="fixed h-full left-0 primary-background-color" style={{width: 90}}>
                <div className="flex flex-col flex-nowrap h-full">
                    <button className="flex justify-center items-center mt-3 basis-1/12">
                        <div className="border sidebar-border-color rounded-full p-4" style={{width: 62,height:62}}>
                            <FontAwesomeIcon icon={faCar} className="sidebar-icon"/>
                        </div>
                    </button>
                    <div className="flex flex-col basis-5/6 pt-12">
                        <ButtonItems icon={faHome} active={true}/>
                        <ButtonItems icon={faCar}/>
                        <ButtonItems icon={faComment}/>
                        <ButtonItems icon={faBell}/>
                    </div>
                    <div className="flex justify-center flex-col items-center mb-4">
                        <ButtonItems icon={faGear}/>
                        <div>
                            <img className="h-12 w-12 rounded-full" src={avatarPic} alt="avatar"/>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
