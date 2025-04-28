import React from "react";

async function ProductDetail({params}: {params: {productId: string}}) {
    // With async component, params is properly handled
    const {productId} = await params;

    return <div>ProductDetail : {productId}</div>;
}

export default ProductDetail;
