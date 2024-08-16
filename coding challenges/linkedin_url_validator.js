// 6. LinkedIn Profile URL Validator.
// Define the regex pattern for LinkedIn profile URL validation
const linkedinPattern = /^https:\/\/www\.linkedin\.com\/in\/[a-zA-Z0-9_-]{5,30}[a-zA-Z0-9]$/;

// Function to validate a LinkedIn profile URL
function validateLinkedInURL(url) {
    if (linkedinPattern.test(url)) {
        console.log("The LinkedIn profile URL is valid.");
    } else {
        console.log("The LinkedIn profile URL is invalid.");
    }
}

// Example URLs to test
const testURLs = [
    "https://www.linkedin.com/in/imamuddinshaikh421302", //self
    "https://www.linkedin.com/in/johndoe",
    "https://www.linkedin.com/in/john_doe",
    "https://www.linkedin.com/in/john-doe123",
    "https://www.linkedin.com/in/john_doe_12345",
    "https://www.linkedin.com/in/johndoe123456789012345678901234567890", // Too long
    "https://www.linkedin.com/in/johndoe1234!", // Contains invalid character
    "http://www.linkedin.com/in/johndoe", // Incorrect scheme
    "https://www.linkedin.com/johndoe", // Incorrect path
    "https://www.linkedin.com/in/johndoe12345@", // Contains invalid character
    "https://www.linkedin.com/in/" // Too short
];

// Validate each URL
testURLs.forEach(url => validateLinkedInURL(url));

