
import dynamic from "next/dynamic";
import { useQuerySubscription } from "react-datocms";
import React, { useEffect, useState } from 'react';

const YourComponent = dynamic(() => import('./MainScreen'));

export default function Home() {
  const [loading, setLoading] = useState(true)
  const [string, setString] = useState(``)
  const { status, error, data } = useQuerySubscription({
    query: `
        query {
          allProducts {
            content{
              htmlCode
            }
          }
        }`,
    variables: { first: 10 },
    token: "f2a4acd4d4892a7759d70199fc1413",
  });

  // let string = "fsfdsfsdf"

  useEffect(() => {
    if (data && data.allProducts[0].content[0].htmlCode) {
      setString(`${data.allProducts[0].content[0].htmlCode.toString()}`)
      setLoading(false)
    }
  }, [data])
  return loading ? <p>Loading...</p> : (
    <>
      <YourComponent html={string}/>
    </>
  );
}
