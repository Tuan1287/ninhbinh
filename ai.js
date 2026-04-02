// ==========================
// AI TRAVEL ASSISTANT (NINH BINH)
// Using Gemini API (user provided key)
// ==========================

// Import data (đảm bảo path đúng)
import { khudiemData } from "../data/khudiem.js";
import { luutruData } from "../data/luutru.js";
import { nhahangData } from "../data/nhahang.js";

// ==========================
// CONFIG
// ==========================
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

// ==========================
// BUILD CONTEXT DATA
// ==========================
function buildContext() {
    return `
Bạn là trợ lý du lịch Ninh Bình.

Dữ liệu khu điểm:
${JSON.stringify(khudiemData)}

Dữ liệu lưu trú:
${JSON.stringify(luutruData)}

Dữ liệu nhà hàng:
${JSON.stringify(nhahangData)}

Yêu cầu:
- Chỉ ưu tiên gợi ý trong danh sách trên
- Trả lời tự nhiên, dễ hiểu
- Có thể gợi ý lịch trình nếu người dùng hỏi
- Không nói rằng bạn là AI
`;
}

// ==========================
// CALL GEMINI API
// ==========================
async function callGemini(prompt, apiKey) {
    try {
        const response = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                contents: [
                    {
                        parts: [
                            {
                                text: prompt
                            }
                        ]
                    }
                ]
            })
        });

        const data = await response.json();

        return data?.candidates?.[0]?.content?.parts?.[0]?.text || "Không có phản hồi.";
    } catch (error) {
        console.error("Gemini error:", error);
        return "Lỗi kết nối AI.";
    }
}

// ==========================
// FALLBACK (NO API)
// ==========================
function fallbackAnswer(userInput) {
    const text = userInput.toLowerCase();

    // Gợi ý cơ bản
    if (text.includes("ăn")) {
        return "Bạn có thể thử các nhà hàng trong danh sách, ví dụ như dê núi Ninh Bình hoặc cơm cháy.";
    }

    if (text.includes("ở") || text.includes("khách sạn")) {
        return "Bạn có thể tham khảo các homestay hoặc khách sạn trong danh sách lưu trú.";
    }

    if (text.includes("đi đâu")) {
        return "Bạn nên ghé Tràng An, Tam Cốc hoặc Hang Múa – đây là các điểm nổi bật.";
    }

    return "Bạn có thể hỏi về địa điểm du lịch, ăn uống hoặc lưu trú tại Ninh Bình nhé.";
}

// ==========================
// MAIN FUNCTION
// ==========================
export async function askAI(userInput) {
    const apiKey = localStorage.getItem("GEMINI_API_KEY");

    const context = buildContext();
    const finalPrompt = `${context}\n\nCâu hỏi: ${userInput}`;

    // Nếu có API key → dùng AI thật
    if (apiKey) {
        return await callGemini(finalPrompt, apiKey);
    }

    // Nếu chưa có → fallback
    return fallbackAnswer(userInput);
}

// ==========================
// SAVE API KEY
// ==========================
export function saveApiKey(key) {
    localStorage.setItem("GEMINI_API_KEY", key);
}

// ==========================
// REMOVE API KEY
// ==========================
export function removeApiKey() {
    localStorage.removeItem("GEMINI_API_KEY");
}
