function toggleVisibility() 
{
    var demo = document.getElementById('Greeting');
    if (demo.style.display === 'none' || demo.style.display === '') 
    {
        demo.style.display = 'block'; // Unhide the element
    } 
    else 
    {
        demo.style.display = 'none'; // Hide the element
    }
}