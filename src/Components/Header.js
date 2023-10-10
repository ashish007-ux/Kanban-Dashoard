import {React, useState,useEffect,useRef  }from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faSliders,faChevronDown } from '@fortawesome/free-solid-svg-icons';
import '../Css/Header.css';
import Display from "./Display";

function Header(){
    const [Grouping, setGrouping] = useState('Status');
    const [Ordering, setOrdering] = useState('Priority');
    const [isOptionVisible, setIsOptionVisible] = useState(false);

    const handleGrouping = (event) => {
        setGrouping(event.target.value);
        localStorage.setItem('groupingValue', event.target.value);
    };

    const handleOrdering = (event) => {
        setOrdering(event.target.value);
        localStorage.setItem('orderingValue', event.target.value);
    };

    const optionRef = useRef(null);
    const toggleOptionVisibility = () => {
        setIsOptionVisible(!isOptionVisible);
    };

    const handleClickOutside = (event) => {
        if (optionRef.current && !optionRef.current.contains(event.target)) {
          setIsOptionVisible(false);
        }
    };

    useEffect(() => {
        const savedGroupingValue = localStorage.getItem('groupingValue');
        if (savedGroupingValue) {
          setGrouping(savedGroupingValue);
        }
    
        const savedOrderingValue = localStorage.getItem('orderingValue');
        if (savedOrderingValue) {
          setOrdering(savedOrderingValue);
        }
    }, []);

    useEffect(() => {
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
          document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);
      
    return (
        <>
        <div className="head">
            <div className="Display">
                <button  className="but"  onClick={toggleOptionVisibility}>
                <FontAwesomeIcon icon={faSliders} />
                    <span className="txt">Display</span>
                <FontAwesomeIcon className="aro" icon={faChevronDown} /> 
                </button> 
            </div>
            <div  ref={optionRef} className={`option ${isOptionVisible ? "visible" : ""}`}>
                <label className="label">
                    Grouping
                    <select className="selector" value={Grouping} onChange={handleGrouping}>
                        <option>Status</option>
                        <option>User</option>
                        <option>Priority</option>
                    </select>
                </label>
                <label className="label">
                    Ordering
                    <select className="selector" value={Ordering} onChange={handleOrdering}>
                        <option>Priority</option>
                        <option>Title</option>
                    </select>
                </label>
            </div>
        </div> 
        <Display Grouping={Grouping} Ordering={Ordering}></Display>
        </>
    )
}

export default Header
