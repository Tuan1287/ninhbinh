import { useState, useCallback } from "react";

export type Language = "vi" | "en";

export interface Translations {
  appTitle: string;
  tagline: string;
  infoBar: string;
  inputPlaceholder: string;
  send: string;
  clearChat: string;
  changeApi: string;
  apiKeyTitle: string;
  apiKeyDescription: string;
  apiKeyLabel: string;
  apiKeyPlaceholder: string;
  apiKeySave: string;
  apiKeyRemove: string;
  apiKeyActive: string;
  apiKeyNone: string;
  weatherTitle: string;
  weatherLoading: string;
  clearConfirm: string;
  clearConfirmText: string;
  clearYes: string;
  clearNo: string;
  welcomeTitle: string;
  welcomeSubtitle: string;
  suggestion1: string;
  suggestion2: string;
  suggestion3: string;
  suggestion4: string;
  aiTyping: string;
  errorNoKey: string;
  errorApi: string;
  today: string;
  feels: string;
  humidity: string;
  wind: string;
}

const vi: Translations = {
  appTitle: "NinhBinhAITravel",
  tagline: "Khám phá Cố đô Ninh Bình",
  infoBar: "Tràng An - Di sản UNESCO | Tam Cốc - Vịnh Hạ Long trên cạn | Cố đô Hoa Lư - Lịch sử ngàn năm | Chùa Bái Đính - Lớn nhất Đông Nam Á | Hang Mua - View đẹp nhất Ninh Bình | Vân Long - Thiên nhiên hoang sơ | Đặc sản: Dê núi, Cơm cháy, Nem chua",
  inputPlaceholder: "Hỏi tôi về du lịch Ninh Bình...",
  send: "Gửi",
  clearChat: "Xóa cuộc trò chuyện",
  changeApi: "Đổi API Key",
  apiKeyTitle: "Cấu hình API Key Gemini",
  apiKeyDescription: "Nhập API Key của bạn từ Google AI Studio để sử dụng tính năng AI. Key được lưu trên thiết bị của bạn và không gửi đến máy chủ nào khác.",
  apiKeyLabel: "Gemini API Key",
  apiKeyPlaceholder: "AIza...",
  apiKeySave: "Lưu API Key",
  apiKeyRemove: "Xóa Key",
  apiKeyActive: "API Key đang hoạt động",
  apiKeyNone: "Chưa có API Key",
  weatherTitle: "Thời tiết 7 ngày - Ninh Bình",
  weatherLoading: "Đang tải thời tiết...",
  clearConfirm: "Xóa cuộc trò chuyện?",
  clearConfirmText: "Tất cả tin nhắn sẽ bị xóa. Bạn có chắc không?",
  clearYes: "Xóa",
  clearNo: "Hủy",
  welcomeTitle: "Xin chào! Tôi là trợ lý AI du lịch Ninh Bình",
  welcomeSubtitle: "Hỏi tôi về địa điểm tham quan, chỗ ở, nhà hàng hoặc để tôi lên lịch trình hoàn hảo cho chuyến đi của bạn!",
  suggestion1: "Lịch trình 2 ngày 1 đêm Ninh Bình",
  suggestion2: "Những địa điểm đẹp nhất để chụp ảnh",
  suggestion3: "Đặc sản nhất định phải thử ở Ninh Bình",
  suggestion4: "Khách sạn tốt gần Tam Cốc cho gia đình",
  aiTyping: "Đang trả lời...",
  errorNoKey: "Vui lòng nhập API Key Gemini trước. Bấm vào biểu tượng chìa khóa ở góc trên phải.",
  errorApi: "Có lỗi xảy ra khi gọi API. Vui lòng kiểm tra lại API Key và thử lại.",
  today: "Hôm nay",
  feels: "Cảm giác",
  humidity: "Độ ẩm",
  wind: "Gió",
};

const en: Translations = {
  appTitle: "NinhBinhAITravel",
  tagline: "Discover the Ancient Capital",
  infoBar: "Trang An - UNESCO Heritage | Tam Coc - Halong Bay on Land | Hoa Lu - Thousand-year History | Bai Dinh - Largest in Southeast Asia | Mua Cave - Best View in Ninh Binh | Van Long - Pristine Nature | Specialties: Mountain Goat, Crispy Rice, Fermented Pork",
  inputPlaceholder: "Ask me about Ninh Binh travel...",
  send: "Send",
  clearChat: "Clear conversation",
  changeApi: "Change API Key",
  apiKeyTitle: "Configure Gemini API Key",
  apiKeyDescription: "Enter your API Key from Google AI Studio to use AI features. The key is stored on your device and not sent to any other server.",
  apiKeyLabel: "Gemini API Key",
  apiKeyPlaceholder: "AIza...",
  apiKeySave: "Save API Key",
  apiKeyRemove: "Remove Key",
  apiKeyActive: "API Key is active",
  apiKeyNone: "No API Key set",
  weatherTitle: "7-Day Weather - Ninh Binh",
  weatherLoading: "Loading weather...",
  clearConfirm: "Clear conversation?",
  clearConfirmText: "All messages will be deleted. Are you sure?",
  clearYes: "Clear",
  clearNo: "Cancel",
  welcomeTitle: "Hello! I'm your Ninh Binh AI Travel Assistant",
  welcomeSubtitle: "Ask me about attractions, accommodations, restaurants, or let me plan the perfect itinerary for your trip!",
  suggestion1: "2-day 1-night itinerary for Ninh Binh",
  suggestion2: "Most beautiful spots for photography",
  suggestion3: "Local specialties you must try in Ninh Binh",
  suggestion4: "Good hotels near Tam Coc for families",
  aiTyping: "Typing...",
  errorNoKey: "Please enter your Gemini API Key first. Click the key icon in the top right corner.",
  errorApi: "An error occurred while calling the API. Please check your API Key and try again.",
  today: "Today",
  feels: "Feels like",
  humidity: "Humidity",
  wind: "Wind",
};

export function useLanguage() {
  const [lang, setLang] = useState<Language>(() => {
    const saved = localStorage.getItem("nb_lang");
    return (saved as Language) || "vi";
  });

  const t = lang === "vi" ? vi : en;

  const toggleLanguage = useCallback(() => {
    setLang(prev => {
      const next = prev === "vi" ? "en" : "vi";
      localStorage.setItem("nb_lang", next);
      return next;
    });
  }, []);

  return { lang, t, toggleLanguage };
}
