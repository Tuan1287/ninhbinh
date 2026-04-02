export interface TouristSpot {
  id: string;
  name: string;
  nameEn: string;
  type: "attraction" | "temple" | "nature" | "historical";
  description: string;
  descriptionEn: string;
  address: string;
  lat: number;
  lng: number;
  visitDuration: number; // hours
  openHours: string;
  ticketPrice: string;
  tags: string[];
  tagsEn: string[];
}

export interface Accommodation {
  id: string;
  name: string;
  nameEn: string;
  type: "hotel" | "resort" | "homestay" | "guesthouse";
  description: string;
  descriptionEn: string;
  address: string;
  lat: number;
  lng: number;
  priceRange: string;
  amenities: string[];
  amenitiesEn: string[];
  rating: number;
}

export interface Restaurant {
  id: string;
  name: string;
  nameEn: string;
  type: "local" | "seafood" | "vegetarian" | "cafe" | "bbq";
  description: string;
  descriptionEn: string;
  address: string;
  lat: number;
  lng: number;
  priceRange: string;
  specialDishes: string[];
  specialDishesEn: string[];
  openHours: string;
  rating: number;
}

export const touristSpots: TouristSpot[] = [
  {
    id: "trang-an",
    name: "Khu du lịch sinh thái Tràng An",
    nameEn: "Trang An Scenic Landscape Complex",
    type: "nature",
    description: "Di sản thế giới UNESCO với hệ thống hang động và sông ngòi tuyệt đẹp. Du khách đi thuyền qua các hang động xuyên núi đá vôi.",
    descriptionEn: "UNESCO World Heritage Site with stunning cave and river systems. Visitors boat through caves piercing limestone mountains.",
    address: "Xã Trường Yên, Hoa Lư, Ninh Bình",
    lat: 20.2585,
    lng: 105.8765,
    visitDuration: 4,
    openHours: "07:00 - 18:00",
    ticketPrice: "250.000 VNĐ/người",
    tags: ["Di sản UNESCO", "Hang động", "Chèo thuyền", "Thiên nhiên"],
    tagsEn: ["UNESCO Heritage", "Caves", "Boat tour", "Nature"],
  },
  {
    id: "tam-coc",
    name: "Tam Cốc - Bích Động",
    nameEn: "Tam Coc - Bich Dong",
    type: "nature",
    description: "Được mệnh danh là 'Vịnh Hạ Long trên cạn', Tam Cốc có ba hang động nổi tiếng dọc sông Ngô Đồng. Bích Động là ngôi chùa tuyệt đẹp trong núi đá.",
    descriptionEn: "Known as the 'Halong Bay on Land', Tam Coc has three famous caves along the Ngo Dong River. Bich Dong is a beautiful pagoda inside limestone mountains.",
    address: "Xã Ninh Hải, Hoa Lư, Ninh Bình",
    lat: 20.2181,
    lng: 105.9297,
    visitDuration: 3,
    openHours: "07:00 - 17:30",
    ticketPrice: "200.000 VNĐ/người",
    tags: ["Chèo thuyền", "Hang động", "Chụp ảnh", "Phong cảnh"],
    tagsEn: ["Boat tour", "Caves", "Photography", "Scenery"],
  },
  {
    id: "hoa-lu",
    name: "Cố đô Hoa Lư",
    nameEn: "Hoa Lu Ancient Capital",
    type: "historical",
    description: "Kinh đô đầu tiên của nhà nước phong kiến Việt Nam thống nhất, thờ hai vua Đinh Tiên Hoàng và Lê Đại Hành.",
    descriptionEn: "The first capital of unified feudal Vietnam, worshipping emperors Dinh Tien Hoang and Le Dai Hanh.",
    address: "Xã Trường Yên, Hoa Lư, Ninh Bình",
    lat: 20.2804,
    lng: 105.8971,
    visitDuration: 2,
    openHours: "07:00 - 17:30",
    ticketPrice: "20.000 VNĐ/người",
    tags: ["Lịch sử", "Đền thờ", "Văn hóa", "Di tích"],
    tagsEn: ["History", "Temples", "Culture", "Heritage"],
  },
  {
    id: "mua-cave",
    name: "Hang Mua - Đỉnh Mua",
    nameEn: "Mua Cave - Mua Peak",
    type: "nature",
    description: "Leo 500 bậc thang để lên đỉnh núi Mua, ngắm toàn cảnh Tam Cốc từ trên cao. Điểm chụp ảnh đẹp nhất Ninh Bình.",
    descriptionEn: "Climb 500 steps to reach the peak for panoramic views of Tam Coc. The most photogenic spot in Ninh Binh.",
    address: "Khê Hạ, Ninh Hải, Hoa Lư, Ninh Bình",
    lat: 20.2215,
    lng: 105.9178,
    visitDuration: 2,
    openHours: "07:00 - 18:00",
    ticketPrice: "100.000 VNĐ/người",
    tags: ["Leo núi", "Ngắm cảnh", "Chụp ảnh", "Phiêu lưu"],
    tagsEn: ["Hiking", "View point", "Photography", "Adventure"],
  },
  {
    id: "thung-nham",
    name: "Thung Nham - Vườn chim",
    nameEn: "Thung Nham Bird Garden",
    type: "nature",
    description: "Khu sinh thái với hàng nghìn con cò và vạc về làm tổ, chèo thuyền qua hang động và rừng ngập nước.",
    descriptionEn: "Eco-zone with thousands of egrets and herons nesting, boat through caves and wetland forests.",
    address: "Ninh Hải, Hoa Lư, Ninh Bình",
    lat: 20.2350,
    lng: 105.9502,
    visitDuration: 3,
    openHours: "07:00 - 17:00",
    ticketPrice: "150.000 VNĐ/người",
    tags: ["Sinh thái", "Chim muông", "Chèo thuyền", "Thiên nhiên"],
    tagsEn: ["Ecology", "Bird watching", "Boat tour", "Nature"],
  },
  {
    id: "van-long",
    name: "Khu bảo tồn đất ngập nước Vân Long",
    nameEn: "Van Long Wetland Nature Reserve",
    type: "nature",
    description: "Đầm nước rộng lớn với cảnh quan hoang sơ, nơi sinh sống của voọc mông trắng quý hiếm. Chèo thuyền giữa núi đá vôi phản chiếu.",
    descriptionEn: "Vast wetland with pristine scenery, home to rare white-bottomed langurs. Boat among reflecting limestone karsts.",
    address: "Gia Vân, Gia Viễn, Ninh Bình",
    lat: 20.3510,
    lng: 105.8192,
    visitDuration: 3,
    openHours: "06:00 - 17:30",
    ticketPrice: "80.000 VNĐ/người",
    tags: ["Sinh thái", "Voọc", "Chèo thuyền", "Yên tĩnh"],
    tagsEn: ["Ecology", "Langurs", "Boat tour", "Peaceful"],
  },
  {
    id: "bai-dinh",
    name: "Chùa Bái Đính",
    nameEn: "Bai Dinh Pagoda",
    type: "temple",
    description: "Chùa lớn nhất Đông Nam Á với nhiều kỷ lục Châu Á, tượng Phật đồng lớn nhất và hành lang La Hán dài nhất.",
    descriptionEn: "Largest pagoda in Southeast Asia with many Asian records, largest bronze Buddha statue and longest arhat corridor.",
    address: "Gia Sinh, Gia Viễn, Ninh Bình",
    lat: 20.3234,
    lng: 105.8456,
    visitDuration: 3,
    openHours: "06:00 - 21:00",
    ticketPrice: "Miễn phí (xe điện: 30.000 VNĐ)",
    tags: ["Phật giáo", "Kiến trúc", "Tâm linh", "Văn hóa"],
    tagsEn: ["Buddhism", "Architecture", "Spiritual", "Culture"],
  },
  {
    id: "kenh-ga",
    name: "Làng Kênh Gà",
    nameEn: "Kenh Ga Village",
    type: "nature",
    description: "Làng nổi trên sông với suối nước nóng thiên nhiên, dân làng sống trên thuyền từ nhiều thế kỷ.",
    descriptionEn: "Floating village on the river with natural hot springs, villagers have lived on boats for centuries.",
    address: "Gia Thịnh, Gia Viễn, Ninh Bình",
    lat: 20.3723,
    lng: 105.8043,
    visitDuration: 2,
    openHours: "Cả ngày",
    ticketPrice: "Tự do",
    tags: ["Làng nổi", "Suối nóng", "Văn hóa", "Trải nghiệm"],
    tagsEn: ["Floating village", "Hot springs", "Culture", "Experience"],
  },
];

