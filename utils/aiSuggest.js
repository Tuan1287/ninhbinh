import khudiem from "../data/khudiem";
import luutru from "../data/luutru";
import nhahang from "../data/nhahang";

/**
 * input:
 * {
 *   so_ngay: 2,
 *   ngan_sach: 2000000,
 *   so_thich: ["thien_nhien", "checkin"]
 * }
 */

export function goiYLichTrinh({ so_ngay, ngan_sach, so_thich }) {
  let lich_trinh = [];

  // 1. chọn khu điểm theo sở thích
  let diem_phu_hop = khudiem.filter(diem =>
    !so_thich || so_thich.length === 0
      ? true
      : so_thich.includes(diem.loai)
  );

  // fallback nếu chưa có loai
  if (diem_phu_hop.length === 0) diem_phu_hop = khudiem;

  // 2. chọn lưu trú theo ngân sách
  let ks_phu_hop = luutru.filter(ks => ks.gia_trung_binh <= ngan_sach / so_ngay);

  if (ks_phu_hop.length === 0) ks_phu_hop = luutru;

  let khach_san = ks_phu_hop[0];

  // 3. chia lịch theo ngày
  let index = 0;

  for (let ngay = 1; ngay <= so_ngay; ngay++) {
    let sang = diem_phu_hop[index++];
    let chieu = diem_phu_hop[index++];

    // nếu thiếu thì quay vòng
    if (!sang) sang = diem_phu_hop[0];
    if (!chieu) chieu = diem_phu_hop[1] || diem_phu_hop[0];

    // chọn nhà hàng gần khu vực (logic đơn giản)
    let nha_hang_trua = nhahang.find(nh =>
      nh.khu_vuc === khach_san.khu_vuc
    ) || nhahang[0];

    let nha_hang_toi = nhahang[(index + 1) % nhahang.length];

    lich_trinh.push({
      ngay,
      sang: sang.ten,
      trua: nha_hang_trua.ten,
      chieu: chieu.ten,
      toi: nha_hang_toi.ten,
      luu_tru: khach_san.ten
    });
  }

  return {
    khach_san: khach_san.ten,
    lich_trinh
  };
}
