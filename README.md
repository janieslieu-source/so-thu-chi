# Sổ Thu Chi

App ghi thu chi công ty theo ngày: khoản thu (tiền mặt / chuyển khoản), khoản chi (nhận hàng, gửi hàng, chi khác), tồn đầu tự lấy từ tồn cuối hôm trước, xuất Excel cuối ngày, kèm mục thu chi cá nhân / gia đình.

Dữ liệu và ảnh được lưu **ngay trong trình duyệt / điện thoại đang dùng** (không gửi lên máy chủ nào). Hãy dùng nút **Sao lưu ra file** mỗi tuần.

## Các file

| File | Dùng để |
|---|---|
| `index.html` | Toàn bộ app |
| `manifest.json`, `sw.js` | Cho phép cài app lên điện thoại và mở khi không có mạng |
| `icon-192.png`, `icon-512.png`, `icon-maskable-512.png` | Icon đồng xu vàng |

## Phần 1: Đưa lên GitHub (không cần biết lập trình)

1. Vào https://github.com, đăng ký hoặc đăng nhập.
2. Bấm dấu **+** góc trên bên phải, chọn **New repository**.
   - Repository name: `so-thu-chi`
   - Chọn **Public** (GitHub Pages miễn phí cần Public; dữ liệu của bạn không nằm trong repo nên vẫn an toàn).
   - Bấm **Create repository**.
3. Ở trang repo vừa tạo, bấm **uploading an existing file**.
4. Kéo thả **tất cả file trong thư mục này** vào (index.html, manifest.json, sw.js, 3 file icon, README.md). Bấm **Commit changes**.
5. Vào **Settings** → **Pages** (menu bên trái).
   - Source: **Deploy from a branch**
   - Branch: **main**, thư mục **/(root)**, bấm **Save**.
6. Đợi 1–2 phút, tải lại trang. Link app sẽ hiện ở đầu trang Pages, dạng:
   `https://<tên-github-của-bạn>.github.io/so-thu-chi/`

Mở link đó trên điện thoại bằng **Chrome**, bấm menu **⋮** → **Thêm vào màn hình chính / Cài đặt ứng dụng**. Icon đồng xu sẽ xuất hiện như một app bình thường.

**Cập nhật sau này:** vào repo → bấm vào file `index.html` → biểu tượng bút chì, hoặc **Add file → Upload files** để tải bản mới đè lên.

## Phần 2: Tạo file APK cho Android

Cần làm xong Phần 1 trước (app phải có link GitHub Pages).

1. Vào https://www.pwabuilder.com
2. Dán link GitHub Pages của bạn vào ô, bấm **Start**.
3. Đợi trang chấm điểm xong, bấm **Package For Stores** → chọn **Android** → **Generate Package**.
   - Package ID: ví dụ `com.tencongty.sothuchi`
   - App name: `Sổ Thu Chi`
   - Giữ các mục khác mặc định, bấm **Download Package**.
4. Giải nén file .zip tải về. Bên trong có:
   - File **`.apk`**: gửi vào điện thoại (Zalo, Drive, cáp), mở ra để cài. Nếu Android hỏi, cho phép "Cài ứng dụng không rõ nguồn gốc".
   - File **`.aab`**: chỉ cần khi đưa lên Google Play.
   - File **`signing.keystore`** và **`signing-key-info.txt`**: **cất giữ cẩn thận**, cần dùng khi tạo bản cập nhật sau này.
5. (Tuỳ chọn, để app mở toàn màn hình, không hiện thanh địa chỉ) Trong gói tải về có file `assetlinks.json`. Tạo thư mục `.well-known` trong repo GitHub và tải file này vào đó (`.well-known/assetlinks.json`).

**Lưu ý:** APK là "vỏ" mở trang GitHub Pages của bạn. Khi bạn cập nhật `index.html` trên GitHub, app trên điện thoại tự nhận bản mới, không cần cài lại APK.

## Sao lưu dữ liệu

- Dữ liệu nằm riêng trên từng máy. Máy A không thấy dữ liệu máy B.
- Gỡ app, xoá dữ liệu trình duyệt, hay đổi máy đều làm **mất dữ liệu** nếu chưa sao lưu.
- Bấm **Sao lưu ra file** (cuối trang, tab Theo ngày) để lưu file `.json`, gửi vào Zalo/Drive.
- Máy mới: bấm **Khôi phục từ file** và chọn file đó.
