import React, {useState} from 'react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { storageAvailable } from '../favourites.js';
import { faHeart as faSolidHeart } from "@fortawesome/free-solid-svg-icons";
import { faHeart as faEmptyHeart } from "@fortawesome/free-regular-svg-icons";

const PostCard = ({postChild}) => {
    const [hover, setHover] = useState(false);
    const defaultKeyName = "FavPost";
    let postUrls;
    let postsArr = [];

    const FavouritePosts = (url) => {

        if (storageAvailable('localStorage')) {
            // Pulls the current favourites list from the localStorage
            postUrls = localStorage.getItem(defaultKeyName);

            if (postUrls !== null){
                postsArr = postUrls.split("}{");

                let count = 0;
                for(let i = 0; i < postsArr.length;i++){
                    if (postsArr[i].localeCompare(url) !== 0)
                    {
                        if (count === postsArr.length - 1){
                            postsArr = [...postsArr, url.toString()];
                            i++;
                        }
                        else{
                            count++;
                        }
                    }
                }

                // Save the new favourites list to localStorage
                localStorage.setItem(defaultKeyName, postsArr.join("}{"));
            }
        }
        else {
            window.alert("LocalStorage is not available.");
        }
            window.alert("Post saved to favourites.");
    }

    const RenderMedia = () => {
        if (postChild.data.secure_media !== null){
            if (postChild.data.secure_media.oembed !== undefined)
            {
                var htmlString = postChild.data.secure_media.oembed.html;

                // A lot of stuff to extract the url from the html string because i couldn't find a regular url in the json(the url element just had "www.streamable.com" and nothing else so :/)
                htmlString = htmlString.match(/(\s(src=").*?(" )\b)/g);

                if(null !== htmlString.toString().match(/((src=)\b.+?(?=\&))/g))
                {
                    htmlString = htmlString.toString().match(/((src=)\b.+?(?=\&))/g);
                
                    htmlString = htmlString.toString().replace("src=", "");
                    htmlString = decodeURIComponent(htmlString);

                    return <iframe title={postChild.data.title} className="block max-h-96 w-full" allowFullScreen={true} src={htmlString}/>;
                }
                else {
                    return (
                        <a href={"https://www.reddit.com" + postChild.data.permalink}>
                            <iframe 
                            title={postChild.data.title} 
                            className="block max-h-96 w-full hover:cursor-pointer" 
                            allowFullScreen={true} 
                            width={postChild.data.secure_media.oembed.thumbnail_width} 
                            height={postChild.data.secure_media.oembed.thumbnail_height} 
                            src={postChild.data.secure_media.oembed.thumbnail_url}/>
                        </a>
                        )
                }
            }
            else{
                return(
                    <iframe title={postChild.data.title} className="block max-h-96 w-full cursor-pointer" height={postChild.data.secure_media.reddit_video.height} width={postChild.data.secure_media.reddit_video.width} src={postChild.data.secure_media.reddit_video.fallback_url}/>
                );
            }
        }
        else if(postChild.data.post_hint.toString().localeCompare("link") === 0){
            return(
                <a href={"https://www.reddit.com" + postChild.data.permalink}>
                    <iframe title={postChild.data.title} alt="Placeholder" className="h-auto w-full hidden hover:block cursor-pointer" />
                </a>
            );
        }
        else{
            return (
                <a href={"https://www.reddit.com" + postChild.data.permalink}>
                    <img alt="Placeholder" className="block h-auto w-full cursor-pointer" src={postChild.data.url}/>
                </a>
            );
        }
    }

    if (postChild.length <= 0){
        return(<div></div>);
    }
    else {
        if (postChild.data.preview === undefined)
        {
            return(
            <article className="m-5 overflow-hidden rounded-lg shadow-lg">
                <header className="max-h-80 flex items-center justify-between leading-tight p-2 md:p-4 bg-purple-200">
                    <h1 className="text-lg max-h-52 overflow-hidden">
                        <a href={"https://www.reddit.com" + postChild.data.permalink} className="no-underline hover:underline text-black cursor-pointer">
                            {postChild.data.title}
                        </a>
                    </h1>
                    <p className="flex items-end text-grey-darker text-sm">
                        {(postChild.data.score / 1000).toFixed(1) + "K"}
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4 bg-purple-200">
                    <a href={"https://www.reddit.com" + postChild.data.permalink} className="flex flex-col max-h-12 items-center no-underline hover:underline text-black">
                        <p className="ml-2 mb-2 text-sm font-semibold">
                            {"u/" + postChild.data.author}
                        </p>
                        <p className="ml-2 -mb-2 text-xs font-thin text-gray-800">
                            {postChild.data.subreddit_name_prefixed}
                        </p>
                    </a>
                        <a className="no-underline text-grey-darker hover:text-red-dark">
                        <span className="hidden">Like</span>
                        <FontAwesomeIcon 
                        icon={!hover ? faEmptyHeart : faSolidHeart} 
                        onPointerOver={() => {setHover(true);}} 
                        onPointerOut={() => {setHover(false);}} 
                        onClick={() => {FavouritePosts(("https://www.reddit.com" + postChild.data.permalink))}}
                        />
                    </a>
                </footer>

            </article>
            );
        }
        else{
            return(
            <article className="m-5 overflow-hidden rounded-lg shadow-lg">
                <RenderMedia />
                <link rel="canonical" href="https://getbootstrap.com/docs/4.0/examples/blog/"/>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4 bg-purple-200">
                    <h1 className="text-lg max-h-20 overflow-hidden">
                        <a className="no-underline hover:underline text-black" href={"https://www.reddit.com" + postChild.data.permalink}>
                            {postChild.data.title}
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm cursor-default">
                        {(postChild.data.score / 1000).toFixed(1) + "K"}
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4 bg-purple-200 cursor-default">
                    <a href={"https://www.reddit.com" + postChild.data.permalink} className="flex flex-col max-h-12 items-center no-underline hover:underline text-black cursor-default">
                        <p className="ml-2 mb-2 text-sm font-semibold cursor-default">
                            {"u/" + postChild.data.author}
                        </p>
                        <p className="ml-2 -mb-2 text-xs font-thin text-gray-800 cursor-default">
                            {postChild.data.subreddit_name_prefixed}
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark">
                        <span className="hidden">Like</span>
                        <FontAwesomeIcon 
                        icon={!hover ? faEmptyHeart : faSolidHeart} 
                        onPointerOver={() => {setHover(true);}} 
                        onPointerOut={() => {setHover(false);}} 
                        onClick={() => {FavouritePosts(("https://www.reddit.com" + postChild.data.permalink))}}
                        />
                    </a>
                </footer>

            </article>
            );
        }
    }
}

export default PostCard;