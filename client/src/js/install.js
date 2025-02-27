const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event
window.addEventListener('beforeinstallprompt', (event) => {
    event.preventDefault();
    window.deferredPrompt = event;
    butInstall.style.display = 'block';

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    butInstall.style.display = 'none';
    event.prompt();
    const { outcome } = await event.userChoice;
    console.log(`User response to the install prompt: ${outcome}`);
    window.deferredPrompt = null;
  });
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {
    console.log('PWA was installed', event);
    // Clear the deferred prompt variable
    window.deferredPrompt = null;
  });
