import React, { useState, useCallback, useEffect } from "react";
import Contact from "./Contact";
import { makeStyles} from "@material-ui/styles";
import ContactsIcon from "@material-ui/icons/Contacts";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import SiteLogo from "../assets/images/site-logo.png";

const useStyles = makeStyles(() => ({
  icon: {
    display: "inline-block",
    color: "silver",
    fontSize: 30,
    opacity: 0.9,
    marginLeft: 15,
    "&:hover": {
      cursor: "pointer",
    },
  },
}));

const Header = (props) => {
  const classes = useStyles();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [description, setDescription] = useState("");

  const inputName = useCallback((event) => {
    setName(event.target.value);
  }, [setName]);
  const inputEmail = useCallback((event) => {
    setName(event.target.value);
  }, [setEmail]);
  const inputDescription = useCallback((event) => {
    setName(event.target.value);
  }, [setDescription]);

  const submitForm = useCallback(() => {
    const name = name;
    const email = email;
    const description = description;
    // 送信されたデータをpayloadと呼ぶ
    const payload = {
      text:
        "お問い合わせがありました！\n" +
        "お名前：" +
        name +
        "\n" +
        "Email：" +
        email +
        "\n" +
        "問い合わせ内容：" +
        description +
        "\n",
    };
    const url =
    "https://hooks.slack.com/services/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";
    fetch(url, {
      method: "POST",
      body: JSON.stringify(payload),
    }).then(() => {
      alert("送信完了しました。追ってご連絡します");

      console.log("JSON.stringify(payload)");
      setName("");
      setEmail("");
      setDescription("");

      return props.handleCloseContact();
    })
  })
  
  let openContact;
  if (props.isViewContact === true) {
    openContact = <Contact 
    isViewContact={props.isViewContact}
    isViewCart={props.isViewCart}
    handleCloseContact={() => props.handleCloseContact}
    submit={() => submitForm} />;
  } else if (props.isViewContact === false) {
    openContact = "";
  }

  return (
    <header className="header">
      <div className="header__inner">
        <div className="header--left">
          <img src={SiteLogo} alt="" className="header__site-logo" />
        </div>
        <div className="header--right">
          <ContactsIcon
            className={classes.icon}
            isViewContact={props.isViewContact}
            onClick={props.handleOpenContact()}
          />
          <ShoppingCartIcon className={classes.icon} />
          {openContact}
        </div>
      </div>
    </header>
  );
};

export default Header;
