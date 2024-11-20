// Add event listener for form submission
document.addEventListener('DOMContentLoaded', () => {
  const form = document.forms['submit-to-google-sheet'];
  const successMessage = document.createElement('div'); // Success message element

  // Style success message
  successMessage.style.display = 'none'; // Initially hidden
  successMessage.style.backgroundColor = '#d4edda';
  successMessage.style.color = '#155724';
  successMessage.style.padding = '10px';
  successMessage.style.marginTop = '15px';
  successMessage.style.border = '1px solid #c3e6cb';
  successMessage.style.borderRadius = '5px';
  successMessage.textContent = 'Form submitted successfully!';
  form.parentNode.insertBefore(successMessage, form.nextSibling); // Add message below form

  // Handle form submission
  form.addEventListener('submit', (e) => {
      e.preventDefault(); // Prevent default form submission

      // Send data to Google Sheets
      const scriptURL = 'https://script.google.com/macros/s/AKfycbzBHRXKfgvaZXBZHnWt6W5brUww_KGPriXAW3UH74HsXPefmw1RGk__oJkEXmzeSiQLqQ/exec';
      fetch(scriptURL, { method: 'POST', body: new FormData(form) })
          .then(response => {
              console.log('Success!', response);
              form.reset(); // Reset form fields
              successMessage.style.display = 'block'; // Show success message
              setTimeout(() => {
                  successMessage.style.display = 'none'; // Hide message after 5 seconds
              }, 5000); // 5 seconds timeout
          })
          .catch(error => console.error('Error!', error.message));
  });
});
