# **Discount PRO: A Coupon Collecting Application**

## **Project Overview**

Discount PRO is a simple Coupon Collecting Application designed to help users easily find and use discount coupons for popular e-commerce shops in Bangladesh.

Many e-commerce stores offer various types of vouchers and coupon codes for discounts. This application collects all available coupons in one place, making it easier for users to save money.

---

## **Live URL**

[Live Project Link](#)  
(Replace `#` with your actual deployment URL.)

---

## **Key Features**

- **GitHub Commits:** Includes at least 10 meaningful commits with descriptive messages.✅
- **Readme.md:** Contains project name, purpose, live URL, key features, and npm packages used.❌
- **Responsiveness:** Fully responsive for mobile, tablet, and desktop devices.✅
- **Environment Variables:** Firebase configuration keys are securely stored in environment variables.❌
- **Unique Design:** A winter-themed, division-focused design that encourages local support.❌✅
- **Hosting:** Supports hosting on Netlify, Surge, or Firebase. Ensures error-free reloading on any route.✅

---

## **Layout Design**

✅ ❌

### **Header**

- Displays a welcome message with the user's name if logged in.✅
- Includes a logo on the left.✅
- Navigation with icons and text for routes: `Home`, `Brands`, `My Profile` (logged-in users only), and `About Dev`.✅
- Shows login and registration buttons for guests.❌
- Displays user picture, email, and a logout button for logged-in users.✅

### **Main Section**

- Contains pages with various components based on routes.

### **Footer**

- Includes copyright text, social icons, and links to the developer's profile.✅

---

## **Home Page (`/`)**

### **Banner with Slider**

- A static slider with relevant images.✅

### **Top Brands**

- Title and brand data.✅
- Displays all brand logos with React Fast Marquee.❌
- Pauses transition on hover.✅
- Clicking a logo redirects to the brand route.❌

### **Brands on Sale**

- Displays brands with `isSaleOn` set to `true`.✅
- Shows brand logo, name, total coupons, and category in a card format.✅

### **Extra Sections**

- Includes two additional sections with your own ideas (static or dynamic).❌

---

## **Brands Page (`/brands`)**

- Displays all brand information in a card format with a search bar.❌
- Each card includes:
  - Brand Logo✅
  - Brand Name✅
  - Rating with a star icon✅
  - Description✅
  - "View Coupons" button✅
  - A bouncing text "sale is on" if `isSaleOn` is `true`✅
- Clicking the "View Coupons" button redirects logged-in users to the brand details route. Guests are redirected to the login page.✅

---

## **Authentication System**

### **Login**

- Displays a form with the following fields:
  - Email
  - Password
  - Forget Password
  - Login Button
- Includes a Google Social Login button.
- Navigates users to the desired route or Home page upon successful login.

### **Register**

- Displays a form with the following fields:
  - Name
  - Email
  - Photo URL
  - Password
  - Register Button
- Password validation:
  - Must include an uppercase letter.
  - Must include a lowercase letter.
  - Must be at least 6 characters long.
- Includes a Google Social Login button.

---

## **Coupon Page (`/brand/:id`)**

- A private route accessible only to logged-in users.
- Displays:
  - Brand name, logo, and rating at the top.
  - Coupons in a grid card format with the following:
    - Coupon information
    - "Copy Code" button using `react-copy-to-clipboard` with a success toast.
    - "Use Now" button that redirects to the brand's shop link in a new tab.

---

## **My Profile (`/my-profile`)**

- Displays user information:
  - Cover background with a welcome message.
  - User photo, name, and email in a card format.
- Includes an "Update Information" feature to edit photo URL and name.

---

## **Challenges**

1. **Forget Password:**

   - Functional form to reset the password via email.
   - Redirects users to Gmail and logs them out after the reset.

2. **Update Information Feature:**

   - Allows users to update their profile information (name and photo URL).

3. **Special Animation Package:**

   - Implements an animation package like AOS or Animate.css.

4. **Password Toggling:**
   - Toggles password visibility with an "Eye" icon on the registration page.

---

## **Error Page**

- Displays a 404 page for invalid routes with a button to return to the Home page.
