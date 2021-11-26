import useFetch from "./useFetch";
import MyTable from "./MyTable";

const Home = () => {
  const { error, isPending, data: blogs } = useFetch('https://raw.githubusercontent.com/dianaberna/cacio/main/data/db.json')

  return (
    <div className="home">
      <div className="home-disclaimer">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
        Curabitur interdum tortor ac mi vestibulum, in volutpat augue dapibus. 
        Maecenas dictum, felis at tincidunt accumsan, nisi ante interdum lacus, sit amet elementum magna velit convallis eros. 
        In ultrices libero sem, nec volutpat risus facilisis id. Nam id vehicula urna. Sed facilisis mauris et porta rhoncus. 
        Vestibulum vitae ornare risus. Nulla rutrum vehicula purus, sed sagittis elit hendrerit non. In porta vulputate neque sit amet pharetra. 
      </div>
      { error && <div>{ error }</div> }
      { isPending && <div>Loading...</div> }    
      { blogs && <MyTable blogs={blogs}/> }
    </div>
  );
}
 
export default Home;