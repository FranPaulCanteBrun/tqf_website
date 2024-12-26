const subjectField = document.getElementById("subject") as HTMLSelectElement;
const messageContainer = document.getElementById(
  "message-container"
) as HTMLDivElement;
const form = document.getElementById("contact-form") as HTMLFormElement;

subjectField.addEventListener("change", () => {
  if (subjectField.value && subjectField.value !== "") {
    messageContainer.style.display = "block";
    messageContainer.classList.add("show");
  } else {
    messageContainer.style.display = "none";
    messageContainer.classList.remove("show");
  }
});

form.addEventListener("submit", async (e) => {
  e.preventDefault();

  const name = document.getElementById("name") as HTMLInputElement;
  const phone = document.getElementById("phone") as HTMLInputElement;
  const email = document.getElementById("email") as HTMLInputElement;
  const subject = document.getElementById("subject") as HTMLSelectElement;
  const message = document.getElementById("message") as HTMLTextAreaElement;

  if (
    !name.value.trim() ||
    !phone.value.trim() ||
    !email.value.trim() ||
    !subject.value ||
    !message.value.trim()
  ) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  try {
    const apiUrl = "http://localhost:5000/api/send-email";

    const response = await fetch(apiUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name.value,
        phone: phone.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
      }),
    });

    if (!response.ok) {
      throw new Error("Failed to send message.");
    }

    const data = await response.json();
    if (data.success) {
      alert("Message sent successfully!");
      form.reset(); //
      messageContainer.style.display = "none";
    } else {
      alert(data.message || "Failed to send message. Please try again.");
    }
  } catch (error) {
    console.error("Error:", error);
    alert("An error occurred. Please try again.");
  }
});
