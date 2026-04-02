import { khudiemData } from "../data/khudiem.js";
import { luutruData } from "../data/luutru.js";
import { nhahangData } from "../data/nhahang.js";

// ==========================
// CONFIG
// ==========================
const GEMINI_API_URL = "https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent";

// ==========================
// 1. PHÂN TÍCH INPUT
// ==========================
function analyzeInput(input) {
    const text = input.toLowerCase();

    return {
        days: text.includes("2 ngày") ? 2 : text.includes("1 ngày") ? 1 : 1,
        needFood: text.includes("ăn") || text.includes("đặc sản"),
        needHotel: text.includes("ở") || text.includes("khách sạn"),
        chill: text.includes("chill") || text.includes("nghỉ dưỡng"),
        explore: text.includes("khám phá") || text.includes("check-in")
    };
}

// ==========================
// 2. CHẤM ĐIỂM ĐỊA ĐIỂM
// ==========================
function scorePlaces(preference) {
    return khudiemData.map(place => {
        let score = 0;

        if (preference.explore && place.type === "checkin") score += 2;
        if (preference.chill && place.type === "relax") score += 2;

        // ưu tiên nổi bật
        if (place.hot) score += 3;

        return { ...place, score };
    }).sort((a, b) => b.score - a.score);
}

// ==========================
// 3. CHỌN NHÀ HÀNG
// ==========================
function pickRestaurants() {
    return nhahangData.slice(0, 3);
}

// ==========================
// 4. CHỌN LƯU TRÚ
// ==========================
function pickHotels() {
    return luutruData.slice(0, 2);
}

// ==========================
// 5. BUILD LỊCH TRÌNH
// ==========================
function buildItinerary(preference) {
    const places = scorePlaces(preference).slice(0, preference.days * 3);

    let itinerary = [];

    for (let i = 0; i < preference.days; i++) {
        itinerary.push({
            day: i + 1,
            places: places.slice(i * 3, i * 3 + 3)
        });
    }

    return itinerary;
}

// ==========================
// 6. FORMAT TEXT (NO AI)
// ==========================
function formatResponse(data) {
    let text = "";

    data.itinerary.forEach(day => {
        text += `\n📅 Ngày ${day.day}:\n`;
        day.places.forEach(p => {
            text += `- ${p.name}\n`;
        });
    });

    if (data.restaurants.length) {
        text += `\n🍜 Ăn uống:\n`;
        data.restaurants.forEach(r => {
            text += `- ${r.name}\n`;
        });
    }

    if (data.hotels.length) {
        text += `\n🏨 Lưu trú:\n`;
        data.hotels.forEach(h => {
            text += `- ${h.name}\n`;
        });
    }

    return text;
}

// ==========================
// 7. CALL GEMINI (OPTIONAL)
// ==========================
async function rewriteByAI(rawText, apiKey) {
    try {
        const res = await fetch(`${GEMINI_API_URL}?key=${apiKey}`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                contents: [{
                    parts: [{
                        text: `
Viết lại nội dung sau cho tự nhiên, hấp dẫn như hướng dẫn viên du lịch:

${rawText}
                        `
                    }]
                }]
            })
        });

        const data = await res.json();
        return data?.candidates?.[0]?.content?.parts?.[0]?.text || rawText;

    } catch {
        return rawText;
    }
}

// ==========================
// MAIN FUNCTION V3
// ==========================
export async function askAI(userInput) {
    const apiKey = localStorage.getItem("GEMINI_API_KEY");

    // 1. hiểu user
    const preference = analyzeInput(userInput);

    // 2. build data
    const itinerary = buildItinerary(preference);
    const restaurants = preference.needFood ? pickRestaurants() : [];
    const hotels = preference.needHotel ? pickHotels() : [];

    const result = {
        itinerary,
        restaurants,
        hotels
    };

    // 3. text thô
    let rawText = formatResponse(result);

    // 4. nếu có API → viết lại cho xịn
    if (apiKey) {
        return await rewriteByAI(rawText, apiKey);
    }

    return rawText;
}

// ==========================
// API KEY
// ==========================
export function saveApiKey(key) {
    localStorage.setItem("GEMINI_API_KEY", key);
}

export function removeApiKey() {
    localStorage.removeItem("GEMINI_API_KEY");
}
