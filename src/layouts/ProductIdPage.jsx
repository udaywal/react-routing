import React from 'react';
import { useParams, useLocation } from 'react-router';

function useQuery() {
    return new URLSearchParams(useLocation().search)
}

function ProductIdPage() {

    /* @CONCEPT - Hook to grab the url params from the url */
    const { id } = useParams();
    /* @CONCEPT - Hook to grab the query params from the url */
    const query = useQuery();

    return (
        <div>
            <h4>Product Id Page: {id}</h4>
            <h5>Query if exist: {query.get('name')}</h5>
        </div>
    )
}

export default ProductIdPage;
