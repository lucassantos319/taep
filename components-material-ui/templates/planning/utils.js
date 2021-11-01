import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  formControl: {
    margin: theme.spacing(1),
    width: 300
  },
  formControl2: {
    margin: theme.spacing(1),
    width: 300
  },
  indeterminateColor: {
    color: "#f50057"
  },
  indeterminateColor2: {
    color: "#f50057"
  },
  selectAllText: {
    fontWeight: 500
  },
  selectAllText2: {
    fontWeight: 500
  },
  selectedAll: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    }
  },
  selectedAll2: {
    backgroundColor: "rgba(0, 0, 0, 0.08)",
    "&:hover": {
      backgroundColor: "rgba(0, 0, 0, 0.08)"
    }
  }
}));

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center"
  },
  variant: "menu"
};

const MenuProps2 = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250
    }
  },
  getContentAnchorEl: null,
  anchorOrigin: {
    vertical: "bottom",
    horizontal: "center"
  },
  transformOrigin: {
    vertical: "top",
    horizontal: "center"
  },
  variant: "menu"
};

const options = [
    "Ciências", "Tecnologia"," Engenharia", "Artes", "Matemática"
  
];

const options2 = [
    "Socialemotional","Cognitive","Organization","Behavioral","Communicative"
]

export { useStyles, MenuProps,MenuProps2, options, options2 };
