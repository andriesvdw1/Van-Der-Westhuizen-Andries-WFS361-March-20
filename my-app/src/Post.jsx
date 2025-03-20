import Paragraph from './Paragraph'
function Post(){
   
   
    let ThisPost = {Title:"Post One", imageURL: "../public/Mountain.jpg", posted: "4 days ago", read:"4", views:"5123", comments:"32"};

    return(
        <div style={{borderRadius:"15px", width:"30%", backgroundColor:"white"}}>
            <img style={{width:"100%"}} src={ThisPost.imageURL} alt="picture of a mountain" /> <br/>
            <span style={{color:"#ff2d84"}}>{ThisPost.posted}</span>
            <h1 style={{color: "black"}}>{ThisPost.Title}</h1>
            <Paragraph/>
            <div style={{backgroundColor:"#ff076e", borderRadius:"15px",fontWeight:"bold", padding:"5px"}}>
                <div style={{float:"left", width:"30%"}}>{ThisPost.read}<sup>m</sup>
                    <br/>Read</div>
                <div style={{float:"left", width:"30%"}}>{ThisPost.views}
                    <br/>Views</div>
                <div>{ThisPost.comments}
                    <br/>Comments</div>
            </div>
            
        </div>
    );
}

export default Post