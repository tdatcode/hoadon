# BÁO CÁO NGẮN DỰ ÁN TỰ ĐỘNG NHẬP HÓA ĐƠN

## 1. Tổng quan dự án
Dự án xây dựng một công cụ web giúp tự động đọc hóa đơn đầu vào dạng PDF, trích xuất thông tin quan trọng bằng AI, hiển thị kết quả để kiểm tra/chỉnh sửa, sau đó xuất ra file Excel theo đúng định dạng phục vụ nhập liệu kế toán.

## 2. Bài toán đặt ra
Trong thực tế, nhập thông tin hóa đơn thủ công tốn nhiều thời gian, dễ sai sót và khó đồng bộ dữ liệu. Dự án hướng đến việc:
- Giảm thao tác nhập liệu bằng tay.
- Tăng tốc độ xử lý nhiều hóa đơn cùng lúc.
- Chuẩn hóa dữ liệu đầu ra để dễ tổng hợp và báo cáo.

## 3. Mục tiêu chính
- Tự động đọc nội dung hóa đơn PDF.
- Trích xuất các trường quan trọng như ngày, nhà cung cấp, số hóa đơn, tiền trước VAT, VAT, tổng sau VAT.
- Phân loại chi phí dựa trên nội dung hóa đơn.
- Cho phép người dùng xem lại, sửa nhanh và xuất Excel.

## 4. Công nghệ sử dụng
- `HTML/CSS/JavaScript`: xây dựng giao diện và xử lý phía client.
- `PDF.js`: đọc và trích xuất text từ file PDF.
- `OpenAI API (model gpt-4o)`: phân tích nội dung hóa đơn và trả về dữ liệu JSON có cấu trúc.
- `SheetJS (xlsx)`: xuất dữ liệu ra file Excel.
- `Node.js HTTP server`: phục vụ file giao diện trên `localhost:3000`.

## 5. Quy trình hoạt động
1. Người dùng nhập API key.
2. Tải lên một hoặc nhiều file hóa đơn PDF.
3. Hệ thống dùng `PDF.js` để lấy text từ file PDF.
4. Nội dung được gửi lên AI để trích xuất thông tin và phân loại.
5. Kết quả được hiển thị thành bảng để người dùng kiểm tra, sửa nếu cần.
6. Người dùng xuất file Excel để phục vụ công việc kế toán.

## 6. Chức năng nổi bật
- Hỗ trợ kéo thả nhiều file PDF cùng lúc.
- Xử lý tuần tự từng hóa đơn, có hiển thị trạng thái.
- Tự động tổng hợp dữ liệu vào bảng kết quả.
- Cho phép chỉnh sửa trực tiếp trên bảng.
- Thống kê số lượng hóa đơn và tổng giá trị sau VAT.
- Xuất file Excel sẵn sàng sử dụng.

## 7. Giá trị thực tế
- Rút ngắn thời gian nhập hóa đơn.
- Giảm lỗi do nhập liệu thủ công.
- Dễ dàng mở rộng cho nhiều loại hóa đơn khác nhau.
- Hỗ trợ bộ phận kế toán, vận hành và quản lý dữ liệu tốt hơn.

## 8. Hạn chế hiện tại
- Độ chính xác phụ thuộc vào chất lượng text trích xuất từ PDF.
- Nếu PDF là ảnh scan kém chất lượng, kết quả AI có thể chưa ổn định.
- API key hiện đang lưu ở `localStorage`, chưa tối ưu về bảo mật.
- Hệ thống đang đọc tối đa 5 trang mỗi PDF.
- Phần prompt và quy tắc phân loại hiện đang viết cố định, chưa linh hoạt theo nhiều nghiệp vụ khác nhau.

## 9. Điểm cần lưu ý khi thuyết trình
- Giao diện hiện ghi `Anthropic API Key`, nhưng trong mã nguồn thực tế đang gọi `OpenAI API` với model `gpt-4o`.
- File `server.js` đang trỏ tới đường dẫn `xuathoadon/invoice_automation.html`; với cấu trúc thư mục hiện tại, đường dẫn này có khả năng sai và cần kiểm tra lại trước khi demo.
- Đây là phiên bản prototype hoạt động tốt cho mục tiêu tự động hóa trích xuất, nhưng vẫn cần bổ sung bảo mật, xử lý lỗi và tối ưu demo production.

## 10. Hướng phát triển
- Bổ sung OCR cho hóa đơn scan ảnh.
- Đưa API key và việc gọi AI về backend để tăng bảo mật.
- Mở rộng quy tắc phân loại chi phí.
- Lưu lịch sử xử lý hóa đơn.
- Kết nối trực tiếp với hệ thống kế toán/nội bộ.

## 11. Mẫu kết luận ngắn cho slide cuối
Dự án tự động nhập hóa đơn giúp giảm thời gian xử lý, tăng độ chính xác và chuẩn hóa dữ liệu kế toán. Việc kết hợp PDF.js, AI và xuất Excel cho thấy giải pháp có tính ứng dụng cao, phù hợp để phát triển thành công cụ hỗ trợ nghiệp vụ thực tế.

## 12. Gợi ý bố cục 6 slide
1. Giới thiệu đề tài và bài toán.
2. Mục tiêu của hệ thống.
3. Công nghệ sử dụng.
4. Quy trình xử lý hóa đơn.
5. Kết quả, ưu điểm và giá trị thực tế.
6. Hạn chế, hướng phát triển và kết luận.
