import { Phone } from '../types/Phone';

export const phones: Record<string, Phone> = {
  iphone15pro: {
    name: "iPhone 15 Pro",
    price: "$999",
    priceUSD: 999,
    score: "9.1/10",
    release: "September 2023",
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300",
    specs: {
      "Display": "6.1\" OLED, 2556x1179",
      "Processor": "A17 Pro",
      "RAM": "8GB",
      "Storage": "128GB / 256GB / 512GB / 1TB",
      "OS": "iOS 17",
      "Weight": "187g",
      "Dimensions": "146.6 x 70.6 x 8.25mm"
    },
    camera: {
      main: "48MP f/1.78",
      ultra: "12MP f/2.2",
      tele: "12MP f/2.8 (3x optical)",
      front: "12MP f/1.9",
      features: ["ProRAW", "ProRes video", "Cinematic mode", "Night mode"]
    },
    performance: {
      cpu: "A17 Pro (3nm)",
      gpu: "6-core GPU",
      antutu: "1,400,000",
      geekbench: "2950 (single) / 7200 (multi)"
    },
    battery: {
      capacity: "3274mAh",
      charging: "20W wired, 15W MagSafe",
      wireless: true,
      reverse: false,
      video: "23 hours",
      web: "12 hours",
      gaming: "7 hours"
    },
    features: [
      "Titanium design",
      "Action button",
      "USB-C port",
      "Face ID",
      "Emergency SOS",
      "Crash Detection",
      "IP68 water resistance",
      "Dynamic Island"
    ]
  },
  iphone15promax: {
    name: "iPhone 15 Pro Max",
    price: "$1,199",
    priceUSD: 1199,
    score: "9.3/10",
    release: "September 2023",
    image: "https://images.pexels.com/photos/788946/pexels-photo-788946.jpeg?auto=compress&cs=tinysrgb&w=300",
    specs: {
      "Display": "6.7\" OLED, 2796x1290",
      "Processor": "A17 Pro",
      "RAM": "8GB",
      "Storage": "256GB / 512GB / 1TB",
      "OS": "iOS 17",
      "Weight": "221g",
      "Dimensions": "159.9 x 76.7 x 8.25mm"
    },
    camera: {
      main: "48MP f/1.78",
      ultra: "12MP f/2.2",
      tele: "12MP f/2.8 (5x optical)",
      front: "12MP f/1.9",
      features: ["ProRAW", "ProRes video", "Cinematic mode", "Night mode"]
    },
    performance: {
      cpu: "A17 Pro (3nm)",
      gpu: "6-core GPU",
      antutu: "1,450,000",
      geekbench: "2980 (single) / 7250 (multi)"
    },
    battery: {
      capacity: "4422mAh",
      charging: "20W wired, 15W MagSafe",
      wireless: true,
      reverse: false,
      video: "29 hours",
      web: "15 hours",
      gaming: "8 hours"
    },
    features: [
      "Titanium design",
      "Action button",
      "USB-C port",
      "Face ID",
      "Emergency SOS",
      "Crash Detection",
      "IP68 water resistance",
      "Dynamic Island"
    ]
  },
  samsung23ultra: {
    name: "Samsung Galaxy S23 Ultra",
    price: "$1,199",
    priceUSD: 1199,
    score: "9.0/10",
    release: "February 2023",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300",
    specs: {
      "Display": "6.8\" Dynamic AMOLED 2X, 3088x1440",
      "Processor": "Snapdragon 8 Gen 2",
      "RAM": "8GB / 12GB",
      "Storage": "256GB / 512GB / 1TB",
      "OS": "Android 13 (One UI 5.1)",
      "Weight": "234g",
      "Dimensions": "163.4 x 78.1 x 8.9mm"
    },
    camera: {
      main: "200MP f/1.7",
      ultra: "12MP f/2.2",
      tele1: "10MP f/2.4 (3x optical)",
      tele2: "10MP f/4.9 (10x optical)",
      front: "12MP f/2.2",
      features: ["8K video", "100x Space Zoom", "Expert RAW", "Nightography"]
    },
    performance: {
      cpu: "Snapdragon 8 Gen 2 (4nm)",
      gpu: "Adreno 740",
      antutu: "1,250,000",
      geekbench: "1480 (single) / 5100 (multi)"
    },
    battery: {
      capacity: "5000mAh",
      charging: "45W wired, 15W wireless",
      wireless: true,
      reverse: true,
      video: "26 hours",
      web: "14 hours",
      gaming: "9 hours"
    },
    features: [
      "S Pen included",
      "120Hz refresh rate",
      "Under-display fingerprint",
      "IP68 water resistance",
      "DeX desktop mode",
      "45W super fast charging",
      "Ultrasonic fingerprint",
      "AKG tuned speakers"
    ]
  },
  pixel8pro: {
    name: "Google Pixel 8 Pro",
    price: "$999",
    priceUSD: 999,
    score: "8.8/10",
    release: "October 2023",
    image: "https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=300",
    specs: {
      "Display": "6.7\" LTPO OLED, 1344x2992",
      "Processor": "Google Tensor G3",
      "RAM": "12GB",
      "Storage": "128GB / 256GB / 512GB / 1TB",
      "OS": "Android 14",
      "Weight": "213g",
      "Dimensions": "162.6 x 76.5 x 8.8mm"
    },
    camera: {
      main: "50MP f/1.68",
      ultra: "48MP f/1.95",
      tele: "48MP f/2.8 (5x optical)",
      front: "10.5MP f/2.2",
      features: ["Magic Eraser", "Photo Unblur", "Best Take", "Night Sight"]
    },
    performance: {
      cpu: "Tensor G3 (4nm)",
      gpu: "Mali-G715",
      antutu: "980,000",
      geekbench: "1400 (single) / 4200 (multi)"
    },
    battery: {
      capacity: "5050mAh",
      charging: "30W wired, 23W wireless",
      wireless: true,
      reverse: true,
      video: "31 hours",
      web: "16 hours",
      gaming: "7 hours"
    },
    features: [
      "Google AI features",
      "7 years of OS updates",
      "Temperature sensor",
      "Under-display fingerprint",
      "IP68 water resistance",
      "Face Unlock",
      "Call Screen",
      "Live Translate"
    ]
  },
  oneplus11: {
    name: "OnePlus 11",
    price: "$699",
    priceUSD: 699,
    score: "8.5/10",
    release: "January 2023",
    image: "https://images.pexels.com/photos/1092644/pexels-photo-1092644.jpeg?auto=compress&cs=tinysrgb&w=300",
    specs: {
      "Display": "6.7\" LTPO3 AMOLED, 1440x3216",
      "Processor": "Snapdragon 8 Gen 2",
      "RAM": "8GB / 16GB",
      "Storage": "128GB / 256GB / 512GB",
      "OS": "Android 13 (OxygenOS 13)",
      "Weight": "205g",
      "Dimensions": "163.1 x 74.1 x 8.53mm"
    },
    camera: {
      main: "50MP f/1.8 (Hasselblad)",
      ultra: "48MP f/2.2",
      tele: "32MP f/2.0 (2x optical)",
      front: "16MP f/2.4",
      features: ["Hasselblad color tuning", "RAW+", "Nightscape", "Pro mode"]
    },
    performance: {
      cpu: "Snapdragon 8 Gen 2 (4nm)",
      gpu: "Adreno 740",
      antutu: "1,280,000",
      geekbench: "1500 (single) / 5200 (multi)"
    },
    battery: {
      capacity: "5000mAh",
      charging: "100W wired, 50W wireless",
      wireless: true,
      reverse: true,
      video: "28 hours",
      web: "15 hours",
      gaming: "10 hours"
    },
    features: [
      "Alert slider",
      "100W SUPERVOOC charging",
      "Hasselblad camera system",
      "Vibration motor",
      "IP64 water resistance",
      "OxygenOS",
      "Gaming triggers",
      "Bionic vibration"
    ]
  },
  xiaomi13pro: {
    name: "Xiaomi 13 Pro",
    price: "$899",
    priceUSD: 899,
    score: "8.7/10",
    release: "February 2023",
    image: "https://images.pexels.com/photos/4666748/pexels-photo-4666748.jpeg?auto=compress&cs=tinysrgb&w=300",
    specs: {
      "Display": "6.73\" LTPO AMOLED, 1440x3200",
      "Processor": "Snapdragon 8 Gen 2",
      "RAM": "8GB / 12GB",
      "Storage": "128GB / 256GB / 512GB",
      "OS": "Android 13 (MIUI 14)",
      "Weight": "229g",
      "Dimensions": "162.9 x 74.6 x 8.38mm"
    },
    camera: {
      main: "50MP f/1.9 (1\" sensor)",
      ultra: "50MP f/2.2",
      tele: "50MP f/2.75 (3x optical)",
      front: "32MP f/2.0",
      features: ["Leica optics", "HyperOS", "Night mode 2.0", "Pro mode"]
    },
    performance: {
      cpu: "Snapdragon 8 Gen 2 (4nm)",
      gpu: "Adreno 740",
      antutu: "1,300,000",
      geekbench: "1520 (single) / 5300 (multi)"
    },
    battery: {
      capacity: "4820mAh",
      charging: "120W wired, 50W wireless",
      wireless: true,
      reverse: true,
      video: "27 hours",
      web: "14 hours",
      gaming: "9 hours"
    },
    features: [
      "Leica camera partnership",
      "120W HyperCharge",
      "Ceramic back",
      "IP68 water resistance",
      "Infrared blaster",
      "MIUI 14",
      "Xiaomi HyperOS",
      "Harman Kardon audio"
    ]
  }
};