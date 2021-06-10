const url = "http://localhost:8900";

export function latestNews(props){
    const output = fetch(`${url}/articles/${props}`, {method:'GET'})
    .then(response => response.json())

    return{
        type:"GET_LATEST",
        payload: output
    }
}

export function articleNews(){
    const output = fetch(`${url}/articles`,{method:'GET'})
    .then(response => response.json())

    return{
        type:"GET_ARTICLES",
        payload:output
    }
}