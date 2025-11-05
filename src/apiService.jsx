export async function sendToDeepSeekApi(codeLanguage, userQuestion = "") {
    loadAnimation();
    showToast("Processing your request...");

    try {
        const url = "https://openrouter.ai/api/v1/chat/completions";
        const currentToken = "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";
        const currentModel = "qwen/qwen2.5-vl-72b-instruct:nitro";
        const savedCode = localStorage.getItem("selected_filter") || "";

        const requestBody = {
            model: currentModel,
            messages: [
                {
                    role: "user",
                    content: userQuestion || `
                        Provide general medicine information in ${codeLanguage}:
                        - Common drug categories
                        - Usage guidelines  
                        - Dosage information
                        - Contraindications
                        - Safety precautions
                        ${savedCode ? `Focus on: ${savedCode}` : ''}
                    `.trim()
                }
            ],
            max_tokens: 800,
            temperature: 0.1
        };

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${currentToken}`,
                'Content-Type': 'application/json',
                'HTTP-Referer': window.location.origin || 'https://yourapp.com',
                'X-Title': 'Medicine Scanner'
            },
            body: JSON.stringify(requestBody)
        });

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const data = await response.json();
        const content = data.choices[0].message.content;
        showAnalysisResult(content);

        playAnimation("hero.json");
        return content;

    } catch (error) {
        const errorMessage = `Error: ${error.message}`;
        showAnalysisResult(errorMessage);
        playAnimation("hero.json");
        return errorMessage;
    }
}

// Helper functions
function loadAnimation() {
    console.log("Loading animation started");
}

function showToast(message) {
    console.log("Toast:", message);
}

function showAnalysisResult(content) {
    console.log("Analysis Result:", content);
}

function playAnimation(animationFile) {
    console.log("Playing animation:", animationFile);
}