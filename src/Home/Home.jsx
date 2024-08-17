import React, { useEffect, useState } from 'react';

import { Product } from './Product';
import { Helmet } from 'react-helmet-async';

export const Home = () => {
    const [product, setproduct] = useState([]);
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');
    const [debouncedSearchTerm, setDebouncedSearchTerm] = useState('');
    const [categoryFilter, setCategoryFilter] = useState('');
    const [brandFilter, setBrandFilter] = useState('');
    const [priceFilter, setPriceFilter] = useState('');
    const [sortOption, setSortOption] = useState('');

    
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [itemsPerPage] = useState(10); 

    // Debounce the search term
    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedSearchTerm(searchTerm);
        }, 300); 

        return () => {
            clearTimeout(handler);
        };
    }, [searchTerm]);

  
    const fetchproducts = () => {
        setLoading(true);

        const queryParams = new URLSearchParams({
            page: currentPage,
            limit: itemsPerPage,
            searchTerm: debouncedSearchTerm || '',
            category: categoryFilter || '',
            brand: brandFilter || '',
            price: priceFilter || '',
            sort: sortOption || ''
        });

        fetch(`https://job-task-server-five-kappa.vercel.app/products?${queryParams.toString()}`)
            .then(res => res.json())
            .then(data => {
                setproduct(data.products);
                setTotalPages(data.totalPages);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching data:', error);
                setLoading(false);
            });
    };

    useEffect(() => {
        fetchproducts();
    }, [currentPage, debouncedSearchTerm, categoryFilter, brandFilter, priceFilter, sortOption]);

    const handlePreviousPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    if (loading) {
        return <div>Loading...</div>;
    }

    return (
        <div>
            <Helmet>
                <title>Bacis Store | Home</title>
                <link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png" />
            </Helmet>

            
            <h2 className="text-4xl text-center my-12 font-bold text-sky-800">All products</h2>

            {/* Search Bar */}
            <div className="flex justify-center mb-6">
                <input
                    type="text"
                    placeholder="Search products by name..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                    className="input input-bordered w-full max-w-xs"
                />
            </div>

            {/* Filters */}
            <div className="flex justify-center flex-col lg:flex-row gap-4 mb-8 mx-24 lg:mx-2">
                <select
                    className="select select-bordered"
                    value={categoryFilter}
                    onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option value="">All Categories</option>
                    <option value="Smartphone">Smartphone</option>
                    <option value="Television">Television</option>
                    <option value="Laptop">Laptop</option>
                   
                </select>

                <select
                    className="select select-bordered"
                    value={brandFilter}
                    onChange={(e) => setBrandFilter(e.target.value)}>
                    <option value="">All Brands</option>
                    <option value="Samsung">Samsung</option>
                    <option value="Sony">Sony</option>
                    <option value="Apple">Apple</option>
                    <option value="Dell">Dell</option>
                    <option value="Bose">Bose</option>
                    <option value="Canon">Canon</option>
                    <option value="Nikon">Nikon</option>
                    <option value="LG">LG</option>
                    <option value="Google<">Google</option>
                </select>

                <select
                    className="select select-bordered"
                    value={priceFilter}
                    onChange={(e) => setPriceFilter(e.target.value)}>
                    <option value="">All Price Ranges</option>
                    <option value="under50">Under $50</option>
                    <option value="50To100">$50 - $100</option>
                    <option value="over100">Over $100</option>
                </select>

                <select
                    className="select select-bordered"
                    value={sortOption}
                    onChange={(e) => setSortOption(e.target.value)}>
                    <option value="">Sort by</option>
                    <option value="priceLowToHigh">Price: Low to High</option>
                    <option value="priceHighToLow">Price: High to Low</option>
                    <option value="newestFirst">Newest First</option>
                </select>
            </div>

            {/* Displaying products */}
            <div className="grid lg:grid-cols-3 sm:grid-cols-1 md:grid-cols-2 gap-y-5 mx-24 lg:mx-8 md:mx-12 sm:mx-24 ml-12 gap-12">
                {
                    product?.map(product => <Product key={product._id} product={product}></Product>)
                }
            </div>

            {/* Pagination Controls */}
            <div className="flex justify-center my-8 gap-4">
                <button
                    className="btn"
                    onClick={handlePreviousPage}
                    disabled={currentPage === 1}>
                    Previous
                </button>
                <span>Page {currentPage} of {totalPages}</span>
                <button
                    className="btn"
                    onClick={handleNextPage}
                    disabled={currentPage === totalPages}>
                    Next
                </button>
            </div>
        </div>
    );
};
