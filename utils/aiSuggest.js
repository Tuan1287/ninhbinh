import khudiem from "../data/khudiem";
import luutru from "../data/luutru";
import nhahang from "../data/nhahang";

/**
 * INPUT:
 * {
 *   so_ngay: 2,
 *   ngan_sach: 2000000,
 *   so_thich: ["thien_nhien", "checkin"]
 * }
 */

export function goiYLichTrinhV2({ so_ngay, ngan_sach, so_thich }) {
  // ===== 1. GOM NHÓM THEO KHU VỰC =====
  const khu_vuc_map = {
    "Tràng An": ["Tràng An", "Bái Đính", "Hoa Lư"],
    "Tam Cốc": ["Tam Cốc", "Hang Múa", "Thung Nham"],
    "Gia Viễn": ["Vân Long", "Cúc Phương"]
  };

  function xacDinhKhuVuc(ten) {
    for (let khu in khu_vuc_map) {
      if (khu_vuc_map[khu].some(k => ten.includes(k))) {
        return khu;
      }
    }
    return "Khác";
  }

  // ===== 2. GẮN KHU VỰC CHO ĐIỂM =====
  let diem_data = khudiem.map(d => ({
    ...d,
    khu_vuc: xacDinhKhuVuc(d.ten)
  }));

  // ===== 3. FILTER THEO SỞ THÍCH =====
  let diem_phu_hop = diem_data.filter(d =>
    !so_thich || so_thich.length === 0
      ? true
      : so_thich.includes(d.loai)
  );

  if (diem_phu_hop.length === 0) diem_phu_hop = diem_data;

  // ===== 4. CHỌN KHU VỰC CHÍNH =====
  const dem_khu = {};
  diem_phu_hop.forEach(d => {
    dem_khu[d.khu_vuc] = (dem_khu[d.khu_vuc] || 0) + 1;
  });

  const khu_chinh = Object.keys(dem_khu).sort(
    (a, b) => dem_khu[b] - dem_khu[a]
  )[0];

  // ===== 5. CHỌN KHÁCH SẠN =====
  let ks_phu_hop = luutru.filter(
    ks =>
      ks.gia_trung_binh <= ngan_sach / so_ngay &&
      ks.khu_vuc.includes(khu_chinh)
  );

  if (ks_phu_hop.length === 0) ks_phu_hop = luutru;

  const khach_san = ks_phu_hop[0];

  // ===== 6. LỌC ĐIỂM THEO KHU =====
  let diem_theo_khu = diem_phu_hop.filter(
    d => d.khu_vuc === khu_chinh
  );

  if (diem_theo_khu.length < 2) diem_theo_khu = diem_phu_hop;

  // ===== 7. TÍNH CHI PHÍ =====
  let tong_chi_phi = 0;
  let lich_trinh = [];
  let index = 0;

  for (let ngay = 1; ngay <= so_ngay; ngay++) {
    let sang = diem_theo_khu[index++];
    let chieu = diem_theo_khu[index++];

    if (!sang) sang = diem_theo_khu[0];
    if (!chieu) chieu = diem_theo_khu[1] || diem_theo_khu[0];

    // ===== chọn nhà hàng cùng khu =====
    let nha_hang_trua =
      nhahang.find(nh => nh.khu_vuc.includes(khu_chinh)) ||
      nhahang[0];

    let nha_hang_toi =
      nhahang[(index + ngay) % nhahang.length];

    // ===== tính chi phí =====
    let chi_phi_ngay =
      (sang.gia_ve || 0) +
      (chieu.gia_ve || 0) +
      (nha_hang_trua.gia_trung_binh || 0) +
      (nha_hang_toi.gia_trung_binh || 0) +
      (khach_san.gia_trung_binh || 0);

    tong_chi_phi += chi_phi_ngay;

    lich_trinh.push({
      ngay,
      khu_vuc: khu_chinh,
      sang: {
        ten: sang.ten,
        gio: "08:00 - 11:30"
      },
      trua: {
        ten: nha_hang_trua.ten,
        gio: "11:30 - 13:00"
      },
      chieu: {
        ten: chieu.ten,
        gio: "13:30 - 17:00"
      },
      toi: {
        ten: nha_hang_toi.ten,
        gio: "18:30 - 21:00"
      },
      luu_tru: khach_san.ten,
      chi_phi_ngay
    });
  }

  // ===== 8. CẢNH BÁO NGÂN SÁCH =====
  let canh_bao = null;
  if (tong_chi_phi > ngan_sach) {
    canh_bao = "Lịch trình vượt ngân sách, nên chọn khách sạn rẻ hơn hoặc giảm điểm tham quan.";
  }

  return {
    khu_vuc_goi_y: khu_chinh,
    khach_san: khach_san.ten,
    tong_chi_phi,
    canh_bao,
    lich_trinh
  };
}
