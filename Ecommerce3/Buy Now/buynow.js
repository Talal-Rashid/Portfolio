function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    sidebar.style.display = sidebar.style.display === 'block' ? 'none' : 'block';
}

function showCategory(category) {
    const centerCategories = document.getElementById('center-categories');
    const categoryContent = document.getElementById('category-content');
    
    centerCategories.style.display = 'none';
    categoryContent.style.display = 'block';

    let content = '';
    switch (category) {
        case 'pre-built':
            content = `
                <div class="category">
                    <h3>Pre-Built PCs</h3>
                    <div class="product-card">Product 1</div>
                    <div class="product-card">Product 2</div>
                    <div class="product-card">Product 3</div>
                </div>`;
            break;
        case 'custom-build':
            content = `
                <div class="category">
                    <h3>Custom Build PCs</h3>
                    <div class="product-card">Product 1</div>
                    <div class="product-card">Product 2</div>
                    <div class="product-card">Product 3</div>
                </div>`;
            break;
        case 'cpu':
            content = `
                <div class="category">
                    <h3>CPUs</h3>
                    <div class="product-card">Product 1</div>
                    <div class="product-card">Product 2</div>
                    <div class="product-card">Product 3</div>
                </div>`;
            break;
        case 'gpu':
            content = `
                <div class="category">
                    <h3>GPUs</h3>
                    <div class="product-card">Product 1</div>
                    <div class="product-card">Product 2</div>
                    <div class="product-card">Product 3</div>
                </div>`;
            break;
        // Add cases for other categories similarly
        default:
            content = '<h3>No products available for this category</h3>';
            break;
    }

    categoryContent.innerHTML = content;
}
