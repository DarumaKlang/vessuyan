# OAuth Provider Setup Documentation

## Account Information

**Email used for OAuth providers:** `k.net.game03@gmail.com`

---

## Google Cloud Console

### Access
- **Console URL:** https://console.cloud.google.com/apis/credentials
- **Account:** k.net.game03@gmail.com
- **Project Name:** Vessuyan App

### OAuth Client Configuration

**Client ID:**
```
331040957820-mo433boicbe3oh6s7m7i5dpn1jbphe8.apps.googleusercontent.com
```

**Client Secret:**
```
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
```

**Authorized JavaScript Origins:**
- `http://localhost:3001`

**Authorized Redirect URIs:**
- `http://localhost:3001/api/auth/callback/google` (Local Development)
- `https://vessuyan.vercel.app/api/auth/callback/google` (Production)

---

## LINE Developers Console

### Access
- **Console URL:** https://developers.line.biz/console/
- **Account:** k.net.game03@gmail.com
- **Provider Name:** Vessuyan

### LINE Login Channel Configuration

**Channel ID:**
```
2009065632
```

**Channel Secret:**
```
1c68689dac4db23cafd2d1cd6af6ce83
```

**Callback URLs:**
- `http://localhost:3001/api/auth/callback/line` (Local Development)
- `https://vessuyan.vercel.app/api/auth/callback/line` (Production)

---

## Environment Variables

Add these to your `.env` file for local development and to Vercel Environment Variables for production:

```env
# Google OAuth
GOOGLE_CLIENT_ID="331040957820-mo433boicbe3oh6s7m7i5dpn1jbphe8.apps.googleusercontent.com"
GOOGLE_CLIENT_SECRET="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"

# LINE Login
LINE_CLIENT_ID="2009065632"
LINE_CLIENT_SECRET="1c68689dac4db23cafd2d1cd6af6ce83"

# NextAuth
NEXTAUTH_URL="http://localhost:3001"  # Change to https://vessuyan.vercel.app for production
NEXTAUTH_SECRET="QPDddTx70q6ExUHIFtQkKDSm4Hcjc0GPMZChRicsgr4="
```

---

## Notes

- **Security:** Never commit this file to Git. It's already listed in `.gitignore`.
- **Production:** Make sure to update `NEXTAUTH_URL` in Vercel Environment Variables to the production URL.
- **Testing:** Use localhost URLs for local development and Vercel URLs for production testing.
