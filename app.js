// =======================
// IMPORT
// =======================
import { khudiem } from "./data/khudiem.js";
import { luutrus } from "./data/luutrus.js";
import { nhahang } from "./data/nhahang.js";
import { askAI } from "./ai.js";


// =======================
// DOM
// =======================
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");


// =======================
// STATE
// =======================
let history = [];


// =======================
// UI FUNCTIONS
// =======================
function addMessage(role, content) {
    const div = document.createElement("div");
    div.className = `message ${role}`;
    div.innerText = content;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}


// =======================
// INTENT DETECTION
// =======================
function detectIntent(text) {
    const t = text.toLowerCase();

    if (t.includes("ăn") || t.includes("nhà hàng") || t.includes("quán")) {
        return "nhahang";
    }

    if (t.includes("ở") || t.includes("khách sạn") || t.includes("homestay")) {
        return "luutru";
    }

    if (t.includes("đi") || t.includes("chơi") || t.includes("du lịch")) {
        return "khudiem";
    }

    return "all";
}


// =======================
// SEARCH LOCAL DATA
// =======================
function searchData(query, intent) {
    const q = query.toLowerCase();

    const filterFunc = (item) =>
        item.name.toLowerCase().includes(q) ||
        item.description.toLowerCase().includes(q);

    let result = {
        khudiem: [],
        luutru: [],
        nhahang: []
    };

    if (intent === "khudiem" || intent === "all") {
        result.khudiem = khudiem.filter(filterFunc);
    }

    if (intent === "luutru" || intent === "all") {
        result.luutru = luutrus.filter(filterFunc);
    }

    if (intent === "nhahang" || intent === "all") {
        result.nhahang = nhahang.filter(filterFunc);
    }

    return result;
}


// =======================
// BUILD CONTEXT CHO AI
// =======================
function buildContext(data) {
    let context = "Dữ liệu nội bộ Ninh Bình:\n";

    const limit = 5; // tránh quá dài

    if (data.khudiem.length > 0) {
        context += "\n[ĐIỂM DU LỊCH]\n";
        data.khudiem.slice(0, limit).forEach(i => {
            context += `- ${i.name}: ${i.description}\n`;
        });
    }

    if (data.luutru.length > 0) {
        context += "\n[LƯU TRÚ]\n";
        data.luutru.slice(0, limit).forEach(i => {
            context += `- ${i.name}: ${i.description}\n`;
        });
    }

    if (data.nhahang.length > 0) {
        context += "\n[ĂN UỐNG]\n";
        data.nhahang.slice(0, limit).forEach(i => {
            context += `- ${i.name}: ${i.description}\n`;
        });
    }

    return context;
}


// =======================
// BUILD PROMPT
// =======================
function buildPrompt(userText, context) {
    return `
Bạn là AI du lịch Ninh Bình.

Nhiệm vụ:
- Tư vấn thực tế, cụ thể, dễ hiểu
- Ưu tiên địa điểm trong dữ liệu nội bộ
- Nếu phù hợp, gợi ý lịch trình

Câu hỏi:
"${userText}"

${context}

Yêu cầu:
- Trả lời có cấu trúc rõ ràng
- Nếu có nhiều lựa chọn, liệt kê bullet
- Không nói lan man
`;
}


// =======================
// CORE LOGIC
// =======================
async function handleSend() {
    const text = input.value.trim();
    if (!text) return;

    addMessage("user", text);
    input.value = "";

    // 1. Intent
    const intent = detectIntent(text);

    // 2. Search local data
    const localData = searchData(text, intent);

    // 3. Build context
    const context = buildContext(localData);

    // 4. Prompt
    const prompt = buildPrompt(text, context);

    try {
        const reply = await askAI(prompt);

        history.push({ role: "user", content: text });
        history.push({ role: "assistant", content: reply });

        addMessage("assistant", reply);

    } catch (err) {
        console.error(err);
        addMessage("assistant", "Lỗi AI. Kiểm tra lại API Gemini.");
    }
}


// =======================
// EVENTS
// =======================
sendBtn.addEventListener("click", handleSend);

input.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        handleSend();
    }
});


// =======================
// INIT
// =======================
function init() {
    addMessage(
        "assistant",
        "Chào bạn 👋 Tôi là AI du lịch Ninh Bình.\nBạn muốn đi đâu, ăn gì hay ở đâu?"
    );
}

init();
