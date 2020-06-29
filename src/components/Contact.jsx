import React from "react";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import DialogActions from "@material-ui/core/DialogActions";
import DialogContent from "@material-ui/core/DialogContent";
import DialogContentText from "@material-ui/core/DialogContentText";
import DialogTitle from "@material-ui/core/DialogTitle";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import TextareaAutosize from "@material-ui/core/TextareaAutosize";

const useStyles = makeStyles(() => ({
  root: {
    "& > *": {
      margin: "0 auto",
      width: "100%",
    },
  },
  dialog: {
    width: "100%",
    height: "",
  },
}));

const Contact = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
    <Dialog
      className={classes.dialog}
      open={props.isViewContact}
      onClose={props.handleCloseContact()}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogContent>
        <DialogTitle id="alert-dialog-title">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField id="filled-basic" label="お名前" variant="filled" />
          </form>
        </DialogTitle>
        <DialogContentText id="alert-dialog-description">
          <form className={classes.root} noValidate autoComplete="off">
            <TextField
              id="filled-basic"
              label="メールアドレス"
              variant="filled"
            />
          </form>
        </DialogContentText>
        <DialogContentText id="alert-dialog-description">
          <form className={classes.root} noValidate autoComplete="off">
            <TextareaAutosize
              aria-label="minimum height"
              rowsMin={5}
              placeholder="お問い合わせ内容"
            />
          </form>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button onClick={props.handleCloseContact()} color="primary">
          キャンセル
        </Button>
        <Button onClick={props.handleCloseContact()} color="primary">
          送信
        </Button>
      </DialogActions>
    </Dialog>
    </React.Fragment>
  );
};

export default Contact;
