import { useState } from "react";
import { Form } from "react-router-dom";
import classes from "./Form.module.css";

export default function ProductForm({ product = {}, method}) {
    const [name, setName] = useState(product.name || "");
    const [description, setDescription] = useState(product.description || "");
    const [price, setPrice] = useState(product.price || "");

    return (
        <div className={classes.formwrapper}>
            <Form method = {method} className={classes.editform}>
                <label htmlFor="name">Name</label>
                <input type="text" id="name" name="name" value={name? name:""} onChange={(e) => setName(e.target.value)} required />
                <label htmlFor="description">Description:</label>
                <textarea id="description" name="description" value={description? description:""} onChange={(e) => setDescription(e.target.value)} />
                <label htmlFor="price">Price:</label>
                <input type="number" id="price" name="price" value={price? price:""} onChange={(e) => setPrice(e.target.value)} required />
                <button type="submit">Save</button>
            </Form>
        </div>
    );
}