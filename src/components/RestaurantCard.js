import { IMG_CDN_URL } from "../utils/constants";

const RestaurantCard =(props)=>{
    const {resData} = props;
    const {
        cloudinaryImageId,
        name,
        cuisines,
        avgRating,
        costForTwo,
        sla,
        locality
    } = resData?.info;
    return(
        <div className="res-card" style={{backgroundColor:"#6a6565"}}>
            <img className="res-logo" src={IMG_CDN_URL + cloudinaryImageId}></img>
            
            <h3>{name}</h3>
            <h3>{cuisines.join(",")}</h3>
            <h3>{costForTwo}</h3>
            <h3>{avgRating + " *" }</h3>
            <h3>{sla?.slaString}</h3>
            <h3>{locality}</h3>
        </div>
    )
}

export default RestaurantCard;