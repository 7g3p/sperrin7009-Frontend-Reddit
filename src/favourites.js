import React, { useState, useEffect } from 'react';
import PostList from './Components/postListings.js';

export function storageAvailable(type) {
    var storage;
    try {
        storage = window[type];
        var x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e) {
        return e instanceof DOMException && (
            // everything except Firefox
            e.code === 22 ||
            // Firefox
            e.code === 1014 ||
            // test name field too, because code might not be present
            // everything except Firefox
            e.name === 'QuotaExceededError' ||
            // Firefox
            e.name === 'NS_ERROR_DOM_QUOTA_REACHED') &&
            // acknowledge QuotaExceededError only if there's something already stored
            (storage && storage.length !== 0);
    }
}

String.prototype.replaceAt = function(index, replacement) {
    return this.substr(0, index) + replacement + this.substr(index + replacement.length);
}

const FavouritePosts = () => {
    const defaultKeyName = "FavPost";
    const [postList, setPostList] = useState([]);

    useEffect(() => {
        const FetchFavouritePosts = async_ => {
            let postUrls = null;
            let postsArr = [];
            let tpArr = [];
            
            if (storageAvailable('localStorage')) {
                postUrls = localStorage.getItem(defaultKeyName);

                console.log(postUrls);

                if (postUrls !== null){
                    postsArr = postUrls.split("}{");

                    for (let i = 1; i < postsArr.length;i++){
                        let query = "";

                        query = postsArr[i].replaceAt(postsArr[i].length - 1, ".json");

                        fetch(query)
                        .then((res) => {
                            res.json()
                            .then((resJSON) => {
                                tpArr = [...tpArr, resJSON[0].data.children[0]];

                                setPostList(tpArr);
                            })
                        })
                        .catch((error) => {
                            console.log("***ERROR: " + error);
                        })
                    }
                }
            }
            else {
                Window.alert("LocalStorage is not available.");
            }
        }

        FetchFavouritePosts();
    }, []);

    return (
        <div>
            <PostList 
            postList={postList}
            />
        </div>
    );
};

export default FavouritePosts;