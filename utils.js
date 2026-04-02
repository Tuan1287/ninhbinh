// utils.js

// ===============================
// FORMAT
// ===============================

// Format giá tiền
export function formatPrice(price) {
  if (!price) return "Liên hệ";
  return new Intl.NumberFormat("vi-VN").format(price) + "đ";
}

// Format khoảng cách (km)
export function formatDistance(distance) {
  if (!distance) return "";
  return distance.toFixed(1) + " km";
}

// ===============================
// SEARCH & FILTER
// ===============================

// Tìm kiếm theo tên
export function searchByName(list, keyword) {
  if (!keyword) return list;

  return list.filter(item =>
    item.name.toLowerCase().includes(keyword.toLowerCase())
  );
}

// Lọc theo tag (ví dụ: "checkin", "gia dinh", "view dep")
export function filterByTag(list, tag) {
  if (!tag) return list;

  return list.filter(item =>
    item.tags && item.tags.includes(tag)
  );
}

// Lọc theo khoảng giá
export function filterByPrice(list, min, max) {
  return list.filter(item => {
    if (!item.price) return false;
    return item.price >= min && item.price <= max;
  });
}

// ===============================
// SORT
// ===============================

// Sắp xếp theo giá
export function sortByPrice(list, type = "asc") {
  return [...list].sort((a, b) => {
    if (!a.price) return 1;
    if (!b.price) return -1;

    return type === "asc"
      ? a.price - b.price
      : b.price - a.price;
  });
}

// ===============================
// RANDOM & PICK
// ===============================

// Lấy random 1 item
export function getRandomItem(list) {
  if (!list || list.length === 0) return null;
  return list[Math.floor(Math.random() * list.length)];
}

// Lấy random nhiều item
export function getRandomItems(list, count = 3) {
  return [...list]
    .sort(() => 0.5 - Math.random())
    .slice(0, count);
}

// ===============================
// DISTANCE (dự phòng nếu có lat/lng)
// ===============================

// Tính khoảng cách giữa 2 điểm (Haversine)
export function calculateDistance(lat1, lon1, lat2, lon2) {
  const R = 6371; // km
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);

  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) *
      Math.cos(deg2rad(lat2)) *
      Math.sin(dLon / 2) *
      Math.sin(dLon / 2);

  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  return R * c;
}

function deg2rad(deg) {
  return deg * (Math.PI / 180);
}

// ===============================
// GROUP DATA
// ===============================

// Gom nhóm theo field (ví dụ: khu vực)
export function groupBy(list, key) {
  return list.reduce((result, item) => {
    const group = item[key] || "Khác";
    if (!result[group]) result[group] = [];
    result[group].push(item);
    return result;
  }, {});
}

// ===============================
// AI SUPPORT (helper cho aisuggest)
// ===============================

// Chuẩn hóa dữ liệu trước khi gửi AI
export function normalizeDataForAI(list) {
  return list.map(item => ({
    name: item.name,
    price: item.price || null,
    tags: item.tags || [],
    location: item.location || "",
    description: item.description || ""
  }));
}
