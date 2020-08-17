import React from "react";
import s from "./CrudItem.module.css";
import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const props = {
  id: 43,
  name: "Aloe Vera",
  price: "$" + 450,
  category: "Flores",
};

export default function CrudListItem({
  product,
  onEditProduct,
  onDeleteProduct,
}) {
  return (
    <div className={s.component}>
      <div className={s.div}> {product.id} </div>
      <div className={s.div}> {product.name} </div>
      <div className={s.div}> {"$ " + product.price} </div>
      <div className={s.div}> {product.category} </div>

      <div className={s.buttons}>
        <Button
          onClick={() => onEditProduct(true, product.id)}
          variant="contained"
          color="primary"
          className={s.button}
        >
          Editar
        </Button>
        <Button
          onClick={() => onDeleteProduct(true, product.id)}
          variant="contained"
          color="secondary"
          className={s.button}
        >
          Eliminar
        </Button>
      </div>
    </div>
  );
}