import React from 'react';
import './GigCard.css';
import Avatar from '@material-ui/core/Avatar';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

function GigCard({image, avatar, username, level, title, ratting, noOfOrders, startingPrice}) {
    return (
        <div className="gigcard">
            <img className="gigcard__image" src={image} alt="" />
            <div className="giftcard__main">
            <div className="giftcard__info">
                <Avatar src={avatar} alt="" />
                <div className="gigcard__sellerDetails">
                    <h3>{username}</h3>
                    <p>Level {level} Seller</p>
                </div>
                
            </div>
            <div className="gigcard__gigDetails">
                <p>{title}</p>
                <p>⭐ {ratting} ({noOfOrders})</p>
            </div>
            <div className="gigcard__footer">
                <FavoriteBorderIcon />
                <p>STARTING AT ${startingPrice}</p>
            </div>
            </div> 
        </div>
    )
}

export default GigCard;
