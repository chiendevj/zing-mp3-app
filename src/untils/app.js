
import countries from 'i18n-iso-countries';
import 'i18n-iso-countries/langs/vi.json'; // Import Vietnamese locale
import 'i18n-iso-countries/langs/en.json'; // Import English locale

countries.registerLocale(require('i18n-iso-countries/langs/vi.json'));
countries.registerLocale(require('i18n-iso-countries/langs/en.json'));

// Format cắt chuỗi theo từ
export const truncateDescription = (description, maxLength) => {
    if (description.length <= maxLength) return description;
    const words = description.split(' ');
    let truncated = words[0];
    for (let i = 1; i < words.length; i++) {
        if ((truncated + ' ' + words[i]).length > maxLength) break;
        truncated += ' ' + words[i];
    }
    return truncated + '...';
};

export function getCountryCodeFromName(name) {
    // Attempt to get the country code using the Vietnamese locale
    let alpha2Code = countries.getAlpha2Code(name, 'vi');
    
    // If not found in Vietnamese locale, fallback to English locale
    if (!alpha2Code) {
        alpha2Code = countries.getAlpha2Code(name, 'en');
    }

    if (!alpha2Code) {
        return null; // Country name not found
    }

    return alpha2Code;
}


