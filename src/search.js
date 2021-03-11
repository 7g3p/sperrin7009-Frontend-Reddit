import React, {useState, useEffect} from 'react';
import {SearchResDropDown} from './Components/searchResultDropdown.js';
import PostList from './Components/postListings.js';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSearch} from '@fortawesome/free-solid-svg-icons';

const SearchSubreddits = () => {
    const [subreddit, setSubreddit] = useState("");
    const [query, setQuery] = useState("");
    const [search, setSearch] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [postList, setPostList] = useState([]);
    const searchURL = `subreddits/search.json?q=${query}&limit=10`
    const postListingURL = `/hot.json?limit=10`;
    const baseURL = `https://www.reddit.com/`;

    // Consistently update query string to match what is written
    useEffect(() =>{
        setQuery(search);
    });

    // Update when the query string has been updated and fetch the search results
    useEffect(() => {
        fetch(baseURL + searchURL)
        .then((res) => {
            res.json().then((data) => {
                if (data.data !== undefined){
                    setSearchResults(data.data.children);
                }
            });
        })
        .catch((error) => {
            console.log("***ERROR: " + error);
        })
    }, [query])

    useEffect(() => {
        fetch(baseURL + subreddit + postListingURL)
        .then((res) => {
            if (res.status === 403 || res.status === 404)
            {
                window.alert((baseURL + subreddit) + " cannot be reach. Try a different subreddit.");
            }
            res.json().then((data) => {
                if (data.data !== undefined){
                    setPostList(data.data.children);
                    console.log(data);
                }
            })
            .catch((error) => {
                console.log("****ERROR: " + error);
            });
        })
        .catch((error) => {
            console.log("***ERROR: " + error);
        });
    }, [subreddit]);

    // Update the value of the searchbar search string
    const changeValueHandler = (e) => {
        setSearch(e.target.value);
    }

    return(
        <div>
            <div className="flex sticky top-12 items-center rounded-full shadow-xl">
                <input 
                className="rounded-l-full w-full py-4 px-6 text-gray-700 leading-tight focus:outline-none" 
                id="search" 
                type="text" 
                placeholder="Search"
                value={search}
                onChange={changeValueHandler}
                />
                <div className="p-4">
                    <button className="bg-blue-500 text-white rounded-full p-2 hover:bg-blue-400 focus:outline-none w-12 h-12 flex items-center justify-center">
                        <FontAwesomeIcon icon={faSearch}/>
                    </button>
                </div>

                <div 
                className="absolute origin-top-right top-20 left-0 ml-10 mt-0.5 w-3/6 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" 
                role="menu" 
                aria-orientation="vertical" 
                aria-labelledby="options-menu"
                >
                    <SearchResDropDown 
                    result={searchResults} 
                    search={search}
                    setSubreddit={setSubreddit} 
                    setSearch={setSearch}
                    />
                </div>
            </div>

            

            <PostList 
            postList={postList}
            />
        </div>
    );
};

export default SearchSubreddits;