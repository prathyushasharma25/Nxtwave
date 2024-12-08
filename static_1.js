<script>
function showPage(pageId) {
    // Get all sections
    const sections = document.querySelectorAll('section');
    
    // Hide all sections
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the requested section
    document.getElementById(pageId).classList.add('active');
}
</script>