//Figma display the UI
figma.showUI(__html__);

//Figma resize the UI to 420px by 400px
figma.ui.resize(400, 400)


function imageGeneration() {
    try {
      const userPrompt = document.querySelector("#user-prompt");

      const apiKey = document.querySelector("#api-key");

      const createButton = document.querySelector("#create-button");

      const resultImages = document.querySelector("#result-images");

      const userPromptValue = userPrompt.value;
      const apiKeyValue = apiKey.value;

      const handleImage = async () => {
        const openAIOptions = {
          model: "dall-e-3",
          prompt: userPromptValue,
          n: 2,
          size: "1024x1024",
        };

        const fetchUrl = "https://api.openai.com/v1/images/generations";

        const fetchOptions = {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${apiKeyValue}`,
          },
          body: JSON.stringify(openAIOptions),
        };

        const response = await fetch(fetchUrl, fetchOptions);
        const responseBody = response.json();
        const responseImageData = responseBody.data;

        responseImageData.forEach((x) => {
          const responseImageUrl = x.url;
          const newImageElement = document.createElement("img");
          newImageElement.src = responseImageUrl;
          resultImages.appendChild(newImageElement);
        });
      };

      createButton.addEventListener("click", handleImage);
    
    }
    catch (error) {console.log(error)}
}

imageGeneration();
  







