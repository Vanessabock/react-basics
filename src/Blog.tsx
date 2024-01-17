import {Header} from "./Header.tsx";
import {Footer} from "./Footer.tsx";
import {BlogCard} from "./BlogCard.tsx";

export function Blog(){
    const author: string = 'Someone';

    const favouriteBlogs: { title: string, description: string }[] = [
        {
            title: "Blog article",
            description: "Awesome content inside"
        },
        {
            title: "Awesome blog article",
            description: "Super awesome content here"
        },
        {
            title: "Super awesome blog article",
            description: "Super hyper awesome content here",
        }
    ]

    return (
        <>
            <Header/>
            <div className="hero">
            <h1>{`Hello, this is ${author}'s blog`}</h1>
            </div>
            <div className="divider"/>
            <div className="favourites">
                {favouriteBlogs.map(blog => (
                <BlogCard key={blog.title} title={blog.title} description={blog.description}/>
                ))}
            </div>
            <Footer/>
        </>);
}