import React, { useState } from 'react';
import './ProductInput.css'; // Import the CSS for styling

const categories = ['Men', 'Women', 'Electronics', 'Kids'];

function ProductInput({ onProductSubmit }) {
    const [product, setProduct] = useState({
        product_id: '',
        category: [],
        product_name: '',
        description: '',
        image: [],
        price: '',
        discount: '',
        product_rating: '',
        brand: '',
        product_specification: '',
    });

    const handleInputChange = (e) => {
        const { name, value, type, checked, files } = e.target;

        if (type === 'file') {
            // Convert the selected image(s) to base64
            const base64Images = [];

            for (let i = 0; i < files.length; i++) {
                const reader = new FileReader();
                reader.onload = (e) => {
                    base64Images.push(e.target.result);
                    if (base64Images.length === files.length) {
                        setProduct({
                            ...product,
                            [name]: base64Images,
                        });
                    }
                };
                console.log(base64Images);
                reader.readAsDataURL(files[i]);
            }
        } else if (type === 'checkbox') {
            const updatedCategories = checked
                ? [...product.category, value]
                : product.category.filter((cat) => cat !== value);
            setProduct({
                ...product,
                category: updatedCategories,
            });
        } else {
            setProduct({
                ...product,
                [name]: value,
            });
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        onProductSubmit(product);
        setProduct({
            product_id: '',
            category: [],
            product_name: '',
            description: '',
            image: [],
            price: '',
            discount: '',
            product_rating: '',
            brand: '',
            product_specification: '',
        });
    };

    return (
        <div className="product-input-form">
            <h2>Product Input Form</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="product_id">Product ID (String):</label>
                    <input
                        type="text"
                        name="product_id"
                        value={product.product_id}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label>Category (Checkbox):</label>
                    {categories.map((cat) => (
                        <label key={cat} className="checkbox-label">
                            <input
                                type="checkbox"
                                name="category"
                                value={cat}
                                checked={product.category.includes(cat)}
                                onChange={handleInputChange}
                            />
                            {cat}
                        </label>
                    ))}
                </div>

                <div className="form-group">
                    <label htmlFor="product_name">Product Name (String):</label>
                    <input
                        type="text"
                        name="product_name"
                        value={product.product_name}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description (Text Area):</label>
                    <textarea
                        name="description"
                        value={product.description}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image (Upload as Base64):</label>
                    <input
                        type="file"
                        name="image"
                        multiple
                        accept="image/*"
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="price">Price (Numbers):</label>
                    <input
                        type="number"
                        name="price"
                        value={product.price}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="discount">Discount (Numbers):</label>
                    <input
                        type="number"
                        name="discount"
                        value={product.discount}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="product_rating">Product Rating (Float):</label>
                    <input
                        type="number"
                        step="0.1"
                        name="product_rating"
                        value={product.product_rating}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="brand">Brand (Text):</label>
                    <input
                        type="text"
                        name="brand"
                        value={product.brand}
                        onChange={handleInputChange}
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="product_specification">
                        Product Specification (String):
                    </label>
                    <input
                        type="text"
                        name="product_specification"
                        value={product.product_specification}
                        onChange={handleInputChange}
                    />
                </div>

                <button type="submit">Submit</button>
            </form>
        </div>
    );
}

export default ProductInput;
