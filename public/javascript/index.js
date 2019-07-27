editor.setValue('#include<stdio.h>\nint main(){\nprintf("Hello world");\n}')
function handleLangChange() {
    let changedTo = document.querySelector("#lang").value
    switch(changedTo) {
        case "1":
            editor.session.setMode("ace/mode/c_cpp");
            break;
        case "2":
            editor.session.setMode("ace/mode/c_cpp");
            break;
        case "3":
            editor.session.setMode("ace/mode/python");
            break;
        case "4":
            editor.session.setMode("ace/mode/java");
            break;
    }
}

function handleSubmit() {
    let data = {
        code: document.querySelector("#lang").value,
        source: editor.getValue(),
        input: document.querySelector("#input-text").value
    }
    fetch("/compile", 
        {
            method: 'POST',
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            },
            body: JSON.stringify(data)
        }
    )
    .then((res) => {
        return res.json();
    })
    .then((res) => {
        console.log(res);
        let op = document.querySelector("#output-text");
        op.innerText = res.stdout || res.stderr;
    })
}