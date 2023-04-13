import { useEffect, useState } from "react";
import Layout from "../Layout/Layout";

const Help = () =>{
    const [name,setState] = useState({name:''})

    useEffect(()=>{
        setTimeout(function(name){
            setState({name:'Md.Zakir Hossain'})
        },5000)
    },[])

    const data = [{
        name:'Abdullah Turyky',
        email: 'turky@test.com'
    },{
        name:'Arjun Roy',
        email:'arjun@test.com'
    },
    {
        name:'Fahim Faisal',
        email: 'fahim@test.com'
    },
    {
        name: 'Faruk Ahmed',
        email: 'faruk@test.com',
    },
    {
        name: 'Firoz Ahmed',
        email: 'firoz@test.com',
    }];


    return (
        <Layout>
            {name.name?(<h3>This is Help page.How can i help you {name.name} </h3>) :
            (<div>Hello'Guest How can i Help You ?</div>)}
            <ul>
                {data.length>0?data.map((item)=> <li>{item.name},{item.email}</li>):'There is no data'}
            </ul>    
        </Layout>
    )
}

export default Help;