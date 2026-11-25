/**
 * WebMCP Tools for Criaphore (criaphore.com)
 * Compatible with W3C WebMCP 2026 (document.modelContext and navigator.modelContext).
 */

(function () {
    const modelContext = document.modelContext || (window.navigator && window.navigator.modelContext);
    if (!modelContext || typeof modelContext.registerTool !== 'function') {
        return;
    }

    modelContext.registerTool({
        name: "listCriaphoreApps",
        description: "List active and archived AI-native mobile applications built by Criaphore, with links and store URLs.",
        inputSchema: {
            type: "object",
            properties: {}
        },
        execute: () => ({
            content: [{
                type: "text",
                text: [
                    "Criaphore (https://criaphore.com/) - AI-native mobile applications studio founded by Brian Giannini (https://briangiannini.com/).",
                    "",
                    "Active:",
                    "- Orbora (https://criaphore.com/orbora/): Generative AI audio wellness app (meditation, breathing, ASMR, wisdom talks) on iOS & Android.",
                    "  App Store: https://apps.apple.com/app/orbora/id6803242166",
                    "  Google Play: https://play.google.com/store/apps/details?id=com.criaphore.talkscompanion",
                    "  FAQ: https://criaphore.com/orbora/faq/",
                    "",
                    "Archived:",
                    "- Diagnosly (https://criaphore.com/diagnosly/): Archived AI health companion with guided symptom check-up, AI chat, and on-device encrypted storage (2024 - 2025).",
                    "",
                    "Contact: contact@criaphore.com"
                ].join("\n")
            }]
        })
    });

    modelContext.registerTool({
        name: "getOrboraInfo",
        description: "Get detailed information about Orbora (features, pricing/credits, privacy, tech stack, and App Store / Google Play download links).",
        inputSchema: {
            type: "object",
            properties: {}
        },
        execute: () => ({
            content: [{
                type: "text",
                text: [
                    "Orbora - Calming audio made for you (iOS & Android).",
                    "Features: Personalized AI meditations, breathing exercises, ASMR-style relaxation, wisdom talks, plus 3 free 10-step Wellness Journey paths.",
                    "Pricing: Listening and Wellness Journey are free. Creating new personalized sessions costs 1 credit per 30 seconds (Orbora Pro adds 100 credits/month; unused credits never expire; one-time packs of 20, 60, or 120 credits).",
                    "Privacy: No ads, no cross-app tracking, no data selling, full account deletion inside the app.",
                    "Tech stack: Kotlin Multiplatform, Compose Multiplatform, Gemini 3.8 Flash, Gemini 3.1 Flash TTS, Google Cloud Run, Firestore, RevenueCat.",
                    "App Store: https://apps.apple.com/app/orbora/id6803242166",
                    "Google Play: https://play.google.com/store/apps/details?id=com.criaphore.talkscompanion",
                    "Website: https://criaphore.com/orbora/ | FAQ: https://criaphore.com/orbora/faq/ | Support: contact@criaphore.com"
                ].join("\n")
            }]
        })
    });
})();
