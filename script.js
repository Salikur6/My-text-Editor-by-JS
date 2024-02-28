document.getElementById('bold-btn').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');

    if (textArea.style.fontWeight == '700') {
        textArea.style.fontWeight = '400';
    } else {
        textArea.style.fontWeight = '700';
    }
})

// italic button --------------
document.getElementById('italic-btn').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');

    ;
    if (textArea.style.fontStyle == 'italic') {
        textArea.style.fontStyle = 'normal'
    } else {
        textArea.style.fontStyle = 'italic'
    }
})


// underline button ------------


document.getElementById('underline-btn').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');


    if (textArea.style.textDecoration == 'underline') {
        textArea.style.textDecoration = 'none'
    } else {
        textArea.style.textDecoration = 'underline'
    }
})

// ===================
// text align left --------------

document.getElementById('text-left').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');

    if (textArea.style.textAlign == 'left') {
        textArea.style.textAlign = 'left'
    } else {
        textArea.style.textAlign = 'left';
    }
})


// text align center --------------

document.getElementById('text-center').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');

    if (textArea.style.textAlign == 'center') {
        textArea.style.textAlign = 'left'
    } else {
        textArea.style.textAlign = 'center';
    }
})


// text align right --------------

document.getElementById('text-right').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');

    if (textArea.style.textAlign == 'right') {
        textArea.style.textAlign = 'left'
    } else {
        textArea.style.textAlign = 'right';
    }
})


// text align justify --------------

document.getElementById('text-justify').addEventListener('click', function () {
    const textArea = document.getElementById('text-area');

    if (textArea.style.textAlign == 'justify') {
        textArea.style.textAlign = 'left'
    } else {
        textArea.style.textAlign = 'justify';
    }
})


// font size change ---------------------------------

// document.getElementById('font-size').addEventListener('click', function () {
//     const inputFontSize = document.getElementById('font-size').value;
//     const textArea = document.getElementById('text-area');
//     console.log(textArea.innerText)

//     textArea.style.fontSize = inputFontSize + 'px';

// })

const fontSize = document.getElementById('font-size');

['click', 'keyup'].forEach(ev => {
    fontSize.addEventListener(ev, function () {
        const inputFontSize = document.getElementById('font-size').value;

        const textArea = document.getElementById('text-area');
        textArea.style.fontSize = inputFontSize + 'px';

    })
})









document.getElementById('input-color').addEventListener('input', function () {
    const inputColor = document.getElementById('input-color');
    const textArea = document.getElementById('text-area');

    textArea.style.color = inputColor.value;

})
