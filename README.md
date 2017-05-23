# GiphyFun

### What you can do

- This app allows a user to select category button that will display 10 gifs from that category.

- The .gif can be "played" by clicking on the image.

- Custom categories can be added through a form.

### How it works

- jQuery provides the primary functionality for the app.

- The buttons are generated from a list of category names and injected into the DOM.

- When a button is clicked, an AJAX request is sent to the Giphy API then the static image and .gif are saved from the response and the static image is displayed in the results section.

- When an image is clicked, the static image is replaced with the .gif, giving a play/pause effect.

- New categories are added by getting the value of the user input from the form and adding it as a `data` attribute on a newly generated button.