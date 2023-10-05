document.addEventListener("DOMContentLoaded", function(){
    let removeElementInterval = null;
    const removeElementDelay = 3000;
    const resizerElementId = 'breakPoints';
    const breakPointToolRemoveResizerElement = function(){
        if(document.getElementById(resizerElementId)){
            document.getElementById(resizerElementId).classList.add('-translate-y-full');
            document.getElementById(resizerElementId).classList.remove('mt-3');
            setTimeout(function(){
                document.getElementById(resizerElementId).remove();
            }, 500);
        }
    }
    
    window.addEventListener('resize', function(event){
        
        const currentWidth = window.innerWidth;
        const responsiveSizeEl = document.createElement("div");
        responsiveSizeEl.id = resizerElementId;
        responsiveSizeEl.className = 'fixed top-0 ease-out duration-300 flex -translate-y-full items-center w-auto px-2 py-1  text-xs text-gray-200 -translate-x-1/2 border rounded-full border-neutral-200/50 dark:border-neutral-700/70 shadow-3xl backdrop-blur-lg bg-white/80 dark:bg-neutral-900 left-1/2'
        responsiveSizeEl.style.zIndex = 9999;

        if(!document.getElementById(resizerElementId)){
            const responsiveSizeHTML = `
                    <div class="px-1.5 py-px font-bold bg-blue-500 rounded-full">
                        <span class="inline-block sm:hidden">XS</span>
                        <span class="hidden sm:inline-block md:hidden">SM</span>
                        <span class="hidden md:inline-block lg:hidden">MD</span>
                        <span class="hidden lg:inline-block xl:hidden">LG</span>
                        <span class="hidden xl:inline-block">XL</span>
                    </div>
                    <span class="px-2 py-1 text-black dark:text-white"><span id="currentWidth">${currentWidth}</span>px</span>
                    <span id="resizerElementCloseButton" class="flex items-center justify-center w-5 h-5 text-gray-500 rounded-full cursor-pointer dark:text-neutral-300 bg-neutral-200/60 dark:bg-neutral-700/80 dark:hover:bg-neutral-700 hover:bg-neutral-200">
                        <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>
                    </span>
                `;
            responsiveSizeEl.innerHTML = responsiveSizeHTML;
            document.body.appendChild(responsiveSizeEl);
            setTimeout(function(){
                document.getElementById('resizerElementCloseButton').addEventListener('click', function(event){
                    breakPointToolRemoveResizerElement();
                });
                responsiveSizeEl.classList.remove('-translate-y-full');
                responsiveSizeEl.classList.add('mt-3');
            }, 1);
        }

        document.getElementById('currentWidth').innerText = currentWidth;

        clearInterval(removeElementInterval);
        removeElementInterval = setInterval(function(){
            breakPointToolRemoveResizerElement();
        }, removeElementDelay);
        
    });
});