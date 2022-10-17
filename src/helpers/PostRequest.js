import {useEffect} from "react";

const PostRequest = (url, content) => {
    console.log('Post Started')

    console.log("content: " + content);
    // POST request using fetch inside useEffect React hook
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(content)
    };
    fetch(url, requestOptions)
        .then(response => console.log(response.text()))

    console.log('Post Complete')
}

export default PostRequest