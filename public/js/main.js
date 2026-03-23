function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}

function showWelcome() {
  const box = document.getElementById("welcomeMessage");
  box.textContent = "Bloom Studio mang đến giải pháp thiết kế tinh tế, hiện đại và phù hợp với thương hiệu của bạn.";
}

function showTime() {
  const now = new Date();
  const text = now.toLocaleString("vi-VN");
  document.getElementById("time").textContent = `Thời gian hiện tại: ${text}`;
}

function sayHello() {
  const name = document.getElementById("nameInput").value.trim();
  const greeting = document.getElementById("greeting");

  if (!name) {
    greeting.textContent = "Vui lòng nhập tên để chúng tôi có thể chào bạn một cách thân thiện hơn.";
    return;
  }

  greeting.textContent = `Xin chào ${name}, Bloom Studio rất vui được đồng hành cùng dự án của bạn.`;
}

let count = 0;

function increase() {
  count++;
  updateCounter();
}

function decrease() {
  count--;
  updateCounter();
}

function resetCounter() {
  count = 0;
  updateCounter();
}

function updateCounter() {
  document.getElementById("counter").textContent = count;
}

fetch("data/build-info.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Không tìm thấy build info");
    }
    return response.json();
  })
  .then((data) => {
    document.getElementById("buildInfo").textContent = JSON.stringify(data, null, 2);
  })
  .catch(() => {
    document.getElementById("buildInfo").textContent =
      "Chưa có dữ liệu build. Website vẫn hoạt động bình thường và sẵn sàng để deploy.";
  });