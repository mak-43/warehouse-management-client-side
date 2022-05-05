
import React from 'react';
import 'react-accessible-accordion/dist/fancy-example.css';
import {
    Accordion,
    AccordionItem,
    AccordionItemHeading,
    AccordionItemButton,
    AccordionItemPanel,
} from 'react-accessible-accordion';
const Blogs = () => {
    return (
        <div>
            <Accordion>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            Diferencence between js and node.js
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            What is the difference between js and node.js
                            JavaScript is a programming language used to write scripts on a website. NodeJS on the other hand is a JavaScript runtime environment.

                            JavaScript can only be run in the browser. We can use it to run JavaScript outside of the browser with Node JS.

                            JavaScript is used for client-side and frontend development.while NodeJS is mostly used for server-side and server-side development.

                            JavaScript is capable enough to add HTML and play with DOM. Nodejs, on the other hand, cannot add HTML tags.

                            JavaScript can run on any browser engine, such as JS Core in Safari and SpiderMonkey in Firefox. V8 is the JavaScript engine inside node.js that parses and runs JavaScript.

                            Some JavaScript frameworks include (RamdaJS, TypedJS), etc.Some node modules include ( Lodash, express), etc. These modules have to be imported from npm (Node Package Manager).

                            This is an upgraded version of the ECMA script that only uses Chrome's V8 engine written in C ++.while Nodes are written in C, C ++, and JavaScript
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            When should you use node js and when you use mongodb
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            Any project requires a programming environment and a runtime library that provides you with basic programming tools / support and can compile or interpret your code.

                            Nodejs is an example tool for JavaScript programming languages.

                            There are other similar tools for other languages ​​like Python, Java, PHP, C #, C ++, Go, etc.

                            So, if you want to write any kind of standalone program or server in JavaScript, you can use nodes for it.


                            If your application needs the ability to constantly store data so that you can search efficiently or update it, you will usually use some form of a database.

                            There are dozens of popular databases. MongoDB is such a database. (MariaDB, MySql, CouchDB, DynamoDB (in AWS), and Postgres) are examples of other databases.

                            Different databases have different strengths (the things they are the best) and different ways to use them so choosing the right / best database for what you are doing is entirely up to your decision.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is the difference between sql and nosql
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            SQL databases are related, and NoSQL databases are unrelated.

                            SQL Database uses structured query language and has a default schema.The NoSQL database contains dynamic schemas for unorganized data.

                            SQL databases based on are vertically scalable, while NoSQL databases based on are horizontally scalable.

                            SQL databases are table-based, while NoSQL databases store documents, key values, graphs, or wide columns.

                            SQL databases are good for multi-row transactions, while NoSQL is good for unstructured data like documents or JSON.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
                <AccordionItem>
                    <AccordionItemHeading>
                        <AccordionItemButton>
                            What is the purpose of jwt and how does it work?
                        </AccordionItemButton>
                    </AccordionItemHeading>
                    <AccordionItemPanel>
                        <p>
                            JWT (JSON Web Token) is an open value that is used to share security information between two parties - a client and a server.
                            Each JWT contains an encoded JSON object, which contains a set of claims.
                            JWTs are signed using a cryptographic algorithm to ensure that claims cannot be changed after the token is issued.

                            Unlike all other web tokens, JWT contains a set of claims.
                            Used to transmit information between two parties to a claim.
                            This claim depends on the use of the hand. For example, a claimant may claim who gave the token, how long it may be valid, or what permission has been granted to the client.
                        </p>
                    </AccordionItemPanel>
                </AccordionItem>
            </Accordion>
        </div>
    );
};

export default Blogs;