import React from 'react';
import '../static/css/LoafBar.css';

function LoafBar(props) {
    const { loafArr } = props;

    return (
        <div className="LoafBar-container">
            <div className="LoafBar-list">
                {loafArr.length == 0 ? <div className="LoafBar-empty">
                    <span>Go join some Loafs!</span>
                </div> : loafArr.map(function (l) {
                    return <div className="Loaf-item">
                        <span>{l}</span>
                    </div>
                })
                }
            </div>
            <div className="LoafBar-search">
                <input type="text" className="Loaf-search-input" placeholder="Search for a Loaf" />
                <button>GO</button>
            </div>
        </div>
    )

}

export default LoafBar;