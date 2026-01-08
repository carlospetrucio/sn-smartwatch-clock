# sn-smartwatch-clock

![Widget Preview](assets/widget-preview.png)

ServiceNow widget that simulates a smartwatch-style digital clock with a modern and responsive design.  
It supports configurable background images for day and night modes, automatically uses the logged-in user’s timezone, and is compatible with **Service Portal** and **Employee Center**.

---

## ✨ Features
- ⌚ Smartwatch-style digital clock
- 🌞🌙 Configurable background images for day and night modes
- 🌍 Uses the logged-in user’s timezone automatically
- 📱 Modern and responsive design
- 🧩 Compatible with Service Portal and Employee Center

---

## 📁 Repository Structure
```
sn-smartwatch-clock-widget/
├── widget/
│   ├── HTML.html
│   ├── Client Controller.js
│   ├── Server Script.js
│   ├── Link.js
│   └── CSS.css
└── export/
    └── sp_widget_7942247983927a10daa0fecfeeaad325.xml
```


### `/widget` folder
Contains the widget source files (HTML, Client Script, Server Script, and CSS).

You can:
- Download these files
- Create a **new custom widget** in ServiceNow
- Manually copy and paste each file into the corresponding widget sections

This approach is recommended if you want to **study, customize, or extend** the widget.

---

### `/export` folder
Contains the **complete widget exported in XML format**.

- Import this file directly into the **`sp_widget`** table
- After importing, the widget can be **freely modified and customized** inside ServiceNow

This is the fastest way to install the widget.

---

## 🚀 Installation (Import XML)

1. In ServiceNow, navigate to **System Definition → Tables**
2. Open the **`sp_widget`** table
3. Use **Import XML** and select the file from the `/export` folder
4. Complete the import

✅ The widget will now be available in your instance.

---

## 🧭 Post-Import: Adding the Widget to a Page

### Service Portal
1. Navigate to **Service Portal → Pages**
2. Open the desired page
3. Click **Page Designer**
4. Drag and drop the widget into the page
5. Save the page

### Employee Center
1. Navigate to **UI Builder**
2. Open the desired Experience / Page
3. Add a new component
4. Select the imported widget
5. Publish the changes

---

## ⏰ Timezone Behavior
The widget automatically displays the time based on the **logged-in user’s timezone**, requiring no additional configuration.

---

## 👤 Author

**Carlos Petrucio**

[![LinkedIn](https://img.shields.io/badge/LinkedIn-Carlos%20Petrucio-blue?logo=linkedin&logoColor=white)](https://www.linkedin.com/in/carlospetrucio/)

---

## 📄 License
This project is licensed under the **MIT License**.
