import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv";


const TOKEN = "0bceb59a8ccb9d4a0fa8ee922e27a0ad";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};