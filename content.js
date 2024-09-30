let timeout;

function addCustomDiv() {
    if (timeout) clearTimeout(timeout);
    timeout = setTimeout(() => {
        const messageElements = document.querySelectorAll('.message-in, .message-out');

        messageElements.forEach(message => {
            // Check if the custom div already exists to avoid duplicates
            if (!message.querySelector('.custom-div')) {
                const customDiv = document.createElement('div');

                // Get the message text
                const messageText = message.querySelector('.selectable-text')?.innerText || "No text available";

                // Set the custom div content to the same message text
                customDiv.innerText = messageText;
                customDiv.classList.add('custom-div'); // Add a class for identification
                customDiv.style.marginTop = "10px";

                // Style based on message type
                if (message.classList.contains('message-out')) {
                    customDiv.style.textAlign = "right"; // Align for outgoing messages
                    customDiv.style.color = "green"; // Optional: Change color for outgoing
                } else {
                    customDiv.style.textAlign = "left"; // Align for incoming messages
                    customDiv.style.color = "blue"; // Optional: Change color for incoming
                }

                // Append the custom div as the last child of the message
                message.appendChild(customDiv);
            }
        });
    }, 300); // Adjust the debounce time as needed
}

// Observe changes in the DOM
const observer = new MutationObserver(addCustomDiv);
observer.observe(document.body, { childList: true, subtree: true });


