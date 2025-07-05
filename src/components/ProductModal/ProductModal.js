import React, { useEffect } from 'react';

import './ProductModal.css';

const ProductModal = ({ product, onClose }) => {
   /* ── Lock page scroll while modal is open ── */
  useEffect(() => {
    if (product) {
      document.body.classList.add('modal-open');
    } else {
      document.body.classList.remove('modal-open');
    }
    /* Safety cleanup if the modal unmounts */
    return () => document.body.classList.remove('modal-open');
  }, [product]);

  if (!product) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>

        <img
          src={require(`../../assets/${product.image}`)}
          alt={product.title}
          className="modal-img"
        />
        <h2 className="modal-title">{product.title}</h2>

        <div className="modal-details">
            <table className="product-table">
                <thead>
                    <tr>
                      {product.headers.map(header => (
                        <th>{header}</th>
                      ))}
                    </tr>
                </thead>
                <tbody>
                    {product.variants.map((row, idx) => (
                        <tr key={idx}>
                          {row.map(value => (
                            <td>{value}</td>
                          ))}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
