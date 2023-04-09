import React from 'react';
import './App.css';

function Title(){
  return <div>This is react Title</div>
}

function Body(){
  return (<div>This is react title body.React is really awesome
    <p>লিখলেও সমস্যা হচ্ছে না। কিন্তু বড় অ্যাপ্লিকেশন যেখানে হাজার হাজার কোড লিখতে হয় সেখানে এভাবে লিখলে বুঝা যায় না। তাই রিয়্যাক্ট jsx ফিচার এনেছে কোড সহজে লেখার জন্য, বুঝার জন্য এবং ম্যানেজ করার জন্য। এবার আমরা যদি উপরের কোডটা মডার্ন রিয়্যাক্টে লিখি তাহলে দেখুন কতো সহজে এইচটিএমএলের মতো করে লিখতে পারি।</p>
  </div>
  )
}

function Button({text}){
  return (
    <button style = {{marginRight:'1rem'}}>
      {text}
    </button>
  )
}
function App() {
  return (
    <div>
        <Title/>
        <Body/>
        <Button text = 'Button A'/>
        <Button text = 'Button B'/>
        <Button text = 'Button C'/>
        <Button text = 'Button D'/>
    </div>
)
}
export default App;

