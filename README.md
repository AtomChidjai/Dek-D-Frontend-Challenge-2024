# Dek-D Frontend Quiz ⭐ <br/>

### Desktop View & Mobile View
<div style="display: flex;">
    <img src="https://github.com/user-attachments/assets/e843a2eb-319e-4eda-950b-75be85ffe85b" alt="Desktop View" style="height: 300px;">
    <img src="https://github.com/user-attachments/assets/0ab3b3fa-6dc7-48c7-8ee2-718cb427eb8b" alt="Mobile View" style="height: 300px;">
</div>

## Introduction
โปรเจคนี้เป็นเว็บไซต์ที่มีหน้าเเสดงรายการนิยายที่คั่นไว้พร้อมกับ banner โปรโมทนิยายครับ ซึ่งผมทําขึ้นตามโจทย์ Front-end Developer — Intern ของ Dek-D

## Features
- ผู้ใช้สามารถ สร้าง/เเก้ไข/ลบ รายการนิยายได้
- มี banner เเสดงนิยายใหม่
- รองรับการทํางานเเบบ Responsive

## Extras
- มีการสร้างหน้าต่าง pop-up (modal) ขึ้นมาเมื่อมีการ interact กับรายการนิยาย
- มีการเพิ่ม effect hover ให้กับ text ต่าง ๆ ในรายการนิยาย
- มีการสร้าง pop-up เเสดงผลเมื่อมีการ สร้าง/ลบ รายการ

## Demo
- มีการ deploy demo ไว้บน vercel : https://dek-d-frontend-challenge-2024.vercel.app/

## Technologies
- Vite
- React
- Tailwind CSS 
- React Slick (ใช้สําหรับการสร้าง slideshow banner)
- React Toastify (ใช้สร้าง pop-up เเจ้งเตือน)
- https://placehold.co/ (ภาพจําลอง (mock images))
- mockapi.io (ข้อมูลจําลอง (mock data))

### Installation
1. Clone the repository
    ```sh
    https://github.com/AtomChidjai/Dek-D-Frontend-Challenge-2024.git
    ```
2. Navigate to the project directory
    ```sh
    cd front-end-project
    ```
3. Install dependencies
    ```sh
    npm install
    ```
4. Start the development server
    ```sh
    npm run dev
    ```

## Folder Structure
### file ต่าง ๆ ด้านล่างจะเป็น files เเละ components ที่สําคัญในโปรเจคนี้ที่ได้สร้างขึ้นมานะครับ
- front-end-project/src/components/Card.jsx       (กล่องรายการนิยาย)
- front-end-project/src/components/Carousel.jsx   (slideshow เเสดง banner นิยายใหม่)
- front-end-project/src/components/Container.jsx  (กล่อง เก็บ/เเสดง รายการนิยาย)
- front-end-project/src/components/Header.jsx     (หัวข้อตัวหนา)
- front-end-project/src/components/Modal.jsx      (หน้าต่าง pop-up เเสดงข้อมูลรายการนิยาย)
- front-end-project/src/styles/ExtraStyle.css     (ไฟล์ css สําหรับปรับเเต่งเพิ่มเติม)
