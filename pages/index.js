import { useQuerySubscription } from "react-datocms";
import CustomCard from "../component/cards/CustomCard";
import SimpleCard from "../component/cards/SimpleCard";

// import { useState } from "react"
// import BottomAppBar from '../component/BottomNavbar';
// import HomePage from './HomePage';
// import SearchPage from "./SearchPage";

export default function Home() {
  const { status, error, data } = useQuerySubscription({
    query: `
      query {
        allProducts {
          id
          name
          price
          _status
          _firstPublishedAt
          image {
            url
            title
            alt
          }
        }
        _allProductsMeta {
          count
        }
      }`,
    variables: { first: 10 },
    token: "f2a4acd4d4892a7759d70199fc1413",
  });
  const statusMessage = {
    connecting: "Connecting to DatoCMS...",
    connected: "Connected to DatoCMS, receiving live updates!",
    closed: "Connection closed",
  };
  // const [search, setSearch] = useState("")
  // const [currentPage, setCurrentPage] = useState("homePage")

  // const renderPage = {
  //   homePage: <HomePage search={search} />,
  //   searchPage: <SearchPage
  //     handleClose={() => {
  //       setCurrentPage("homePage")
  //     }}
  //   />
  // }
  return (
    <>
      <div >
        <p>Connection status: {statusMessage[status]}</p>
        {error && (
          <div>
            <h1>Error: {error.code}</h1>
            <div>{error.message}</div>
            {error.response && (
              <pre>{JSON.stringify(error.response, null, 2)}</pre>
            )}
          </div>
        )}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            padding: 20
          }}
        >
          {data && (
            <>
              {data.allProducts.map((product, i) => (
                <SimpleCard product={product} key={i} />
              ))}
            </>
          )}
        </div>
      </div>
      {/* <BottomAppBar
        handleSearch={(e) => {
          setSearch(e)
        }}
        hideInput={currentPage === "searchPage"}
        handleAddMoreChat={() => {
          setCurrentPage("searchPage")
        }}
      >
        {renderPage[currentPage]}
      </BottomAppBar> */}
    </>
  );
}
