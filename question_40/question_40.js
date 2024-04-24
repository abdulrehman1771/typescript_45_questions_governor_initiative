const make_album = (artist_name, album_title, tracks) => {
    const album = {
        "artist_name": artist_name,
        "album_title": album_title,
    };
    if (tracks) {
        album["tracks"] = tracks;
    }
    return album;
};
console.log(make_album("Zack Snyder", "Rising Star", 55));
export {};
