// =======================
// IMPORT DATA
// =======================
import { khudiem } from "./data/khudiem.js";
import { luutrus } from "./data/luutrus.js";
import { nhahang } from "./data/nhahang.js";
import { askAI } from "./ai.js";


// =======================
// DOM ELEMENTS
// =======================
const chatBox = document.getElementById("chat-box");
const input = document.getElementById("user-input");
const sendBtn = document.getElementById("send-btn");


// =======================
// STATE
// =======================
let conversationHistory = [];


// =======================
// UTIL FUNCTIONS
// =======================

// Hiển thị message ra UI
function addMessage(role, content) {
    const div = document.createElement("div");
    div.className = `message ${role}`;
    div.innerText = content;
    chatBox.appendChild(div);
    chatBox.scrollTop = chatBox.scrollHeight;
}

// Tìm dữ liệu liên quan theo keyword
function searchLocalData(query) {
    query = query.toLowerCase();

    const results = {
        khudiem: khudiem.filter(item =>
            item.name.toLowerCase().includes(query)
        ),
        luutru: luutrus.filter(item =>
            item.name.toLowerCase().includes(query)
        ),
        nhahang: nhahang.filter(item =>
            item.name.toLowerCase().includes(query)
        )
    };

    return results;
}


// Format dữ liệu để đưa vào AI
function buildContext(results) {
    let context = "Dữ liệu gợi ý:\n";

    if (results.khudiem.length > 0) {
        context += "\nKhu điểm:\n";
        results.khudiem.forEach(item => {
            context += `- ${item.name}: ${item.description}\n`;
        });
    }

    if (results.luutru.length > 0) {
        context += "\nLưu trú:\n";
        results.luutru.forEach(item => {
            context += `- ${item.name}: ${item.description}\n`;
        });
    }

    if (results.nhahang.length > 0) {
        context += "\nNhà hàng:\n";
        results.nhahang.forEach(item => {
            context += `- ${item.name}: ${item.description}\n`;
        });
    }

    return context;
}


// =======================
// CORE CHAT LOGIC
// =======================
async function handleUserMessage() {
    const userText = input.value.trim();
    if (!userText) return;

    addMessage("user", userText);
    input.value = "";

    // 1. Tìm dữ liệu local
    const localResults = searchLocalData(userText);

    // 2. Build context cho AI
    const context = buildContext(localResults);

    // 3. Gộp với lịch sử hội thoại
    conversationHistory.push({
        role: "user",
        content: userText
    });

    const prompt = `
Bạn là AI du lịch Ninh Bình.

Người dùng hỏi: "${userText}"

${context}

Hãy tư vấn chi tiết, ưu tiên các địa điểm trong dữ liệu trên.
    `;

    try {
        // 4. Gọi AI (Gemini)
        const aiResponse = await askAI(prompt);

        // 5. Lưu lịch sử
        conversationHistory.push({
            role: "assistant",
            content: aiResponse
        });

        // 6. Hiển thị
        addMessage("assistant", aiResponse);

    } catch (error) {
        console.error(error);
        addMessage("assistant", "Có lỗi xảy ra, vui lòng thử lại!");
    }
}


// =======================
// EVENTS
// =======================
sendBtn.addEventListener("click", handleUserMessage);

input.addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
        handleUserMessage();
    }
});


// =======================
// INIT
// =======================
addMessage("assistant", "Xin chào! Tôi là AI du lịch Ninh Bình. Bạn muốn đi đâu?");
