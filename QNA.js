/*
Q1. What is the backend of an application?
Q2.What is frontend of an application?
Q3.What is desktop , mobile  and web platfrom?
Q4.What is desktop development , mobile development and web developemnet?
Q5.What is API
Q6.How anyone doing business by making API
Q7.How anyone is doing business by Twilio API , SMS API , Voice and Video API and Authenticaiton API?
Q8.Who is fullstack developer?
Q9.What is client and how many clients?
Q10.Inspect>Network >fetch/xhr waht is this?
Q11.What is API in JSON Way?
Q12.What is IoT or IoT device?
Q13.What is non-standard computing device?
Q14.What is JSON data?
Q15.Who keeps quality to be client?
Q16.What is REST API?
Q16.What is extension for VS Code?
Q17.What is chromimum extension?
Q18.What is figma plugin?
Q19.What is user and user interaction ?
Q20.What is the main concept of building front-end?
Q21.What is the features of frontend?
Q22.What is the part of the representational layer of front-end?
Q23.What is data layer and types of data layer and what is applicaiton data and what is server data?
Q24.What is logical layer and Waht is the task of logical layer?
Q25.Why network layer is need in an web application?
Q26.What is http?
    Ans:ধরেন আপনি কোথাও আপনার অ্যাপ্লিকেশনটা ওপেন করলেন। সেটা মোবাইল, ব্রাউজার যেটাই হোক। করার পরে আপনি কিছু সার্চ করতে চাইছেন। যেখানে আপনি আপনার সার্চ করার জন্য লিখবেন সেটা হচ্ছে রিপ্রেজেন্টেশন লেয়ার। এবার সেই সার্চ করা ডাটা খুঁজে নিয়ে আসতে হবে সার্ভার থেকে। সার্ভারের সাথে সেই কমিউনিকেশনের দায়িত্ব পালন করবে নেটওয়ার্ক লেয়ার। এবার আমার ডাটাটা একটু ফরম্যাটিং এর প্রয়োজন হতে পারে। সেটা করবে লজিক্যাল লেয়ার। এরপর সেটা ক্লায়েন্টের একটা জায়গায় স্টোর করে রাখতে হবে। সেই কাজটার জন্য আছে ডাটা লেয়ার। এবার ডাটা লেয়ার লজিক্যাল লেয়ারের মাধ্যমে আমাদের সার্চ করা ডাটা সুন্দরভাবে যেভাবে শো করানো দরকার সেভাবে রিপ্রেজেন্টেশন লেয়ার পাঠিয়ে দেবে এবং রিপ্রেজেন্টেশন লেয়ার সেই ডাটা আমাদেরকে শো করবে।

এতটুকু যদি আপনারা বুঝতে পারেন তাহলে ফ্রন্টএন্ড ডেভেলপমেন্টের একটা বড় অংশ আপনারা বুঝে ফেলেছেন। যখন ফ্রেমওয়ার্কে কাজ করবো আমরা তখন অনেক মজা পাবেন কাজ করতে যদি এই কনসেপ্ট বুঝে থাকেন।

আরেকটা জিনিস একটু বুঝা দরকার। এই পুরো প্রসেসে মেইন রোল প্লে করে HTTP। এটা না থাকলে আমাদের এই প্রসেস সম্পন্ন হতো না। HTTP ছাড়া আমরা ব্যাকএন্ড থেকে ডাটা নিয়ে আসতে পারবো না। যেখানে যে ক্লায়েন্টের কাছে HTTP আছে সে চাইলে ব্যাকএন্ড থেকে ডাটা নিয়ে আসতে পারবে।
Q27. Which language and which framework is used for which application?
     Ans: For React = > JSX;
     Vue.js and Angular => Template Engine
     Java or Kotlin => mobile app = > XML;
     These are representaional layer;
Q28.Which type of raw data is returned by backend?
    Ans: JSON Type.
Q29.What is the feature of RESTApi.?
    Ans:আরেকটা বাস্তব উদাহরণ দিয়ে আমরা এটা বুঝার চেষ্টা করি। আগে কম্পিউটার কোম্পানিগুলো ডেস্কটপ বানিয়ে রাখতো। অর্থাৎ তারা আগে থেকে কনফিগার কর রাখতো সব। আমরা গিয়ে জাস্ট কিনে নিয়ে চলে আসতাম। ঐ যে পুরো এইচটিএমএল ফাইলের মতো। আমাদের আলাদাভাবে কনফিগার করা সম্ভব হতো না। এখন আমরা 
    চাইলে একটা ডেস্কটপের মধ্যে বিভিন্ন কোম্পানির কম্পোনেন্ট ইউজ করতে পারি। আমরা আমাদের মতো করে হার্ডডিস্ক, র‍্যাম, গ্রাফিক্স কার্ড, মাদারবোর্ড সব কনফিগার করতে পারি। রেস্ট এপিআই বর্তমানে এই সুবিধাটাই দিচ্ছে। আমাদের যা লাগবে আমরা শুধু সেই ডাটা নিয়েই কাজ করতে পারবো।
Q30.What is Twilio , SendGrid and Google Map API?
Q31. Which type of data is passing through and how?
    Ans: JSON type data is passing through and by http communication channel.
Q32.What is javascript and DOM?
Q33.Why DOM Manipulation is costly?
Q34. Why so many frameworks comes?
Q35. Why frameWorks:
    Time Complexity
    Memory Complexity 
    PC configuration list of the world?
    Number of browsers in the world?
    Number of browser versions in the world?
    List of device screen size of the world?
    These problems solution are framework.
Q36.Why Angular is high performant than react and vue?
    Ans : Because it uses shadow DOM.
Q37. 'State of JS' survery site.
Q38. What is the core features of react?
    Comopnent and it's types:
    ways to make component:
    component lifecycle:
    functional component:
Q39.What is error boundary and error boundary related task in react class component?
Q40.What is lifecycle in react class component?
Q41.What is react functional component and hooks?
Q42.Class component + lifecycle = componet pattern 
Q43. Functional component + Hooks = Custom Hooks.
Q44. What is local state Management in ract?
Q45. What is component tree?
Q46.What is state lifting?
Q47. What is 
    i. JSX;
        a.Conditional Rendering.
        b.List Rendering.
        c.Forms
        d.Event Handling.
        
*/