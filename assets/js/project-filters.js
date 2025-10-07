document.addEventListener('DOMContentLoaded', function() {
    const filterButtons = document.querySelectorAll('.btn-filter');
    const projectItems = document.querySelectorAll('.project-grid .project-item');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', () => {
            const filter = button.getAttribute('data-filter');
            
            // Update active button
            filterButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');
            
            // Filter projects
            projectItems.forEach(item => {
                const tagsAttr = item.getAttribute('data-tags');
                const tags = tagsAttr ? tagsAttr.split(',').map(tag => tag.trim()) : [];
                
                if (filter === 'all') {
                    item.classList.remove('hidden');
                } else {
                    if (tags.some(tag => tag === filter)) {
                        item.classList.remove('hidden');
                    } else {
                        item.classList.add('hidden');
                    }
                }
            });
        });
    });
});