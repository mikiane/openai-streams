async function openaireq(consigne, texte){

    console.log("infunc");
    const formData = new FormData();
    console.log("Consigne:", consigne);
    console.log("Texte:", texte);
    formData.append("consigne", consigne);
    formData.append("texte", texte);
    
    const response = await fetch("https://mikianeopenaiapi.herokuapp.com/stream_chat", 
    { 
        method: "POST",
        body: formData,
    });
            
    const reader = response.body.getReader();
    const textDecoder = new TextDecoder("utf-8");
            
    while (true) {
        const { value, done } = await reader.read();
        if (done) break;
        const chunk = textDecoder.decode(value);
        // responseDiv.innerHTML += chunk;
       console.log(chunk);
    }
    }
    
    
    
    
    var consigne = "développer ce texte";
    var texte = "ceci est un texte à développer";
    
    console.log("Helo");
    
    
    openaireq(consigne, texte);