import { useEffect, useState } from "react"


const LoadData = filename => {
  const [data, setData] = useState([]);
  useEffect(()=> {
    fetch(`./data/${filename}.json`)
    .then(res => res.json())
    .then(output => setData(output));
  }, []);

  return [data, setData];
}

export default LoadData;