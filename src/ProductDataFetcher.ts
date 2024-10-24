interface ProductData {
    name: string;
    price: number;
    category: string;
}

export async function fetchProductData(): Promise<ProductData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2;
            if (success) {
                resolve({ name: 'Monitor', price: 299.99, category: 'Electronics' });
            } else {
                reject('Error: Failed to fetch product data');
            }
        }, 1000);
    });
}

export async function displayProductData(): Promise<void> {
    try {
        const data = await fetchProductData();
        console.log('Fetched product data:', data);
    } catch (error) {
        console.error(error);
    }
}
