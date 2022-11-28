const Meaning = (props) => {
    return ( 
        <div>
            {props.def.map((d)=>{
                return (
                <>
                    <div className="mx-2 my-3 p-3 flex items-top bg-stone-100 text-teal-900 font-semibold tracking-wide text-lg rounded-md shadow-sm">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                        <path fillRule="evenodd" d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.96H3.75A.75.75 0 013 10z" clipRule="evenodd" />
                    </svg>
                        <div className="mx-3">{d.definition}</div>
                        </div>
                </>
                )
            })}
        </div>
     );
}
 
export default Meaning;