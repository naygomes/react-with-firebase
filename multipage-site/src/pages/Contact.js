import { useLocation } from "react-router-dom";

export default function Contact() {
    const queryString = useLocation().search;
    console.log(queryString);

    const queryParams = new URLSearchParams(queryString);
    const name = queryParams.get("name");

    return (
        <div>
            <h2> Hey { name }, contact us here... </h2>
            <p>Culpa nulla qui irure tempor commodo laborum magna Lorem pariatur nulla. 
                Nulla cupidatat fugiat esse est laboris veniam ut labore aute culpa nostrud ut dolor sunt.
                Pariatur eiusmod reprehenderit reprehenderit magna culpa duis et non.
                Excepteur excepteur in nostrud duis velit anim id dolor aute fugiat velit non deserunt.
                Sint culpa incididunt nisi officia velit dolor dolor adipisicing minim amet.
                Officia sunt duis culpa commodo voluptate et cillum duis. Amet do in veniam consequat quis dolore aliqua sunt.
            </p>
        </div>
    )
}
