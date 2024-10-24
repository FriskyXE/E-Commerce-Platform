export function createPriceMultiplier(multiplier: number): (price: number) => number {
    if (multiplier <= 0) {
        throw new Error("Multiplier must be greater than 0");
    }
    return (price: number) => price * multiplier;
}

export const applyTax = createPriceMultiplier(1.07);
