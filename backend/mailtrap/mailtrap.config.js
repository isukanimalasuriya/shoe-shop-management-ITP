import {MailtrapClient} from "mailtrap";
import dotenv from "dotenv";


const TOKEN = "46c804b8ced6ac6b5e71fa2b08038771";

export const mailtrapClient = new MailtrapClient({
  token: TOKEN,
});

export const sender = {
  email: "hello@demomailtrap.co",
  name: "Mailtrap Test",
};