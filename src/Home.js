
import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {
    const { data: blogs, isPending, error } = useFetch('http://localhost:8000/blogs');








    return ( 
        <div className="home">

            { isPending && <div>Loading..................................................</div> }
            { error && <div> { error } </div> }
            { blogs && <BlogList blogs={blogs} title="All Blogs"></BlogList> }
            { blogs && <BlogList blogs={blogs.filter((blog) => blog.author === 'mario')} title="Mario's Blogs"></BlogList>}
        </div>
     );
}
 
export default Home;