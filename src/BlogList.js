import { Link } from 'react-router-dom';

const BlogList = ({ blogs }) => {
  return (
    <div className="blog-list">
      {blogs
      .sort((a, b) => a.score > b.score ? 1 : -1)
      .map(blog => (
        <div className="blog-preview" key={blog.id} >
          <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.comune }</h2>
            <h2>{ blog.score }</h2>
          </Link>
        </div>
      ))}
    </div>
  );
}
 
export default BlogList;