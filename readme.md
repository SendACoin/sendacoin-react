# @sendacoin/react

# Installation

1. Install package

   ```
   npm i @sendacoin/react
   ```

   or

   ```
   yarn add @sendacoin/react
   ```

2. Import component

   ```
       import SendACoin from "@sendacoin/react";
   ```

3. Use component

   ```
       <SendACoin
       username="YOUR_USERNAME"
       options={{
         icon: "btc",
         button_color: "#fff",
         donate_text: "Send Payments Now"
       }}
     />
   ```

# Options

| Option name  | Description                                                                                                       |
| ------------ | ----------------------------------------------------------------------------------------------------------------- |
| icon         | Change sendacoin widget icon to crypto currency icon. Supported values: btc,eth,bch,bnb,trx,doge,xmr,ltc,eth,usdt |
| button_color | Widget button color                                                                                               |
| donate_text  | Widget text                                                                                                       |
