import { Link } from "react-router-dom";


export function Links(props){
    return(
        <Link to={props.to} title={props.title}  className="hover:bg-brand-dark bg-brand-blue-dark relative group inline-block w-full sm:w-auto py-0 px-4 m-0 text-white font-semibold rounded-md bg-indigo-600 overflow-hidden">
            {props.text}
        </Link>
    )
}