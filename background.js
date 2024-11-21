chrome.action.onClicked.addListener(async (tab) => {
    // Check if we're on a GitHub page
    if (tab.url.includes('github.com')) {
      // Convert GitHub URL to MKView URL
      const mkviewUrl = `https://mkview.tech/${tab.url}`;
      
      // Open in new tab
      chrome.tabs.create({ url: mkviewUrl });
    }
  });