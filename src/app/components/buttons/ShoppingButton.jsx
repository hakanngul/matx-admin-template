import React, { useState } from 'react';
import './ShoppingButton.css'; // CSS dosyasını ayrı bir dosyada tutuyoruz

const ShoppingButton = () => {
    const [added, setAdded] = useState(false); // Butonun 'added' durumunu yönetmek için state kullanıyoruz

    const handleAddToCart = () => {
        setAdded(true);
        setTimeout(() => {
            setAdded(false); // 2 saniye sonra durumu geri döndür
        }, 2000);
    };

    return (
        <div className="container">
            <button
                className={`add-to-cart-button ${added ? 'added' : ''}`}
                onClick={handleAddToCart}
            >
                <svg className="add-to-cart-box box-1" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="2" fill="#ffffff" />
                </svg>
                <svg className="add-to-cart-box box-2" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="24" height="24" rx="2" fill="#ffffff" />
                </svg>
                <svg className="cart-icon" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="9" cy="21" r="1"></circle>
                    <circle cx="20" cy="21" r="1"></circle>
                    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path>
                </svg>
                <svg className="tick" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                    <path fill="none" d="M0 0h24v24H0V0z" />
                    <path fill="#ffffff" d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zM9.29 16.29L5.7 12.7c-.39-.39-.39-1.02 0-1.41.39-.39 1.02-.39 1.41 0L10 14.17l6.88-6.88c.39-.39 1.02-.39 1.41 0 .39.39.39 1.02 0 1.41l-7.59 7.59c-.38.39-1.02.39-1.41 0z" />
                </svg>
                <span className="add-to-cart">Add to cart</span>
                <span className="added-to-cart">Added to cart</span>
            </button>
        </div>
    );
};

export default ShoppingButton;