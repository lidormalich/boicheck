import { FunctionComponent } from "react";
import "./loading.css";
interface LoadingProps {

}

const Loading: FunctionComponent<LoadingProps> = () => {
    return (<>
        <div className="mainload">
            <div className="load1">
                <div className="load2">
                    <div className="load3">
                        <div className="load4">
                            <div className="load5">
                                <div className="load6">
                                    {/* <i className="fa fa-google"></i>  */}
                                    {/* load */}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="fa ">Loading...</div>
    </>);
}

export default Loading;