export const accommodations: Accommodation[] = [
  {
    id: "emeralda-resort",
    name: "Emeralda Resort Ninh Bình",
    nameEn: "Emeralda Resort Ninh Binh",
    type: "resort",
    description: "Khu nghỉ dưỡng 5 sao sang trọng nằm giữa thiên nhiên xanh mướt, kiến trúc Đông Dương truyền thống.",
    descriptionEn: "Luxurious 5-star resort nestled in lush greenery with traditional Indochina architecture.",
    address: "Ân Mỹ, Kim Sơn, Ninh Bình",
    lat: 20.1823,
    lng: 106.0731,
    priceRange: "3.500.000 - 8.000.000 VNĐ/đêm",
    amenities: ["Hồ bơi", "Spa", "Nhà hàng", "Wifi", "Đưa đón"],
    amenitiesEn: ["Swimming pool", "Spa", "Restaurant", "Wifi", "Shuttle"],
    rating: 4.8,
  },
  {
    id: "tam-coc-bungalow",
    name: "Tam Coc Bungalow",
    nameEn: "Tam Coc Bungalow",
    type: "resort",
    description: "Bungalow yên tĩnh ngay cạnh Tam Cốc, view cánh đồng lúa và núi đá vôi tuyệt đẹp.",
    descriptionEn: "Peaceful bungalows right next to Tam Coc, beautiful views of rice fields and limestone karsts.",
    address: "Ninh Hải, Hoa Lư, Ninh Bình",
    lat: 20.2190,
    lng: 105.9280,
    priceRange: "800.000 - 1.800.000 VNĐ/đêm",
    amenities: ["Hồ bơi", "Nhà hàng", "Xe đạp", "Wifi", "Tour thuyền"],
    amenitiesEn: ["Swimming pool", "Restaurant", "Bicycles", "Wifi", "Boat tour"],
    rating: 4.5,
  },
  {
    id: "ninh-binh-hidden-charm",
    name: "Ninh Bình Hidden Charm Hotel",
    nameEn: "Ninh Binh Hidden Charm Hotel",
    type: "hotel",
    description: "Khách sạn boutique hiện đại gần trung tâm thành phố Ninh Bình, dịch vụ chu đáo và giá hợp lý.",
    descriptionEn: "Modern boutique hotel near Ninh Binh city center with attentive service and reasonable price.",
    address: "Đường Lê Hồng Phong, TP. Ninh Bình",
    lat: 20.2506,
    lng: 105.9745,
    priceRange: "500.000 - 1.200.000 VNĐ/đêm",
    amenities: ["Nhà hàng", "Wifi", "Xe đạp thuê", "Lễ tân 24/7"],
    amenitiesEn: ["Restaurant", "Wifi", "Bike rental", "24/7 reception"],
    rating: 4.3,
  },
  {
    id: "trang-an-retreat",
    name: "Tràng An Retreat",
    nameEn: "Trang An Retreat",
    type: "homestay",
    description: "Homestay ấm cúng giữa thiên nhiên Tràng An, chủ nhà thân thiện, bữa sáng tự nấu từ rau vườn.",
    descriptionEn: "Cozy homestay amid Trang An nature, friendly hosts, breakfast with home-grown vegetables.",
    address: "Trường Yên, Hoa Lư, Ninh Bình",
    lat: 20.2612,
    lng: 105.8841,
    priceRange: "300.000 - 600.000 VNĐ/đêm",
    amenities: ["Wifi", "Bữa sáng", "Bãi đỗ xe", "Tour"],
    amenitiesEn: ["Wifi", "Breakfast", "Parking", "Tours"],
    rating: 4.6,
  },
  {
    id: "mua-eco-lodge",
    name: "Mua Eco Lodge",
    nameEn: "Mua Eco Lodge",
    type: "resort",
    description: "Nhà nghỉ sinh thái bền vững nhìn ra vùng núi đá vôi, tắm suối khoáng và trải nghiệm cuộc sống nông thôn.",
    descriptionEn: "Sustainable eco-lodge overlooking limestone karsts, mineral spring bath and rural life experience.",
    address: "Ninh Hải, Hoa Lư, Ninh Bình",
    lat: 20.2198,
    lng: 105.9165,
    priceRange: "1.200.000 - 2.500.000 VNĐ/đêm",
    amenities: ["Tắm khoáng", "Nhà hàng", "Vườn rau", "Wifi", "Tour xe đạp"],
    amenitiesEn: ["Mineral bath", "Restaurant", "Organic garden", "Wifi", "Bike tour"],
    rating: 4.7,
  },
];

