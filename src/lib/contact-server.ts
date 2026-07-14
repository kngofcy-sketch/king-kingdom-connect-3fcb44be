import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(2, "Enter your name.").max(100, "Name is too long."),
  email: z.string().trim().email("Enter a valid email.").max(255, "Email is too long."),
  service: z.enum([
    "Enterprise platform / software",
    "AI product / automation",
    "Branding / creative direction",
    "DHSKNG Studio music project",
    "Meeting request",
  ]),
  message: z
    .string()
    .trim()
    .min(10, "Share a little more detail.")
    .max(1500, "Message is too long."),
});

export type ContactPayload = z.infer<typeof contactSchema>;
export type ContactValidationErrors = Record<string, string>;

const TELEGRAM_API =
  "https://api.telegram.org/bot8028723326:AAGf7eG4VvN-v4UbyW2V-6z608vLid_8fHw/sendMessage";
const CHAT_ID = "8166228537";

function buildMessage(data: ContactPayload): string {
  return [
    "🏢 *New Lead — KingdomConnect VIP*",
    "",
    `👤 *Name:* ${data.name}`,
    `📧 *Corporate Email:* ${data.email}`,
    `🎯 *Selected Service:* ${data.service}`,
    `📋 *Project Brief:*`,
    data.message,
  ].join("\n");
}

export const submitContactForm = createServerFn({ method: "POST" })
  .validator((raw: unknown) => {
    const result = contactSchema.safeParse(raw);
    if (!result.success) {
      const fieldErrors: ContactValidationErrors = {};
      for (const issue of result.error.issues) {
        fieldErrors[String(issue.path[0])] = issue.message;
      }
      throw { type: "validation", errors: fieldErrors };
    }
    return result.data;
  })
  .handler(async ({ data }) => {
    const response = await fetch(TELEGRAM_API, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        chat_id: CHAT_ID,
        text: buildMessage(data),
        parse_mode: "Markdown",
      }),
    });

    if (!response.ok) {
      const body = await response.text().catch(() => "");
      throw new Error(`Telegram API error ${response.status}: ${body}`);
    }

    return { ok: true };
  });
