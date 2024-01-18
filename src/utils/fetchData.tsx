export default async function fetchData (url:string){
        const res = await fetch(url);
        const data = await res.json();
        console.log(data, `Response from ${url}`);
        return data;
}