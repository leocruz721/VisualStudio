// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

// Write your JavaScript code.
// JavaScript to create a simple animation effect (changing background color)
let colors = ['#f0f0f0', '#ffebcd', '#e6e6fa', '#f5f5dc'];
let currentColor = 0;

setInterval(() => {
    document.body.style.backgroundColor = colors[currentColor];
    currentColor = (currentColor + 1) % colors.length;
}, 3000); // Change background color every 3 seconds
