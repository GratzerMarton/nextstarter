
import Link from 'next/link'

export default function Card(props) {
return(
<div className="w-1/3 flex flex-wrap items-center h-40 m-4  bg-red-800"><div className="w-full  flex">
<h1 className="mr-auto ml-auto">{props.name}</h1></div>
<div className="w-full flex">
<a className="mr-auto ml-auto " href={props.url}>klikkme</a></div>


</div>
)

    
}