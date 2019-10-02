import React from 'react';
import "./SelectBrowser.css";

const SelectBrowser = (props) => {
    
    let selectElements = props.browser.selectBrowser.map( (item, index) => {
        
        return (
            <div key={index} className="app-browsers-items__item">
                <input className="app-browsers-items__item-input" readOnly checked={item.checked} type="checkbox" value={item.label}/>
                <div className="app-browsers-items__item-name">{item.label}</div> 
            </div>
        )
    });

    let selectList = React.createRef();

    let changeValue = (e) => {
        props.changeBrowser(e);
    }

    return (
        <div className="app-browsers"> 
            <div className="app-browsers__name">{props.name}</div>
            <div className="app-browsers-items" onChange={changeValue} ref={selectList}>{selectElements}</div> 
        </div> 
    )
}

export default SelectBrowser;