import React from 'react';
import "./Pages.css";

const Pages = (props) => {
    let arr = [];
    for (let i = 1; i <= props.page.pages; i++) {
        arr.push(i);
    }
    let pages = arr.map( (item, index) => {
        return (
            <div key={index} className="app-pages__page">{item}</div>
        )
    })

    let selectPage = React.createRef();

    let change = (e) => {
        props.changePage(e);
    }

    return (
        <div className="app-pages" ref={selectPage} onClick={change}>
            {pages}
        </div>
    )
}

export default Pages;