const textarea = document.getElementById('notes');
const saveButton = document.getElementById('saveButton');

// Load saved notes from storage
chrome.storage.sync.get(['stickyNotes'], function(result) {
  if (result.stickyNotes) {
    textarea.value = result.stickyNotes;
  }
});

// Save notes to storage
saveButton.addEventListener('click', function() {
  const notes = textarea.value;
  chrome.storage.sync.set({ stickyNotes: notes }, function() {
    console.log('Notes saved!');
  });
});
