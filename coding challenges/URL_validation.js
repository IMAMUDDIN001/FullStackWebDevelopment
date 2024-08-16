// 5. URL validation.
// Define a regex pattern for URL validation
const urlPattern = /^(http:\/\/|https:\/\/)[\w-]+(\.[\w-]+)+$/;

// Function to validate a URL
function validateURL(url) {
    if (urlPattern.test(url)) {
        console.log("The URL is valid.");
    } else {
        console.log("The URL is invalid.");
    }
}

// Example URLs to test
const testURLs = [
    "http://example.com",
    "https://example.com",
    "http://example.co.uk",
    "https://example",
    "ftp://example.com",
    "http://123.456.78.90",
    "https://example.com/page",
    "http://-example.com",
    "https://example.c"
];

// Validate each URL
testURLs.forEach(url => validateURL(url));
