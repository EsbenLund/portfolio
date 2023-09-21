import parse from "html-react-parser"
export default function AboutMe({post}){

return (
<article className="aboutMep">
    <h1 className="aboutMeh2">{parse(post.title.rendered)}</h1>
    {parse(post.content.rendered)}
</article>
)}