import useFetch from "./useFetch";
import MyTable from "./MyTable";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')

  return (
    <div className="home">
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }    
      { blogs && <MyTable blogs={blogs}/> }
    </div>
  );
}
 
export default Home;