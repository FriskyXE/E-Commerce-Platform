export function createPriceMultiplier(multiplier: number): (price: number) => number {
    if (multiplier <= 0) {
        console.error("Multiplier must be greater than 0");
        return price => price;
    }
    return price => price * multiplier;
}

export const applyTax = createPriceMultiplier(1.07);
