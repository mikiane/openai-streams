function escapeSpecialChars(text) {
    const regex = /[^a-zA-ZÀ-ÿ0-9\s\.\?,!'%]+/g;
    return text.replace(regex, (match) => encodeURIComponent(match));
  }
  
  
  async function openaireq(consigne, texte) {
    console.log("infunc");
    const formData = new FormData();
    const encodedConsigne = escapeSpecialChars(consigne);
    const encodedTexte = escapeSpecialChars(texte);
    console.log("Consigne:", encodedConsigne);
    console.log("Texte:", encodedTexte);
    formData.append("consigne", encodedConsigne);
    formData.append("texte", encodedTexte);
  
    const response = await fetch("https://backend.brightness-agency.com/stream_chat", {
      method: "POST",
      body: formData,
    });
  
    const reader = response.body.getReader();
    const textDecoder = new TextDecoder("utf-8");
          
  while (true) {
      const { value, done } = await reader.read();
      if (done) break;
      const chunk = textDecoder.decode(value);
      responseDiv.innerHTML += chunk;
     console.log(chunk);
  }
  }
  
    
    var consigne = "développer ce texte";
    var texte = "ceci est un texte à développer";
    
    console.log("Helo");
    
    
    openaireq(consigne, texte);