export const restaurants: Restaurant[] = [
  {
    id: "de-nuong-ninh-binh",
    name: "Nhà hàng Dê Núi Ninh Bình",
    nameEn: "Ninh Binh Mountain Goat Restaurant",
    type: "local",
    description: "Nhà hàng nổi tiếng với món dê núi đặc sản Ninh Bình, không gian truyền thống, phục vụ theo nhóm.",
    descriptionEn: "Famous restaurant for Ninh Binh mountain goat specialty, traditional setting, group dining.",
    address: "38 Hoàng Hoa Thám, TP. Ninh Bình",
    lat: 20.2528,
    lng: 105.9722,
    priceRange: "200.000 - 500.000 VNĐ/người",
    specialDishes: ["Dê tái chanh", "Dê nướng chả", "Cơm cháy Ninh Bình", "Nem chua"],
    specialDishesEn: ["Lime-marinated goat", "Grilled goat skewers", "Crispy rice Ninh Binh style", "Fermented pork rolls"],
    openHours: "10:00 - 22:00",
    rating: 4.5,
  },
  {
    id: "com-chay-ninh-binh",
    name: "Cơm Cháy Hương Việt",
    nameEn: "Huong Viet Crispy Rice",
    type: "local",
    description: "Chuyên món cơm cháy Ninh Bình - đặc sản nổi tiếng khắp cả nước với bảy loại nước chấm gia truyền.",
    descriptionEn: "Specializes in Ninh Binh crispy rice - a famous dish nationwide with seven traditional dipping sauces.",
    address: "Ninh Hải, Hoa Lư, Ninh Bình",
    lat: 20.2201,
    lng: 105.9310,
    priceRange: "80.000 - 200.000 VNĐ/người",
    specialDishes: ["Cơm cháy truyền thống", "Cơm cháy hải sản", "Bún dọc mùng", "Canh chua cá"],
    specialDishesEn: ["Traditional crispy rice", "Seafood crispy rice", "Taro stem noodles", "Sour fish soup"],
    openHours: "07:00 - 21:00",
    rating: 4.7,
  },
  {
    id: "nha-hang-trang-an",
    name: "Nhà hàng Tràng An Xanh",
    nameEn: "Trang An Green Restaurant",
    type: "local",
    description: "Không gian xanh mát ven sông, thực đơn phong phú từ hải sản sông và đặc sản vùng núi Ninh Bình.",
    descriptionEn: "Cool riverside setting with diverse menu of river seafood and Ninh Binh mountain specialties.",
    address: "Trường Yên, Hoa Lư, Ninh Bình",
    lat: 20.2601,
    lng: 105.8852,
    priceRange: "150.000 - 350.000 VNĐ/người",
    specialDishes: ["Cá suối nướng", "Ếch hấp gừng", "Rau rừng xào tỏi", "Canh cà chuối"],
    specialDishesEn: ["Grilled stream fish", "Ginger-steamed frog", "Stir-fried forest greens", "Banana flower soup"],
    openHours: "08:00 - 21:30",
    rating: 4.4,
  },
  {
    id: "bun-bun-cafe",
    name: "Cafe Bún Bún",
    nameEn: "Bun Bun Cafe",
    type: "cafe",
    description: "Quán cafe mang phong cách vintage, view núi đá vôi, phục vụ cà phê Việt Nam và đồ ăn nhẹ địa phương.",
    descriptionEn: "Vintage-style cafe with limestone mountain views, serving Vietnamese coffee and local snacks.",
    address: "Ninh Hải, Hoa Lư, Ninh Bình",
    lat: 20.2215,
    lng: 105.9265,
    priceRange: "40.000 - 120.000 VNĐ/người",
    specialDishes: ["Cà phê trứng", "Sinh tố trái cây địa phương", "Bánh mì kẹp dê"],
    specialDishesEn: ["Egg coffee", "Local fruit smoothies", "Goat meat baguette"],
    openHours: "06:30 - 20:00",
    rating: 4.6,
  },
  {
    id: "chay-tam-coc",
    name: "Nhà hàng Chay Tam Cốc",
    nameEn: "Tam Coc Vegetarian Restaurant",
    type: "vegetarian",
    description: "Nhà hàng chay thanh tịnh gần chùa, thực phẩm hữu cơ từ vườn nhà, không gian yên bình.",
    descriptionEn: "Peaceful vegetarian restaurant near the pagoda, organic home-grown food, tranquil atmosphere.",
    address: "Ninh Hải, Hoa Lư, Ninh Bình",
    lat: 20.2180,
    lng: 105.9320,
    priceRange: "60.000 - 150.000 VNĐ/người",
    specialDishes: ["Bún bò Huế chay", "Cơm thập cẩm chay", "Chả giò rau củ", "Chè đậu xanh"],
    specialDishesEn: ["Vegetarian spicy noodles", "Mixed vegetarian rice", "Vegetable spring rolls", "Mung bean dessert"],
    openHours: "06:00 - 20:00",
    rating: 4.5,
  },
];

