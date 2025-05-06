const countrySelect = document.getElementById('countrySelect');
const shopButton = document.getElementById('shopButton');

countrySelect.addEventListener('change', function() {
    shopButton.disabled = !this.value;
});

shopButton.addEventListener('click', function() {
    const selectedCountry = countrySelect.options[countrySelect.selectedIndex].text;
    window.open('halaman.html', '_blank'); 
});
