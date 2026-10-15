# Nối thiệp với Google Sheet

Mỗi lần khách bấm "Gửi xác nhận", thiệp thêm một dòng vào Google Sheet. Mục "Sổ lưu bút" đọc lại các lời chúc từ chính Sheet đó.

## 1. Tạo Sheet

Tạo Google Sheet mới. Không cần tạo tiêu đề cột, đoạn mã tự tạo.

## 2. Dán mã Apps Script

Trong Sheet: **Tiện ích mở rộng → Apps Script**. Xoá nội dung có sẵn, dán đoạn dưới đây rồi bấm Lưu.

```js
const HEAD = ['Thời gian', 'Họ tên', 'Tham dự', 'Số người', 'Lời chúc', 'Thiệp', 'Hiện'];

function sheet_() {
  const sh = SpreadsheetApp.getActiveSpreadsheet().getSheets()[0];
  if (sh.getLastRow() === 0) sh.appendRow(HEAD);
  return sh;
}

function doPost(e) {
  const d = JSON.parse(e.postData.contents);
  const lock = LockService.getScriptLock();
  lock.waitLock(10000);
  try {
    sheet_().appendRow([
      new Date(),
      String(d.name || '').slice(0, 120),
      d.attend === 'yes' ? 'Có' : 'Không',
      d.guests || '',
      String(d.wish || '').slice(0, 1000),
      d.side === 'gai' ? 'Nhà gái' : 'Nhà trai',
      'có',
    ]);
  } finally { lock.releaseLock(); }
  return ContentService.createTextOutput('ok');
}

function doGet() {
  const rows = sheet_().getDataRange().getValues().slice(1)
    .filter(r => r[4] && String(r[6]).trim().toLowerCase() !== 'không')
    .map(r => ({ name: r[1], wish: r[4], time: new Date(r[0]).toISOString() }))
    .reverse();
  return ContentService.createTextOutput(JSON.stringify(rows))
    .setMimeType(ContentService.MimeType.JSON);
}
```

## 3. Triển khai

1. Bấm **Triển khai → Tùy chọn triển khai mới**.
2. Loại: **Ứng dụng web**.
3. Thực thi với tư cách: **Tôi**. Người có quyền truy cập: **Bất kỳ ai**.
4. Bấm Triển khai, cấp quyền khi được hỏi, rồi sao chép **URL ứng dụng web** (dạng `https://script.google.com/macros/s/.../exec`).

## 4. Dán URL vào thiệp

Mở bảng Tweaks của thiệp, mục **Lưu dữ liệu → sheetUrl**, dán URL vừa sao chép.

## Ẩn một lời chúc

Trong Sheet, sửa ô cột **Hiện** của dòng đó thành `không`. Lời chúc sẽ biến khỏi Sổ lưu bút ở lần tải trang sau.

## Lưu ý

- Khi chưa dán URL, lời chúc chỉ lưu trên trình duyệt của người đang xem (dùng để thử).
- Nếu sửa mã Apps Script, cần **Triển khai → Quản lý triển khai → Chỉnh sửa → Phiên bản mới** thì thay đổi mới có hiệu lực.
