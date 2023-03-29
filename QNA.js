/*
Q1. What is the backend of an application?
    Ans: The back-end is all of the technology required to process the incoming request and generate and send the response to the client. This typically includes three major parts:

    The server: This is the computer that receives requests.
    The app: This is the application running on the server that listens for requests, retrieves information from the database, and sends a response.
    The database: Databases are used to organize and persist data.

Q2.What is frontend of an application?
    Ans:The clients or front-end are anything that send requests to the back-end. They are often browsers that make requests for the HTML and JavaScript code that they will execute to display websites to the end user. However, there are many different kinds of clients: they might be a mobile application, an application running on another server, or even a web enabled smart appliance.
Extra Question: What is route and routing?
    Ans: The server runs an app that contains logic about how to respond to various requests based on the HTTP verb and the Uniform Resource Identifier (URI). The pair of an HTTP verb and a URI is called a route and matching them based on a request is called routing.
Extra Question: What is server?
    Ans:A server is simply a computer that listens for incoming requests. Though there are machines made and optimized for this particular purpose, any computer that is connected to a network can act as a server. In fact, you will often use your very own computer as server when developing apps.
Extra Question: What is middleware?
    Ans: Some of these handler functions will be middleware. In this context, middleware is any code that executes between the server receiving a request and sending a response. These middleware functions might modify the request object, query the database, or otherwise process the incoming request. Middleware functions typically end by passing control to the next middleware function, rather than by sending a response.

    Eventually, a middleware function will be called that ends the request-response cycle by sending an HTTP response back to the client.
    Often, programmers will use a framework like Express or Ruby on Rails to simplify the logic of routing. For now, just think that each route can have one or many handler functions that are executed whenever a request to that route (HTTP verb and URI) is matched.
Extra Question:What kind of request a server can send?
    Ans: The data that the server sends back can come in different forms. For example, a server might serve up an HTML file, send data as JSON, or it might send back only an HTTP status code. You’ve probably seen the status code “404 - Not Found” whenever you’ve tried navigating to a URI that doesn’t exist, but there are many more status codes that indicate what happened when the server received the request.
Extra Question: What is database and why do we need to use them?
    Ans: Databases are commonly used on the back-end of web applications. These databases provide an interface to save data in a persistent way to memory. Storing the data in a database both reduces the load on the main memory of the server CPU and allows the data to be retrieved if the server crashes or loses power.
    Many requests sent to the server might require a database query. A client might request information that is stored in the database, or a client might submit data with their request to be added to the database.
Q3.What is desktop , mobile  and web platfrom?
Q4.What is desktop development , mobile development and web developemnet?
Q5.What is API
    Ans:An API is a collection of clearly defined methods of communication between different software components.

        More specifically, a Web API is the interface created by the back-end: the collection of endpoints and the resources these endpoints expose.

        A Web API is defined by the types of requests that it can handle, which is determined by the routes that it defines, and the types of responses that the clients can expect to receive after hitting those routes.

        One Web API can be used to provide data for different front-ends. Since a Web API can provide data without really specifying how the data is viewed, multiple different HTML pages or mobile applications can be created to view the data from the Web API.
Q6.How anyone doing business by making API?
    Ans:
    https://www.freecodecamp.org/news/how-i-accidentally-built-an-api-business/
Q7.How anyone is doing business by Twilio API , SMS API , Voice and Video API and Authenticaiton API?
Q8.Who is fullstack developer?
 Ans:
    A full-stack developer is a developer or engineer who can build both the front end and the back end of a website. The front end (the parts of a website a user sees and interacts with) and the back end (the behind-the-scenes data storage and processing) require different skill sets. Since full-stack developers are involved with all aspects of the development process, they must have expertise in both.

    A full-stack developer can work in-house or at a computer development company that engineers websites, software, and other components for other businesses.
Q9.What is client and how many clients?
    Ans:A web client is a client-side application used for connecting to a web server over HTTP. It is typically a web browser or web app which displays web pages received from the server and allows users to interact with the web server.
Q10.Inspect>Network >fetch/xhr what is this?
    Ans:
    # Network Log.
    1.Network log: Each row of the Network log represent a resource.By default resources are listed chronologically.The top resources is usually the main HTML document .The resource is whatever was requested last.
    Each column represents a resource :
        a.Status: The HTTP response code.
        b.Type: The resource type.
        c.Initiator: What caused a resource to be requested .Clicking a link in the initiator column takes you to the souce code that caused the request.
        d. Time: How long the request took.
        e.Waterfall: A graphical reprsentation of the differrent stages of the request.Hover over a waterfall to see a breakdown.
    
    2.So long as you've got DevTools open,it will record network activity in the Network Log.To demonstrate this, first look at bottom of the Network Log and make a mental of the last activity.

    3.Now, click the Get Data button in the demo.

    4.Look at the bottom of the Network Log again .There's a new resource called getstarted.json .Clicking the Get Data button caused the page to request this file.

    #Show more information

    The columns of the Network Log are configurable.You can hide columns that you are not using.There are also many columns that are hidden by default which you may find useful.

    1.Right-click the header of the Network Log table and select Domain.The domain of each resource is now shown.

#Stimulate a slower network connection.

The network connection of the computer that you use to build sites is probably faster than the network connections of the mobile devices of your users .By throttling the page you can get a better idea of how long a page takes to load on a mobile device.

    1.Click the Throttling dropdown , Which is set to Online by default.
    2.Select slow 3G.
    3.Long-press Reload and then select 'Empty cache And Hard Reload'.
    On repeat visits , the browser usually serves some files from it's cache ,which speeds up the page load."Empty Cahce and Hard Reload" forces the browser to go the network for all resources.This is helpful when you want to see how a first-time visitor experiences a page load.

    
#Capture Screenshots.

    Screenshots let you see how a page looked over time while it was loading.

    1.Click Capture Screenshots
    2.Reload the page again via the Empty Cache And Hard Reload workflow. See Simulate a slower connection if you need a reminder on how to do this. The Screenshots pane provides thumbnails of how the page looked at various points during the loading process.

    3.Click the first thumbnail. DevTools shows you what network activity was occurring at that moment in time.

    4.Click Capture Screenshots Capture Screenshots again to close the Screenshots panel.

    5.Reload the page again.

#Inspect a resouce's details.

    1.Click getstarted.html. The Headers tab is shown. Use this tab to inspect HTTP headers.
    2.Click the Preview tab. A basic rendering of the HTML is shown.

    This tab is helpful when an API returns an error code in HTML and it's easier to read the rendered HTML than the HTML source code, or when inspecting images.

    3.Click the Response tab. The HTML source code is shown.
    4.Tip When a file is minified, clicking the Format Format button at the bottom of the Response tab re-formats the file's contents for readability.
    5.Click the Timing tab. A breakdown of the network activity for this resource is shown.
    6.Click Close Close to view the Network Log again.

#Search network headers and responses
    1.lick Search Search. The Search pane opens to the left of the Network log.

    2.Type Cache-Control and press Enter. The Search pane lists all instances of Cache-Control that it finds in resource headers or content.

    3.Click a result to view it. If the query was found in a header, the Headers tab opens. If the query was found in content, the Response tab opens.

    4.Close the Search pane and the Timing tab.
    5.
Q11.What is API in JSON Way?
    Ans: JSON (JavaScript Object Notation) API is an application programming interface designed for lightweight data interchange (text-based data exchange format) between two computer applications operating on the same hardware device or between different computers in different geographical areas.

    The API describes how users should requests, capture, or modify data and how the server should respond to those requests. The API aims at speeding up HTTP requests and the size of data transferred between the users and the server without compromising the legibility, pliability or perceptibility.
Q12.What is IoT or IoT device?
    Ans:IoT devices are the nonstandard computing devices that connect wirelessly to a network and have the ability to transmit data, such as the many devices on the internet of things (IoT).

    IoT involves extending internet connectivity beyond standard devices, such as desktops, laptops, smartphones and tablets, to any range of traditionally "dumb" or non-internet-enabled physical devices and everyday objects. Embedded with technology, these devices can communicate and interact over the internet. They can also be remotely monitored and controlled.
Q13.What is non-standard computing device?
Q14.What is JSON data?
    Ans: JSON stands for JavaScript Object Notation.
    JSON is an open standard data-interchange format.
    JSON is lightweight and self-describing.
    JSON originated from JavaScript.
    JSON is easy to read and write.
    JSON is language independent.
    JSON supports data structures such as arrays and objects.
    
Features of JSON
    Simplicity
    Openness
    Self-Describing
    Internationalization
    Extensibility
    Interoperability
Why do we use JSON?
    Since JSON is an easy-to-use, lightweight language data interchange format in comparison to other available options, it can be used for API integration. Following are the advantages of JSON:

    Less Verbose: In contrast to XML, JSON follows a compact style to improve its users' readability. While working with a complex system, JSON tends to make substantial enhancements.
    Faster: The JSON parsing process is faster than that of the XML because the DOM manipulation library in XML requires extra memory for handling large XML files. However, JSON requires less data that ultimately results in reducing the cost and increasing the parsing speed.
    Readable: The JSON structure is easily readable and straightforward. Regardless of the programming language that you are using, you can easily map the domain objects.
    Structured Data: In JSON, a map data structure is used, whereas XML follows a tree structure. The key-value pairs limit the task but facilitate the predictive and easily understandable model.
Q15.Who keeps quality to be client?
    Ans: Who understands the JSON data sent by the server.
Q16.What is REST API?
    Ans: The term REST stands for REpresentational State Transfer. It is an architectural style that defines a set of rules in order to create Web Services. In a client-server communication, REST suggests to create an object of the data requested by the client and send the values of the object in response to the user. For example, if the user is requesting for a movie in Bangalore at a certain place and time, then you can create an object on the server-side.

    So, over here, you have an object and you are sending the state of an object. This is why REST is known as Representational State Transfer.

    The architectural style of REST helps in leveraging the lesser use of bandwidth to make an application more suitable for the internet. It is often regarded as the “language of the internet” and is completely based on the resources.

    Now that you know what it is, let us move on and understand the need for REST API.

    Stateless: REST APIs are stateless, meaning that calls can be made independently of one another, and each call contains all of the data necessary to complete itself successfully.

    Best link for REST API: https://www.edureka.co/blog/what-is-rest-api/
Q16.What is extension for VS Code?
    Ans: VS Code extensions let you add languages, debuggers, and tools to your installation to support your development workflow. VS Code's rich extensibility model lets extension authors plug directly into the VS Code UI and contribute functionality through the same APIs used by VS Code.
Q17.What is chromimum extension?
    Ans:Chromium extensions provide a way of customizing the web-browsing experience by adding extra functionality to the browser. 
Q18.What is figma plugin?
    Ans: Plugins are programs or applications created by the community that extend the functionality of Figma and FigJam. Plugins run in Figma or FigJam files and perform one or more user actions. They allow users to customize their experience or create more efficient workflows.
Extra Question: What is the difference between plug in and extension?
    Ans: The main difference is that extensions are distributed as source code, while plug-ins are distributed as executables (i.e. object code). Plug-ins are no longer supported by the major browsers, but extensions are widely used.
Q19.What is user and user interaction ?
    Ans:
Q20.What is the main concept of building front-end?
    Ans: Front-end development is the process of building components that interact with users. Examples are the user interface, buttons, user-entered data, websites, and user experience (UX) features. The front end aims at meeting user requirements and delivering a positive user experience.
Extra Question : What is Responsive Front End develpement?
    Ans: Responsive Web Development
    Here’s a frequently asked question: “What Is responsive web development?” RWD, also known as responsive design, is a web-design approach that emphasizes user experience. The objective is to ensure consistent rendering of webpages on various devices, screens and windows of different shapes and sizes, etc. Such an approach has become important given the rise of mobile devices, with most web traffic coming from mobile-device users. Real-world implementations of RWD abound, which most users, who focus on only the convenience and appeal of websites, rarely notice.

    Following are several techniques with which to make websites responsive to various conditions:

    Flexible grids. Grids are a standard design tool for building websites. Responsive websites require a flexible grid that can load in different ways, depending on the screen or window size.
    Breakpoints. Similar to flexible grids, breakpoints are dots on a page that identify cut-off points so that information can move on the screen. Most websites have numerous breakpoints, but a minimum should be three to correspond to the three most common device types.
    Prioritization. Effective designs usually place the most important images and information higher up on the webpage, ensuring that visitors see them first. This visual hierarchy is especially crucial for responsive websites because smaller screens display less of a page at a given time. Prioritizing the important elements keeps mobile-device users engaged.
    Flexible images. Images are often harder to fit into different screen sizes than plain text. Web designers use various techniques to ensure that web pages display images appropriately on different screens. For example, the display might crop parts of an image for a better fit. In the case of multiple image versions for a site, select the version to render based on the device type or screen size.
    Responsive media queries. These are coding commands that set the maximum and minimum dimensions for media assets and that specify their orientation. As a result, all media assets on a webpage load at the appropriate size.
    Mouse and touchscreen-friendly elements. Desktop users are adept with their mouse device, but some actions are less intuitive on mobile devices. Responsive websites must accommodate smartphones by ensuring that every action is easily accessible through a touchscreen. Links must be large and obvious on small screens, and scrolling must be easy across device types. Be sure to test the user experience to ensure that all the elements work well on different devices.

    Best blogs on front end development seen by me : https://cloudinary.com/guides/front-end-development/front-end-development-the-complete-guide#:~:text=Front%2Dend%20development%20is%20the,user%20experience%20(UX)%20features.


Q21.What is the features of frontend?
    Ans: Front-end development, sometimes called the “front office” or “face” of the application, is the part that allows users to interact with your site. It includes everything from interaction design to visualizations and user interfaces so people can checkout or easily find the information they need. Frontend development is the first part of a large complex of works that is devoted to the development of the program interface and its interactive part.

    The frontend has a lot of internal branching into task categories.Some of them are : 

    UI/UX Design 
    Layout
    JavaScript Programming 
    Internet Marketing.
    SEO optimiztion.
Extra Question : Complete guide for front end ?
    Ans: https://cloudinary.com/guides/front-end-development/front-end-development-the-complete-guide
Q22.What is the part of the representational layer of front-end?
    Ans : Architecture of an web application = https://www.cleveroad.com/blog/web-application-architecture/
Q23.What is data layer and types of data layer and what is applicaiton data and what is server data?
    Ans: https://www.cleveroad.com/blog/web-application-architecture/
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
    Ans : More Time and Space Complexity.
Q34. Why so many frameworks comes?
    Ans: Here are eight reasons why there are so many web development frameworks:

    Different projects require varying functionalities.
    Frameworks offer varying levels of flexibility.
    Developers need opinionated and unopinionated options.
    Frameworks offer varying speeds.
    Frameworks use different programming languages.
    Stability varies across frameworks.
    Frameworks have different learning curves.
    Frameworks technology keeps advancing.

    Ans : details https://www.becomebetterprogrammer.com/reasons-many-web-development-frameworks/
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

Extra Question : Related Terms with react JS?
    Ans: https://legacy.reactjs.org/docs/glossary.html
    https://tkssharma.gitbook.io/react-training/react-building-blocks/react-terminology
    https://maxrozen.com/definitive-glossary-guide-commonly-used-words-react

    See other teminologies related with react by searching.
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