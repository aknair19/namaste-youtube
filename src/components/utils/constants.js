
const GOOGLE_API_KEY="AIzaSyBfhQuVJBeSm6iVyl247S5s-GXnmyZfJlc";
export const YOUTUBE_VIDEOS_API=`https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&maxResults=50&chart=mostPopular&regionCode=IN&key=${GOOGLE_API_KEY}`


export const YOUTUBE_SEARCH_API=
`http://suggestqueries.google.com/complete/search?client=youtube&client=firefox&ds=yt&q=`