document.getElementById("chat-form").addEventListener("submit", async (event) => {
    event.preventDefault();
    const consigne = document.getElementById("consigne").value;
    const texte = document.getElementById("texte").value;
    const responseDiv = document.getElementById("response");

    responseDiv.innerHTML = ""; // Clear the response div

    const formData = new FormData();
    formData.append("consigne", consigne);
    formData.append("texte", texte);

    const response = await fetch("<url>/stream_chat", {
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
    }
});
