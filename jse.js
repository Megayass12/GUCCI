const products = [
  {
    defaultImage: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1739468753/837267_AAE38_1000_001_066_0000_Light-GG-Marmont-medium-shoulder-bag.jpg',
    hoverImage: 'ho1.avif',
    name: 'GG Marmont Medium Shoulder Bag',
    isNew: true
  },
  {
    defaultImage: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1739469684/837267_AAE38_2718_001_066_0014_Light-GG-Marmont-medium-shoulder-bag.jpg',
    hoverImage: 'ho2.avif',
    name: 'GG Marmont Medium Shoulder Bag',
    isNew: true
  },
  {
    defaultImage: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1739469702/837280_AAE38_9050_001_055_0000_Light-GG-Marmont-small-shoulder-bag.jpg',
    hoverImage: 'ho3.avif',
    name: 'GG Marmont Medium Shoulder Bag',
    isNew: true
  },
  {
    defaultImage: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1739469690/837267_AAE38_6207_001_066_0014_Light-GG-Marmont-medium-shoulder-bag.jpg',
    hoverImage: 'ho4.avif',
    name: 'GG Marmont Medium Shoulder Bag',
    isNew: true
  },
  {
    defaultImage: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1739469714/838985_AAE38_1000_001_074_0000_Light-GG-Marmont-large-shoulder-bag.jpg',
    hoverImage: 'ho5.avif',
    name: 'GG Marmont Large Shoulder Bag',
    isNew: true
  },
  {
    defaultImage: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1742542263/837280_AAE38_1000_001_055_0000_Light-GG-Marmont-small-shoulder-bag.jpg',
    hoverImage: 'ho6.avif',
    name: 'GG Marmont Medium Shoulder Bag',
    isNew: true
  },
  {
    defaultImage: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1744911955/838985_AAE38_6207_001_074_0000_Light-GG-Marmont-large-shoulder-bag.jpg',
    hoverImage: 'ho7.avif',
    name: 'GG Marmont Large Shoulder Bag',
    isNew: true
  },
  {
    defaultImage: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1739298673/837280_AAE38_6207_001_055_0000_Light-GG-Marmont-small-shoulder-bag.jpg',
    hoverImage: 'ho8.avif',
    name: 'GG Marmont Small Shoulder Bag',
    isNew: true
  },
  {
    defaultImage: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1739469702/837280_AAE38_9050_001_055_0000_Light-GG-Marmont-small-shoulder-bag.jpg',
    hoverImage: 'ho9.avif',
    name: 'GG Marmont Small Shoulder Bag',
    isNew: true
  },
  {
    defaultImage: 'https://media.gucci.com/style/DarkGray_Center_0_0_800x800/1743012120/837267_AAFA1_3520_001_066_0012_Light-GG-Marmont-medium-shoulder-bag.jpg',
    hoverImage: 'ho10.avif',
    name: 'GG Marmont Medium Shoulder Bag',
    isNew: true
  },
];

const productList = document.getElementById('product-list');
products.forEach(product => {
  const productItem = document.createElement('div');
  productItem.className = 'product-item';
  
  const productImage = document.createElement('img');
  productImage.src = product.defaultImage;
  productImage.alt = product.name;
  productImage.style.width = '100%';
  productImage.style.display = 'block';

  const viewButton = document.createElement('div');
  viewButton.className = 'view-product';
  viewButton.innerHTML = `
    <div style="margin-top: 10px; font-size: 14px; font-weight: bold;">${product.name}</div>
    <a href="detail.html" style="display: inline-block; margin-top: 5px; font-size: 12px; border-bottom: 1px solid black; text-decoration: none; color: black;">VIEW PRODUCT</a>
  `;
  viewButton.style.opacity = '0';  
  viewButton.style.transition = 'opacity 0.3s'; 
  viewButton.style.pointerEvents = 'none'; 

  productItem.appendChild(productImage);
  productItem.appendChild(viewButton);
  productList.appendChild(productItem);

  productItem.addEventListener('mouseenter', () => {
    productImage.src = product.hoverImage;
    viewButton.style.opacity = '1'; 
    viewButton.style.pointerEvents = 'auto';
  });

  productItem.addEventListener('mouseleave', () => {
    productImage.src = product.defaultImage;
    viewButton.style.opacity = '0'; 
    viewButton.style.pointerEvents = 'none';
  });
});

  function viewAll() {
    alert('Redirect to full collection page!');
  }

  window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("scrolled");
    } else {
      navbar.classList.remove("scrolled");
    }
  });