export const ninhBinhInfo = {
  vi: {
    climate: "Khí hậu nhiệt đới gió mùa, mát mẻ mùa xuân-thu, nóng ẩm hè, lạnh đông.",
    bestTime: "Tháng 3-4 (mùa lúa vàng) và tháng 10-11 (mùa nước cạn, dễ đi thuyền)",
    getting: "Cách Hà Nội 90km, đi tàu hỏa hoặc xe bus từ bến Giáp Bát.",
    tips: [
      "Đặt thuyền Tràng An và Tam Cốc sớm vào mùa cao điểm",
      "Mặc áo dài tay khi đi thuyền để tránh nắng",
      "Thử đặc sản dê núi và cơm cháy Ninh Bình",
      "Leo Hang Mua lúc sáng sớm để tránh nắng và đông khách",
    ],
  },
  en: {
    climate: "Tropical monsoon climate: cool spring/autumn, hot humid summer, cold winter.",
    bestTime: "March-April (golden rice season) and October-November (low water, easy boating)",
    getting: "90km from Hanoi, by train or bus from Giap Bat station.",
    tips: [
      "Book Trang An and Tam Coc boat tickets early in peak season",
      "Wear long sleeves on the boat to protect from sun",
      "Try local specialties: mountain goat and crispy rice",
      "Hike Mua Cave early morning to avoid heat and crowds",
    ],
  },
};

