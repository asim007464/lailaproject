# Admin panel & contact form backend – setup guide

This guide explains how to get the admin panel and contact form working, and **how to keep replies out of the spam folder**.

---

## 1. What you need to provide

### Supabase (database + admin login)

1. **Create a project** at [supabase.com](https://supabase.com) (free tier is enough).
2. **Get your keys:**  
   Project → **Settings** → **API**  
   - **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`  
   - **anon public** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`  
   - **service_role** (click “Reveal”) → `SUPABASE_SERVICE_ROLE_KEY`  
   ⚠️ Never expose the service_role key in the browser; it’s only for server-side API routes.

3. **Run the database schema:**  
   In Supabase: **SQL Editor** → New query → paste the contents of **`supabase/schema.sql`** → Run.

4. **Create the admin user (email + password):**  
   In Supabase: **Authentication** → **Users** → **Add user** → **Create new user**  
   - Enter the **email** you want to use for admin login (e.g. your Gmail or work email).  
   - Set a **password** (strong, only for you).  
   - Click **Create user**.  
   That user can now log in at **`/admin/login`** with this email and password.

### Sending emails: Gmail (Nodemailer) or Resend

You can use **either** of these. If both are set, **Gmail is used first** (so you can send from your own Gmail).

**Option A: Gmail with Nodemailer (send from your Gmail)**

1. Use the Gmail address you want to send **from** (e.g. `you@gmail.com`).
2. Create a **Gmail App Password** (Google does not allow your normal password for apps):
   - Go to [Google Account → Security](https://myaccount.google.com/security).
   - Turn on **2-Step Verification** if it’s not already on.
   - Under “How you sign in to Google”, click **App passwords** → select “Mail” and your device → Generate. Copy the 16-character password.
3. In **`.env.local`** set:
   - `GMAIL_USER=you@gmail.com`
   - `GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx` (the 16-character App Password, spaces optional)
   - `ADMIN_EMAIL=you@gmail.com` (or another address where you want to **receive** notifications)
4. Optionally set `EMAIL_FROM_NAME=NWstudios` (or your brand name) so the “From” line shows that name with your Gmail address.

Emails will be sent **from** your Gmail, so you can use your Gmail for both sending and receiving.

**Option B: Resend**

- **`ADMIN_EMAIL`** = where you **receive** notifications (e.g. your Gmail). So `ADMIN_EMAIL=yourname@gmail.com` is correct.
- **`EMAIL_FROM`** = who the email says it’s from. Resend **cannot** send “from” a Gmail address. Use either:
  - Testing: `EMAIL_FROM=NWstudios <onboarding@resend.dev>`
  - Production: verify your domain in Resend and use e.g. `EMAIL_FROM=NWstudios <hello@yourdomain.com>`.

1. **Sign up** at [resend.com](https://resend.com).
2. **Create an API key** → **API Keys** → **Create API Key** → copy the key → `RESEND_API_KEY`.
3. **Verify your domain (optional):** **Domains** → **Add domain** → add DNS records. Then set `EMAIL_FROM=NWstudios <hello@yourdomain.com>`.

### Environment variables

Create a file **`.env.local`** in the project root (same folder as `package.json`) with:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://xxxxx.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=eyJhbGc...
SUPABASE_SERVICE_ROLE_KEY=eyJhbGc...

# Email: use EITHER Gmail OR Resend (if both set, Gmail is used)
# Option A – Gmail:
# GMAIL_USER=you@gmail.com
# GMAIL_APP_PASSWORD=xxxx xxxx xxxx xxxx
# Option B – Resend:
# RESEND_API_KEY=re_xxxxx

# Your site (no trailing slash)
NEXT_PUBLIC_APP_URL=https://yoursite.com

# Where you RECEIVE notifications (e.g. your Gmail)
ADMIN_EMAIL=your-email@gmail.com

# Who the email is “From” (cannot be Gmail; use onboarding@resend.dev or your verified domain)
EMAIL_FROM=NWstudios <onboarding@resend.dev>
```

- **ADMIN_EMAIL** = where you receive notifications (e.g. your Gmail). **EMAIL_FROM** = who the email is from; cannot be Gmail — use `onboarding@resend.dev` or your verified domain. For local testing use `NEXT_PUBLIC_APP_URL=http://localhost:3000` and, if you haven’t verified a domain yet, you can leave `EMAIL_FROM` as is or use Resend’s default (e.g. `onboarding@resend.dev`).  
- **For production:** set `NEXT_PUBLIC_APP_URL` to your real site URL and **set `EMAIL_FROM` to an address on your verified domain** (e.g. `hello@yourdomain.com`).

---

## 2. How to avoid replies going to spam

| What to do | Why it helps |
|------------|----------------|
| **Verify your domain in Resend** | Providers (Gmail, Outlook, etc.) trust mail that passes SPF/DKIM. Without this, “From” is not fully trusted → more spam. |
| **Use a proper “From” address** | Set `EMAIL_FROM` to something like `NWstudios <hello@yourdomain.com>` so it’s clear and matches your domain. |
| **Use a real domain, not a free subdomain** | Sending from `@yourdomain.com` looks more professional and is treated better than generic or shared senders. |
| **Don’t spam** | Only send replies and notifications (no marketing blasts). This keeps your “sender reputation” good. |
| **Optional: set up DMARC** | Resend can guide you; it adds another layer of “this mail is legit” for inbox providers. |

**Summary:**  
- **Minimum:** Add `RESEND_API_KEY` and `ADMIN_EMAIL`; you can use Resend’s default “From” for testing, but some replies may land in spam.  
- **Recommended for “not spam”:** Verify your domain in Resend, set `EMAIL_FROM` to `Your Name or Brand <hello@yourdomain.com>`, and use that domain in `NEXT_PUBLIC_APP_URL`.

---

## 3. What the app does (no code changes needed)

- **Contact form submit** → Saves to Supabase, sends you an email (admin notification), sends the customer a “We received your message” email with a link to their conversation.
- **Admin** → Log in at `/admin/login` with the Supabase user you created. From `/admin` you see all submissions; click one to open the conversation and reply. Your reply is saved and emailed to the customer; they can reply again from their link.
- **Customer** → Opens the link from the first email (e.g. `yoursite.com/contact/thread/abc123`). They see their original message and all replies; they can add more messages. Each new message from them is saved and you get an email; you can reply again from the admin panel.

---

## 4. How to test that emails work (without using Gmail as sender)

You **don’t** put your Gmail in `EMAIL_FROM`. You only put it in `ADMIN_EMAIL`. Here’s how to test that everything works:

1. In **`.env.local`** set:
   - **`ADMIN_EMAIL`** = your Gmail (e.g. `you@gmail.com`) — this is where you **receive** emails.
   - **`EMAIL_FROM`** = `NWstudios <onboarding@resend.dev>` — the sender address (Resend’s test address).
   - **`RESEND_API_KEY`** = your key from Resend.
   - **`NEXT_PUBLIC_APP_URL`** = `http://localhost:3000` (for local test).

2. Restart the dev server: `npm run dev`.

3. Open your site’s contact form (e.g. `http://localhost:3000/contact`), fill it out with a **different** email (e.g. a friend’s or a second Gmail), and submit.

4. Check **your Gmail inbox** (and spam folder): you should receive the “New contact form: …” email. It will say **From: onboarding@resend.dev** — that’s normal. The important part is that it was **sent to** your Gmail (`ADMIN_EMAIL`).

5. Check the **customer’s** inbox: they should get “We received your message” with the thread link.

If you get the admin email in your Gmail, the setup is working. You never need to put your Gmail in `EMAIL_FROM`; that field is only for the “From” address (Resend’s or your domain).

---

## 5. Deploying to Vercel (emails not working?)

If submissions show in the admin panel but **no emails are sent**:

1. **Add env vars in Vercel:** Project → **Settings** → **Environment Variables**. Add the same variables as `.env.local` (Supabase, email, `ADMIN_EMAIL`, `NEXT_PUBLIC_APP_URL`). Apply to **Production** (and Preview if needed).

2. **Redeploy** after adding env vars — Vercel only picks them up on the next build.

3. **Check email config:** After deploy, open `https://your-site.vercel.app/api/health/email`. It returns:
   - `senderConfigured`: true/false
   - `method`: "gmail" | "resend" | "none"
   - `adminEmailSet`: true/false
   - `hint`: troubleshooting tip if something is wrong

4. **Resend with `onboarding@resend.dev`:** Resend’s free test sender only allows sending **to** the email you signed up with. To send to customers and any admin email, you must **verify your domain** in Resend and set `EMAIL_FROM=NWstudios <hello@yourdomain.com>`.

5. **Gmail:** Use a **Gmail App Password** (not your normal password). Enable 2-Step Verification first, then create an App Password at [Google Account → Security → App passwords](https://myaccount.google.com/apppasswords).

6. **Check Vercel logs:** Deployments → select your deployment → **Functions** → click a function log. Look for `[Email]` messages to see send failures.

---

## 6. Quick checklist

- [ ] Supabase project created, URL + anon + service_role keys in `.env.local` (and Vercel)
- [ ] `supabase/schema.sql` run in Supabase SQL Editor
- [ ] One admin user created in Supabase **Authentication → Users**
- [ ] Resend account + API key (or Gmail App Password) in `.env.local` and Vercel
- [ ] `ADMIN_EMAIL` and `NEXT_PUBLIC_APP_URL` set (use your real URL on Vercel, e.g. `https://yoursite.vercel.app`)
- [ ] (Recommended) Domain verified in Resend; `EMAIL_FROM` set to that domain
- [ ] Restart dev server after changing `.env.local` (`npm run dev`); redeploy on Vercel after adding env vars

After that, submit the contact form once and check: (1) you get the admin notification email, (2) the customer gets the confirmation, (3) you can log in at `/admin/login` and reply, (4) the customer gets your reply by email.
