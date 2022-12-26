import React, { useEffect, useState } from 'react';
import ProductWishlistCard from "../../Cards/ProductWishlistCard/ProductWishlistCard";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../../actions/productActions";
import Message from '../../Message';
import Loader from '../../Loader';
import ReactPaginate from "react-paginate";
import { useNavigate, useParams, useLocation, useSearchParams, Link } from "react-router-dom";
import { addToWishlist, removeFromWishlist } from "../../../../actions/wishlistActions";

import "./WishlistPart.css";

function WishlistPart() {
  // const { id } = useParams();
  // const { state } = useLocation()

  // const productId = id

  const wishlist = useSelector(state => state.wishlist)
  const { wishlistItems } = wishlist

  // console.log(wishlist)

  // const dispatch = useDispatch();

  // const productList = useSelector(state => state.productList)
  // const { loading, error, products } = productList

  // useEffect(() => {
  //   dispatch(listProducts())
  // }, [dispatch]);

  // useEffect(() => {
  //   if (productId) {
  //     dispatch(addToWishlist(productId))
  //   }
  // }, [dispatch, productId])

  /////////////////////////////////////////////////////////////////
  const [itemOffset, setItemOffset] = useState(0);
  const itemsPerPage = 12;

  const endOffset = itemOffset + itemsPerPage;
  const currentItems = wishlistItems.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(wishlistItems.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % wishlistItems.length;
    setItemOffset(newOffset);
  };
  /////////////////////////////////////////////////////////////////

  return (
    <section className="part-wishlist-items">
      <div className="part-wishlist-items-part">
        <div className="part-wishlist-topic-part">
          <h4 className="part-wishlist-topic-part-h4">Wishlist</h4>
        </div>

        <div className="part-wishlist-item-part-sample">

        {/* {loading ? <Loader /> : error ? <Message varinat="danger">{error}</Message> : 
          <div className="product-choice">
            {currentItems?.map((product) => (
              <div className="product-choice-part" key={product._id}>
                <ProductWishlistCard product={product} />
              </div>
            ))}
          </div>
        } */}

        {wishlistItems.length === 0 ? <Message>Your wishlist is empty <Link to='/'>Go Back</Link></Message> : 
          <div className="product-choice">
            {currentItems?.map((item) => (
              <div className="product-choice-part" key={item.product}>
                <ProductWishlistCard item={item} />
              </div>
            ))}
          </div>
        }

        </div>

        {wishlistItems.length === 0 ? <Message></Message> : 
          <ReactPaginate
            breakLabel="..."
            nextLabel="next >"
            onPageChange={handlePageClick}
            pageRangeDisplayed={3}
            pageCount={pageCount}
            previousLabel="< previous"
            renderOnZeroPageCount={null}
            containerClassName="pagination"
            pageLinkClassName="page-num"
            previousLinkClassName="page-num"
            nextLinkClassName="page-num"
            activeLinkClassName="active"
          />
        }
      </div>
    </section>
  );
}

export default WishlistPart;