import React, { useState, useCallback } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import AddShoppingCartIcon from "@material-ui/icons/AddShoppingCart";

const useStyles = makeStyles(() => ({
  root: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    flexBasis: "46%",
    margin: "2%",
    backgroundColor: "	#BBBBBB",
    opacity: 0.9,
    "&:hover": {
      opacity: 1,
      boxShadow: "inset 2px 2px 5px 5px rgba(255, 255, 255, 0.6)",
    },
  },
  media: {
    minWidth: 250,
    height: 250,
  },
  settleArea: {
    display: "flex",
    alignItems: "space-between",
  },
}));

const Item = (props) => {
  const classes = useStyles();
  const [itemModal, setItemModal] = useState(false);
  const [cartCount, setCartCount] = useState(0);
  const [itemPrice, setItemPrice] = useState(props.price);

  function handleClickModal() {
    setItemModal(!itemModal);
  }

  function addCartItem() {
    setCartCount(cartCount + 1);
  }

  const sumItemPrice = useCallback(() => {
    setItemPrice(itemPrice * cartCount);
  }, [setItemPrice])

  if (itemModal) {
    return (
      <div className="item-modal">
        <div className="item-modal__inner">
          <p className="item-modal__name">{props.name}</p>
          <img src={props.img} alt="" className="item-modal__img" />
          <p className="item-modal-description">{props.description}</p>
          <button
            className="item-modal__button"
            onClick={() => handleClickModal()}
          >
            Close
          </button>
        </div>
      </div>
    );
  }
  return (
    <Card className={classes.root}>
      <CardActionArea onClick={() => handleClickModal()}>
        <CardMedia
          className={classes.media}
          image={props.img}
          title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            {props.name}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="default" onClick={() => addCartItem()}>
          <AddShoppingCartIcon />
        </Button>
        <p onChange={sumItemPrice}>{cartCount}</p>
        <span>￥{props.price}</span>
      </CardActions>
      {itemModal}
    </Card>
  );
};

export default Item;
