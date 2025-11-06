export async function sendToDeepSeekApi(codeLanguage, userQuestion = "") {
    loadAnimation();
    showToast("Processing your request...");

    try {
        const url = "https://openrouter.ai/api/v1/chat/completions";
        // const currentToken = "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";
        const currentToken = "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";
        const currentToken1 = "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";
        const currentToken2 = "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";
        const currentModel1 = "qwen/qwen2.5-vl-72b-instruct:nitro";
        const availableModels = [
            "qwen/qwen2.5-vl-72b-instruct:nitro",
            "meta-llama/llama-3.1-8b-instruct:free",  // Бесплатная
            "google/gemma-2-9b-it:free",             // Бесплатная
            "microsoft/wizardlm-2-8x22b:free",       // Бесплатная
            "qwen/qwen-2.5-7b-instruct:free",        // Облегченная версия
            "deepseek/deepseek-chat:free",           // Бесплатная DeepSeek
            "anthropic/claude-3.5-sonnet",           // Платная (если есть кредиты)
            "openai/gpt-3.5-turbo"                   // Платная
        ];
        const tokens = [
            "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",
            "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",  // Бесплатная
            "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",             // Бесплатная
            "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",       // Бесплатная
        ];

        const currentModel = availableModels[0];
        const currentToken = tokens[0];
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