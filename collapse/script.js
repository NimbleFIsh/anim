"use strict"

window.addEventListener('load', () =>
    Array.from(document.getElementsByClassName('button-collapse')).forEach(el =>
        el.addEventListener('click', e => {
            e.target.parentNode.classList.toggle('active');
            const panel = e.target.nextElementSibling;
            panel.style.maxHeight = panel.style.maxHeight ? null : `${panel.scrollHeight}px`;
        })
    )
);