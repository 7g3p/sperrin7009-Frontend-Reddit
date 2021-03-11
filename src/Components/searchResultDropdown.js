import React from 'react';


export const SearchResDropDown = ({result, search, setSubreddit, setSearch}) => {

    if (result.length <= 0){
        return(<div></div>);
    }
    else {
        if (search === "")
        {
            return(<div></div>);
        }
        return(
            <div className="static py-1" role="none">
                {result.map((child, index) => {
                    return(
                    <button key={child.data.display_name_prefixed} onClick={() => {setSearch(""); setSubreddit(child.data.display_name_prefixed);}}
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900 cursor-pointer" 
                    role="menuitem"
                    >{child.data.display_name_prefixed}</button>
                    )
                    
                })}
            </div>
        );
    }
}