export function calculateDistance(lat1: number, lng1: number, lat2: number, lng2: number): number {
  const R = 6371;
  const dLat = (lat2 - lat1) * Math.PI / 180;
  const dLng = (lng2 - lng1) * Math.PI / 180;
  const a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(lat1 * Math.PI / 180) * Math.cos(lat2 * Math.PI / 180) *
    Math.sin(dLng / 2) * Math.sin(dLng / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

export function getSystemPrompt(lang: "vi" | "en"): string {
  const spots = touristSpots.map(s =>
    `- ${lang === "vi" ? s.name : s.nameEn}: ${lang === "vi" ? s.description : s.descriptionEn} | Địa chỉ: ${s.address} | Thời gian tham quan: ${s.visitDuration}h | Giờ mở cửa: ${s.openHours} | Vé: ${s.ticketPrice}`
  ).join("\n");

  const hotels = accommodations.map(a =>
    `- ${lang === "vi" ? a.name : a.nameEn}: ${lang === "vi" ? a.description : a.descriptionEn} | ${a.address} | Giá: ${a.priceRange} | Rating: ${a.rating}/5`
  ).join("\n");

  const eats = restaurants.map(r =>
    `- ${lang === "vi" ? r.name : r.nameEn}: ${lang === "vi" ? r.description : r.descriptionEn} | ${r.address} | Giá: ${r.priceRange} | Giờ mở: ${r.openHours} | Món đặc biệt: ${lang === "vi" ? r.specialDishes.join(", ") : r.specialDishesEn.join(", ")}`
  ).join("\n");

  if (lang === "vi") {
    return `Bạn là trợ lý du lịch AI thông minh của NinhBinhAITravel, chuyên gia về du lịch Ninh Bình, Việt Nam.

NHIỆM VỤ CỦA BẠN:
1. Tư vấn lịch trình du lịch Ninh Bình được cá nhân hóa, tối ưu theo khoảng cách thực tế và thời gian di chuyển
2. Gợi ý các địa điểm phù hợp với sở thích và thời gian của du khách
3. Đề xuất chỗ ở và nhà hàng phù hợp ngân sách
4. Trả lời câu hỏi về văn hóa, thời tiết, phương tiện đi lại
5. Tương tác thân thiện, nhiệt tình như người bạn địa phương am hiểu

PHONG CÁCH GIAO TIẾP:
- Thân thiện, nhiệt tình, dùng biểu tượng cảm xúc vừa phải
- Đặt câu hỏi để hiểu rõ nhu cầu trước khi đề xuất
- Chia sẻ mẹo hay và kinh nghiệm thực tế
- Khi lập lịch trình, tính toán thời gian di chuyển thực tế (xe máy/ô tô) và gom nhóm các điểm gần nhau
- Nếu chưa đủ thông tin, hỏi lại: số ngày, ngân sách, sở thích, đi nhóm hay cá nhân

DỮ LIỆU ĐỊA ĐIỂM THAM QUAN:
${spots}

DỮ LIỆU CƠ SỞ LƯU TRÚ:
${hotels}

DỮ LIỆU NHÀ HÀNG:
${eats}

QUY TẮC LẬP LỊCH TRÌNH:
- Gom nhóm điểm gần nhau (Tràng An + Hoa Lư gần nhau, Tam Cốc + Hang Mua gần nhau)
- Buổi sáng thăm điểm xa, chiều về điểm gần nơi lưu trú
- Tính thời gian di chuyển: 10-15 phút giữa các điểm trong cùng khu, 20-30 phút giữa các khu
- Không nhồi quá 3-4 điểm/ngày để có thời gian trải nghiệm sâu
- Đề xuất ăn trưa ở gần điểm tham quan buổi sáng

Hãy luôn nhiệt tình, chính xác và mang lại trải nghiệm tốt nhất cho du khách!`;
  } else {
    return `You are the intelligent AI travel assistant of NinhBinhAITravel, an expert on tourism in Ninh Binh, Vietnam.

YOUR MISSION:
1. Provide personalized Ninh Binh travel itineraries, optimized by actual distance and travel time
2. Suggest destinations matching visitor interests and timeframe
3. Recommend accommodations and restaurants within budget
4. Answer questions about culture, weather, transportation
5. Interact warmly and enthusiastically like a knowledgeable local friend

COMMUNICATION STYLE:
- Friendly, enthusiastic, moderate use of emojis
- Ask questions to understand needs before suggesting
- Share useful tips and practical experience
- When planning itineraries, calculate realistic travel time (motorbike/car) and group nearby spots
- If information is insufficient, ask: how many days, budget, interests, group or solo

TOURIST ATTRACTIONS DATA:
${spots}

ACCOMMODATION DATA:
${hotels}

RESTAURANT DATA:
${eats}

ITINERARY PLANNING RULES:
- Group nearby spots (Trang An + Hoa Lu are close, Tam Coc + Mua Cave are close)
- Morning: visit farther spots, afternoon: return to spots near accommodation
- Travel time: 10-15 min between spots in the same area, 20-30 min between areas
- Don't pack more than 3-4 spots/day to allow deep experience
- Suggest lunch near morning sightseeing spots

Always be enthusiastic, accurate, and provide the best experience for visitors!`;
  }
}
