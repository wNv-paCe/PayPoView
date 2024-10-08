# PayPoView

---

## Features

- **Welcome Screen**: Displays a "PayPoView" welcome message when the app launches.
- **Balance Input**: Allows users to enter their current balance, which is stored and displayed on subsequent screens.
- **Bill Payment History**: Users can input bill payment details, including the date and amount, which are stored and displayed for a 30-day history.
- **Real-time Limits Calculation**: Based on PayPower's bill pay limits, the app calculates and shows the remaining available amount for bill payments in the next 7 days and 30 days.
- **Persistent Data**: All user inputs (balance, payment history) are stored locally using `AsyncStorage`, allowing data persistence between app launches.

---

## How to Run the Project

### Prerequisites

1. **Node.js** (latest LTS version recommended)
2. **Yarn or npm** (package manager)
3. **Expo** (to run the app)

### Installation Steps

1. **Clone the repository**:

   ```bash
   git clone https://github.com/yourusername/paypoview.git
   cd paypoview
   ```

2. **Install dependencies**:

   Using Yarn:

   ```bash
   yarn install
   ```

   Or using npm:

   ```bash
   npm install
   ```

3. **Run the project**:

   ```bash
   npx expo start
   ```
