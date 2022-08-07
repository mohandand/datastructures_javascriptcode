import React, { useEffect } from 'react';
import axios from 'axios';

/* 1. fetch method: The fetch() method in JavaScript is used to request to the server and load the information in the webpages. 
The request can be of any APIs that return the data of the format JSON or XML. This method returns a promise.

2. Axios Package: Axios is a promise-based HTTP client designed for Node.js and browsers. With Axios, 
we can easily send asynchronous HTTP requests to REST APIs and perform create, read, update and delete operations. 
It is an open-source collaboration project hosted on Github. It can be imported in plain Javascript or with any library accordingly.

3. Async-Await: This is the preferred way of fetching the data from an API.

Async: It simply allows us to write promise-based code as if it was synchronous and 
it checks that we are not breaking the execution thread. It operates asynchronously via the event loop. Async functions will always
 return a value.

Await: Await function is used to wait for the promise. It could be used within the async block only. 
It makes the code wait until the promise returns a result. It is used to prevent call-back hell and we can use it with 
Axios rather than the fetch method as Axios makes our code look cleaner and also makes it shorter(as we don’t need to convert to JSON format).*/

export default function FetchData() {
  function fetchData_axios() {
    return axios
      .get('https://catfact.ninja/fact')
      .then((res) => {
        console.log('Response Through Axios');
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }
  function fetchData_fetch() {
    fetch('https://api.publicapis.org/entries')
      .then((res) => {
        console.log('Response Through Fetch');
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  }

  async function fetchData_asyncawait() {
    const res = await fetch(`https://catfact.ninja/fact`);
    console.log('Response Through Async Await');
    console.log(res);
  }

  useEffect(() => {
    fetchData_axios();
    fetchData_fetch();
    fetchData_asyncawait();
  }, []);

  return (
    <div>
      <h2>Fetching Data</h2>
    </div>
  );
}