import useFetch from "./useFetch";
import MyTable from "./MyTable";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('https://raw.githubusercontent.com/dianaberna/cacio/main/data/db.json')

  return (
    <div className="container home">
      <div className="row">
        <div className="col col-lg-2 col-md-1 home-disclaimer">
          <p>356 siti di comuni italiani su 7904 sono accessibili. </p>
          <p>In Italia (secondo Istat) ci sono 3,1 milioni persone disabili, il 5,2% della popolazione italiana.</p>
        </div>
      </div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }    
      { blogs && <MyTable blogs={blogs}/> }
    </div>
  );
}
 
export default Home;