interface ProductData {
    name: string;
    price: number;
    category: string;
}

export async function fetchProductData(): Promise<ProductData> {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const success = Math.random() > 0.2; // Simulate 80% success rate
            if (success) {
                resolve({ name: 'Monitor', price: 300, category: 'Electronics' });
            } else {
                reject('Failed to fetch product data');
            }
        }, 1000);
    });
}

export async function displayProductData(): Promise<void> {
    try {
        const data = await fetchProductData();
        console.log(data);
    } catch (error) {
        console.error(error);
    }
}
