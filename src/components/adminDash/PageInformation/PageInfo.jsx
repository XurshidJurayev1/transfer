import React from 'react';
import "./info.scss";
const PageInfo = () => {
    return (
        <div>
            <div className="col-md-12">
                <h1 className="aler alert-warning text-warning text-center">info</h1>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-lg-6">
                        <ul className="list-group list-group-light">
                            <li className="list-group-item px-3">ACC ID</li>
                            <li className="list-group-item px-3">ACC BALL</li>
                            <li className="list-group-item px-3">ACC IP_KEY</li>
                        </ul>
                    </div>
                    <div className="col-lg-6">
                        <ul className="list-group list-group-light">
                            <li className="list-group-item px-3">5134 345 556</li>
                            <li className="list-group-item px-3">5134 345 556</li>
                            <li className="list-group-item px-3">5134 345 556</li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default PageInfo;
