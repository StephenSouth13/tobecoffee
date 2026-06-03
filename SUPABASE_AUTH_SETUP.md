# Supabase Admin Authentication Setup

## Your Admin Account Details

**Email**: `info@sonmaihoihoavietnam.com`
**User UID**: `3648183a-4fc2-4ad6-8fa0-079dd89475b4`
**Status**: Active (Confirmed at 14 May, 2026 09:17)

## Admin Login Setup

### Step 1: Create Admin User in Supabase (if not already done)

1. Go to Supabase Dashboard: https://app.supabase.com/
2. Select your project: **tobecoffee**
3. Go to **Authentication** → **Users** in the left sidebar
4. Click **"Add user"** button
5. Enter:
   - **Email**: `info@sonmaihoihoavietnam.com`
   - **Password**: Set a secure password (will be used for admin login)
   - Check "Auto Confirm User" ✓

6. Click **"Create user"**

### Step 2: Access Admin Login Page

Navigate to: `http://localhost:5173/admin/login`

### Step 3: Sign In

1. Enter email: `info@sonmaihoihoavietnam.com`
2. Enter the password you set in Supabase
3. Click **"Sign In"**

### Step 4: Access Protected Admin Pages

Once logged in, you'll be redirected to `/admin` dashboard with access to:
- `/admin` - Dashboard
- `/admin/homepage` - Homepage Editor
- `/admin/about` - About Page Editor
- `/admin/products` - Products Manager
- `/admin/blog` - Blog Manager
- `/admin/contact` - Contact Manager

## Security Features

### ✅ Authentication
- Supabase Auth integration
- Email/password login
- Session management
- Auto-logout on tab close

### ✅ Protected Routes
- All admin pages require authentication
- Unauthenticated users redirected to login
- Session persists across page reloads
- Automatic session validation

### ✅ Logout
- Click "Logout" button in admin top-right corner
- Clears session and redirects to login page
- Can also access `/admin/login` directly

## Login Flow

```
User visits /admin
    ↓
Check if authenticated
    ↓
NO → Redirect to /admin/login (ProtectedAdminRoute)
    ↓
Show login form with pre-filled email
    ↓
User enters password & submits
    ↓
Supabase auth validates credentials
    ↓
Valid → Create session & redirect to /admin
Invalid → Show error message
    ↓
User can now access all admin pages
    ↓
Session persists until logout
```

## Environment Configuration

Your Supabase credentials are already configured in `.env`:

```env
VITE_SUPABASE_URL=https://kkvvosbyntcfpmluqxmn.supabase.co
VITE_SUPABASE_ANON_KEY=eyJhbGc...
```

This enables:
- ✅ User authentication
- ✅ Session management
- ✅ Database access
- ✅ File storage access

## Troubleshooting

### "Invalid login credentials" error
- ✓ Make sure user exists in Supabase (see Step 1)
- ✓ Check email is spelled correctly: `info@sonmaihoihoavietnam.com`
- ✓ Verify password is correct
- ✓ User should be "Confirmed" status in Supabase

### Can't access admin pages after login
- ✓ Check browser console for errors
- ✓ Verify session is active
- ✓ Try clearing browser cache
- ✓ Try logging out and logging in again

### Getting stuck on loading page
- ✓ Check network connection
- ✓ Verify Supabase URL is accessible
- ✓ Check browser DevTools Network tab for errors

## Files Related to Authentication

### Components
- `src/components/ProtectedAdminRoute.tsx` - Route protection
- `src/components/AdminLayout.tsx` - Admin UI with logout
- `src/pages/admin/AdminLogin.tsx` - Login form

### Hooks
- `src/hooks/useAdminAuth.ts` - Session management

### Configuration
- `src/lib/supabase.ts` - Supabase client
- `.env` - Supabase credentials

## Admin Interface Features

### Login Page
- Pre-filled email field with your email
- Password input
- Loading state while authenticating
- Error messages for failed attempts
- Dark theme design

### Admin Dashboard
- User email displayed in top-right
- Logout button in top-right
- Navigation to all admin sections
- Statistics overview
- Collapsible sidebar

### Protected Routes
- Auto-redirect unauthenticated users to login
- Loading state while checking session
- Persistent sessions across page reloads
- Auto-cleanup on logout

## Best Practices

### Security
- ✅ Never share your password
- ✅ Logout when leaving the computer
- ✅ Use strong, unique password
- ✅ Change password regularly

### Session Management
- Sessions auto-expire after inactivity
- Sessions are stored securely
- Multiple tabs use same session
- Logout clears all sessions

### Access Control
- Only users in Supabase auth can login
- Public website remains accessible
- Admin pages require authentication
- Database has RLS policies

## Next Steps

1. Create admin user in Supabase (Step 1 above)
2. Go to `/admin/login`
3. Sign in with your credentials
4. Start managing content!

## Support

For Supabase auth issues:
- Check Supabase documentation: https://supabase.com/docs/guides/auth
- View auth logs in Supabase Dashboard
- Check browser DevTools for errors

For admin panel issues:
- See ADMIN_QUICKSTART.md for usage guide
- See INTEGRATION_GUIDE.md for frontend integration
- Check browser console for errors
