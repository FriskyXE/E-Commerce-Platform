$('#productForm').on('submit', function (e) {
    e.preventDefault();

    const name = $('#productName').val();
    const price = parseFloat($('#productPrice').val());

    if (!name || isNaN(price) || price <= 0) {
        alert('Invalid input. Please check your inputs and try again.');
        return;
    }

    $('#productTable').append(`<tr><td>${name}</td><td>$${price.toFixed(2)}</td></tr>`);

    alert('Product added successfully!');
});
