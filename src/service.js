const API_URL = "http://localhost:8010/proxy/carParts";

export const fetchProducts = async (searchQuery = '') => {
    try {
        const response = await fetch(`${API_URL}/allParts?queryParams=${searchQuery}`, {
            method: 'GET',
            "Access-Control-Allow-Origin": '*'
        });

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching products:', error);
        throw error; // Propagate error to be handled by the caller
    }
};

export const addProduct = async (product) => {
    try {
        const response = await fetch(API_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(product),
        });

        return await response.json();
    } catch (error) {
        console.error('Error adding product:', error);
        throw error;
    }
};