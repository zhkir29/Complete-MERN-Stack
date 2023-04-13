import { useState } from "react";
import Layout from "../Layout/Layout";
import DisplayCount from "../Counter/count";
import Buttons from "../Button3/Button";
import UpdateIncrementDecrement from "../IncreDecre/IncreDecre";
import Stroy from "../FirstClassCitizen/FirstClassCitizen";
const About = () =>{
    const [count,setCount]=useState(0)
    const [incrementValue,setIncrementValue] = useState(10);
    const [decrementValue,setDecrementValue] = useState(5);

    function increment(){
        setCount(count+incrementValue);
    }
    function decrement(){
        setCount(count-decrementValue);
    }
    function makeZero(){
        setCount(count > 0 ? count-count : count + Math.abs(count) );
    }
    function handleIncrementChange(event){
        setIncrementValue(parseInt(event.target.value));
    }

    function handleDecrementChange(event){
        setDecrementValue(parseInt(event.target.value));
    }
    const props = {incrementValue:incrementValue,
        decrementValue:decrementValue,
        handleDecrementChange:handleDecrementChange,
        handleIncrementChange:handleIncrementChange}

    return (
        <Layout>
            <h3>This is About page.</h3>
            <DisplayCount count={count}/>
            <UpdateIncrementDecrement {...props}/>
            <Buttons increment={increment} makeZero={makeZero} decrement={decrement}/>
            <Stroy storyType='photo' />
            <Stroy storyType = 'video' story = {[fetch('https://www.google.com/search?q=prothom+alo&authuser=1&sxsrf=APwXEdeM74Vo9j46GK8uGChncRNph0RoNg%3A1681303536989&source=hp&ei=8Kc2ZJfZOb-ZseMP16aDsAs&iflsig=AOEireoAAAAAZDa2AGi_aKTNpD9JeHGsnUZm1KOSeUIX&oq=protho&gs_lcp=Cgdnd3Mtd2l6EAMYADILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCABBCxAxCDATILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgUIABCABDILCAAQgAQQsQMQgwEyCwgAEIAEELEDEIMBMgsIABCKBRCxAxCDATILCAAQgAQQsQMQgwE6BwgjEOoCECc6CAguELEDEIAEOgUILhCABDoICAAQgAQQsQM6CAguEIAEELEDOhEILhCABBCxAxCDARDHARDRAzoKCC4QsQMQgAQQCjoHCAAQgAQQCjoKCAAQgAQQsQMQCjoHCC4QgAQQCjoLCC4QgAQQsQMQgwE6DQgAEIoFELEDEIMBEApQhgZYgxRgoh5oA3AAeACAAc0CiAHADZIBBzAuNS4yLjGYAQCgAQGwAQo&sclient=gws-wiz')]}/>
        </Layout>
    )
}

export default About;