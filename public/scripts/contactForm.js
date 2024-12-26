"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const subjectField = document.getElementById("subject");
const messageContainer = document.getElementById("message-container");
const form = document.getElementById("contact-form");
subjectField.addEventListener("change", () => {
    if (subjectField.value && subjectField.value !== "") {
        messageContainer.style.display = "block";
        messageContainer.classList.add("show");
    }
    else {
        messageContainer.style.display = "none";
        messageContainer.classList.remove("show");
    }
});
form.addEventListener("submit", (e) => __awaiter(void 0, void 0, void 0, function* () {
    e.preventDefault();
    const name = document.getElementById("name");
    const phone = document.getElementById("phone");
    const email = document.getElementById("email");
    const subject = document.getElementById("subject");
    const message = document.getElementById("message");
    if (!name.value.trim() ||
        !phone.value.trim() ||
        !email.value.trim() ||
        !subject.value ||
        !message.value.trim()) {
        alert("Please fill out all fields before submitting.");
        return;
    }
    try {
        const response = yield fetch(form.action, {
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
        const data = yield response.json();
        if (data.success) {
            alert("Message sent successfully!");
            form.reset();
            messageContainer.style.display = "none";
        }
        else {
            alert("Failed to send message. Please try again.");
        }
    }
    catch (error) {
        console.error("Error:", error);
        alert("An error occurred. Please try again.");
    }
}));
