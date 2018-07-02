import React from "react";
import PropTypes from "prop-types";
import classNames from 'classnames';
import { withStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import IconButton from '@material-ui/core/IconButton';
import Icon from '@material-ui/core/Icon';
import DeleteIcon from '@material-ui/icons/Delete';
import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import AddIcon from '@material-ui/icons/Add';
import NavigationIcon from "@material-ui/icons/Navigation";
import FileUpload from '@material-ui/icons/FileUpload';
import KeyboardVoice from '@material-ui/icons/KeyboardVoice';
import Delete from '@material-ui/icons/Delete';
import Save from '@material-ui/icons/Save';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit
  },
  input: {
    display: "none"
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  
  leftIcon: {
    marginRight: theme.spacing.unit,
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  iconSmall: {
    fontSize: 20,
  },
});

function TextButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button className={classes.button}>Default</Button>
      <Button color="primary" className={classes.button}>
        Primary
      </Button>
      <Button color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button disabled className={classes.button}>
        Disabled
      </Button>
      <Button href="#text-buttons" className={classes.button}>
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="flat-button-file"
        multiple
        type="file"
      />
      <label htmlFor="flat-button-file">
        <Button component="span" className={classes.button}>
          Upload
        </Button>
      </label>

      <Button variant="outlined" className={classes.button}>
        Default
      </Button>
      <Button variant="outlined" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="outlined" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button variant="outlined" disabled className={classes.button}>
        Disabled
      </Button>
      <Button
        variant="outlined"
        href="#outlined-buttons"
        className={classes.button}
      >
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="outlined-button-file"
        multiple
        type="file"
      />
      <label htmlFor="outlined-button-file">
        <Button variant="outlined" component="span" className={classes.button}>
          Upload
        </Button>
      </label>

      <Button variant="contained" className={classes.button}>
        Default
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Primary
      </Button>
      <Button variant="contained" color="secondary" className={classes.button}>
        Secondary
      </Button>
      <Button
        variant="contained"
        color="secondary"
        disabled
        className={classes.button}
      >
        Disabled
      </Button>
      <Button
        variant="contained"
        href="#contained-buttons"
        className={classes.button}
      >
        Link
      </Button>
      <input
        accept="image/*"
        className={classes.input}
        id="contained-button-file"
        multiple
        type="file"
      />
      <label htmlFor="contained-button-file">
        <Button variant="contained" component="span" className={classes.button}>
          Upload
        </Button>
      </label>

      <Button variant="fab" color="primary" aria-label="add" className={classes.button}>
        <AddIcon />
      </Button>
      <Button variant="fab" color="secondary" aria-label="edit" className={classes.button}>
        <Icon>edit_icon</Icon>
      </Button>
      <Button variant="extendedFab" aria-label="delete" className={classes.button}>
        <NavigationIcon className={classes.extendedIcon} />
        Extended
      </Button>
      <Button variant="fab" disabled aria-label="delete" className={classes.button}>
        <DeleteIcon />
      </Button>


 <div>
        <Button size="small" className={classes.button}>
          Small
        </Button>
        <Button size="medium" className={classes.button}>
          Medium
        </Button>
        <Button size="large" className={classes.button}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="outlined" size="small" color="primary" className={classes.button}>
          Small
        </Button>
        <Button variant="outlined" size="medium" color="primary" className={classes.button}>
          Medium
        </Button>
        <Button variant="outlined" size="large" color="primary" className={classes.button}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="contained" size="small" color="primary" className={classes.button}>
          Small
        </Button>
        <Button variant="contained" size="medium" color="primary" className={classes.button}>
          Medium
        </Button>
        <Button variant="contained" size="large" color="primary" className={classes.button}>
          Large
        </Button>
      </div>
      <div>
        <Button variant="fab" mini color="secondary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Button>
        <Button variant="fab" color="secondary" aria-label="add" className={classes.button}>
          <AddIcon />
        </Button>
      </div>


      <IconButton className={classes.button} aria-label="Delete">
        <DeleteIcon />
      </IconButton>
      <IconButton className={classes.button} aria-label="Delete" disabled color="primary">
        <DeleteIcon />
      </IconButton>
      <IconButton color="secondary" className={classes.button} aria-label="Add an alarm">
        <Icon>alarm</Icon>
      </IconButton>
      <IconButton color="primary" className={classes.button} aria-label="Add to shopping cart">
        <AddShoppingCartIcon />
      </IconButton>
      <input accept="image/*" className={classes.input} id="icon-button-file" type="file" />
      <label htmlFor="icon-button-file">
        <IconButton color="primary" className={classes.button} component="span">
          <PhotoCamera />
        </IconButton>
      </label>

      <Button variant="contained" color="secondary" className={classes.button}>
        Delete
        <Delete className={classes.rightIcon} />
      </Button>
      <Button variant="contained" color="primary" className={classes.button}>
        Send
        <Icon className={classes.rightIcon}>send</Icon>
      </Button>
      <Button variant="contained" color="default" className={classes.button}>
        Upload
        <FileUpload className={classes.rightIcon} />
      </Button>
      <Button variant="contained" disabled color="secondary" className={classes.button}>
        <KeyboardVoice className={classes.leftIcon} />
        Talk
      </Button>
      <Button variant="contained" size="small" className={classes.button}>
        <Save className={classNames(classes.leftIcon, classes.iconSmall)} />
        Save
      </Button>

    </div>
  );
}

TextButtons.propTypes = {
  classes: PropTypes.object.isRequired
};

export default withStyles(styles)(TextButtons);
