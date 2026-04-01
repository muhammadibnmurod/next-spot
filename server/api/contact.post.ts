import nodemailer from "nodemailer";

export default defineEventHandler(async (event) => {
  const body = await readBody(event);
  const { name, company, position, subject, message, email, phone } = body;

  if (!name || !subject || !message) {
    throw createError({ statusCode: 400, statusMessage: "Missing required fields" });
  }

  const config = useRuntimeConfig();

  const transporter = nodemailer.createTransport({
    host: config.smtpHost,
    port: Number(config.smtpPort) || 587,
    secure: false,
    auth: {
      user: config.smtpUser,
      pass: config.smtpPass,
    },
  });

  await transporter.sendMail({
    from: `"NEXT SPOT Form" <${config.smtpUser}>`,
    to: "tokh1rov.code@gmail.com",
    subject: `[相談フォーム] ${subject}`,
    html: `
      <h2>新しい相談申込み</h2>
      <table style="border-collapse:collapse;width:100%">
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">氏名</td><td style="padding:8px;border:1px solid #ddd">${name}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">会社名</td><td style="padding:8px;border:1px solid #ddd">${company || "—"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">役職</td><td style="padding:8px;border:1px solid #ddd">${position || "—"}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">件名</td><td style="padding:8px;border:1px solid #ddd">${subject}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">相談内容</td><td style="padding:8px;border:1px solid #ddd">${message}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">メールアドレス</td><td style="padding:8px;border:1px solid #ddd">${email}</td></tr>
        <tr><td style="padding:8px;border:1px solid #ddd;font-weight:bold">電話番号</td><td style="padding:8px;border:1px solid #ddd">${phone}</td></tr>
      </table>
    `,
  });

  return { success: true };
});
