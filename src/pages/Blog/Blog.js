import React from 'react';

const Blog = () => {
    return (
        <div>
            <h2 className="text-5xl text-primary font-light text-center my-11">Blog</h2>
            <div className='w-3/5 mx-auto my-10 my xl:mx-20'>
                <h3 className='text-3xl'>How will you improve the performance of a React Application?</h3>
                <p className='text-lg'>Geting berst performance optimization is the number one thing that is on the mind of every dev when building any software, especially web apps.
                Using Immutable Data Structures is not an architecture or design pattern, it's an opinionated way of writing code.
                Be sure you don't have to much chuck file. Your application always begins with a few components. 
                You start adding new features and dependencies, and before you know it, you end up with a huge production file. 
                Some time we use index as key it should be void to get better react performance.
                </p>
            </div>

            <div className='w-3/5 mx-auto my-10 my xl:mx-20'>
                <h3 className='text-3xl'>What are the different ways to manage a state in a React application?</h3>
                <p className='text-lg'>State management is simply a way to engender communication and sharing of data across components. 
                It creates a concrete data structure to represent your app's State that you can read and write. <br/>
                Redux: Redux was created to address the problem in our eCommerce app. It provides a JavaScript object called the store, which, once set up, includes all states in your application and updates them when necessary. 
                <br/>
                Recoil: Recoil seems to be the newest tool on the state management community. A community with tons of excellent libraries like Context, Mobx, and Redux, etc.
                <br/>
                React Hooks: Hooks is one of the most outstanding features ever added to the React library since its creation. Hooks brought state to functional components. Now, functional components can create and manage local states on their own, just like class components.
                </p>
            </div>

            <div className='w-3/5 mx-auto my-10 xl:mx-20'>
                <h3 className='text-3xl'>How does prototypical inheritance work?</h3>
                <p className='text-lg'>
                JavaScript is a prototype-based Object Oriented programming language. JavaScript allowed for prototypical inheritance meaning that objects and methods can be shared, extended, and copied.
                JavaScript prototype to add new properties and methods to an existing object constructor. We can then essentially tell our JS code to inherit properties from a prototype. 
                Prototypical inheritance allows us to reuse the properties or methods from one JavaScript object to another through a reference pointer function.
                </p>
            </div>

            <div className='w-3/5 mx-auto my-10 xl:mx-20'>
                <h3 className='text-3xl'>You have an array of products. Each product has a name, price, description, etc. How will you implement a search to find products by name?</h3>
                <p className='text-lg'>
                To find the product of elements by name:
                    create an empty variable.
                    Initialize it with 1.
                    In a loop traverse through each element (or get each element from user) multiply each element to product.
                    Print the product Name.
                </p>
            </div>

            <div className='w-3/5 mx-auto my-10 xl:mx-20'>
                <h3 className='text-3xl'> What is a unit test? Why should write unit tests?</h3>
                <p className='text-lg'>
                Unit testing is a development process in which the smallest testable parts of an application, called units, are individually and independently scrutinized for proper operation. 
                This testing methodology is done during the development process by the software developers and sometimes QA staff.  
                The main objective of unit testing is to isolate written code to test and determine if it works as intended.
                <br/>
                A unit test typically comprises of three stages: plan, cases and scripting and the unit test itself. In the first step, the unit test is prepared and reviewed. 
                The next step is for the test cases and scripts to be made, then the code is tested.
                Test-driven development requires that developers first write failing unit tests. 
                Then they write code and refactor the application until the test passes. 
                TDD typically results in an explicit and predictable code base.
                </p>
            </div>
        </div>
    );
};

export default Blog;