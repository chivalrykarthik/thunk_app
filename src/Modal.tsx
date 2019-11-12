import React from 'react';
import ReactDOM from 'react-dom';
import { MoonLoader } from 'react-spinners';

const override: string = 'margin: 0 auto;border-color: red;';
//const override: string = 'top:70%;left:50%';

const SpinnerCmp = () => {
    return (
        <>
            <div id = "modal-content">
                <MoonLoader
                   css={override}
                    sizeUnit={"px"}
                    size={100}
                    //height={5}
                    //width={100}
                    //radius={2}
                    //margin={"2px"}
                    color={'cyan'}
                    loading={true}
                />
            </div>
        </>
    )
}
const ele: any = document.querySelector('#modal-root');
class Modal extends React.Component {
    _el = document.createElement('div');


    componentDidMount() {
        this._el.setAttribute("id", "modal-body");
        ele.appendChild(this._el);

    }
    componentWillUnmount() {
        ele.removeChild(this._el);
    }
    render() {
        return ReactDOM.createPortal(<SpinnerCmp />, this._el);
    }
}

export default Modal;