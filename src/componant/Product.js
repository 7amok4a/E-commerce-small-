import React, { useState } from 'react';
import './Product.css';
import { Link } from 'react-router-dom';

function Product(props) {
    const { product, showButton } = props;
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleDescription = () => {
        setIsExpanded(!isExpanded);
    };

    const productDescription = product?.description || '';

    return (
        <>
            <div className="card" style={{ width: '18rem' }}>
                <img src={product.image} className="card-img-top" alt="Product" />
                <div className="card-body">
                    <h5 className="card-title">{product.title}</h5>
                    <p className="card-text">
                        {isExpanded ? productDescription : `${productDescription.slice(0, 100)}...`}
                        {productDescription.length > 100 && (
                            <button className="btn btn-link" onClick={toggleDescription}>
                                {isExpanded ? 'Read Less' : 'Read More'}
                            </button>
                        )}
                    </p>
                    {showButton && (
                        <Link className="btn btn-primary" to={`/product/${product.id}`}>
                            Go somewhere
                        </Link>
                    )}
                </div>
            </div>
        </>
    );
}

export default Product;
