/*
Programming Hero-এর নতুন AI Coding Arena-তে প্রতিদিন হাজার হাজার শিক্ষার্থী Problem Solve করে।
দিন শেষে একটি AI Leaderboard Engine Top Performer-দের তালিকা তৈরি করে।

Rules খুবই সহজ—
শুধুমাত্র যাদের Score 70 বা তার বেশি, তারা Leaderboard-এ থাকবে।
প্রত্যেক Qualified Student-এর নাম UPPERCASE করা হবে।
Leaderboard-এ শুধুমাত্র প্রথম ৩ জন দেখানো হবে।

কিন্তু সমস্যা হলো...
একজন Junior Developer তাড়াহুড়ো করে পুরো Function লিখে ফেলেছে।
সে ES6 Feature ব্যবহার করার চেষ্টা করেছে, কিন্তু অনেক জায়গায় ভুল করেছে।
এখন Leaderboard ভুল Result দিচ্ছে।
তোমার কাজ হলো সব Bug খুঁজে বের করে ঠিক করা।

Input
একটি Array of Object, যেমনঃ 
[
    { name: "Rafi", score: 90 },
    { name: "Sadia", score: 65 },
    { name: "Karim", score: 85 },
    { name: "Nafis", score: 75 }
]

Output
একটি Array, যেমনঃ 
["RAFI", "KARIM", "NAFIS"] 

Challenge
Bug ঠিক করার পরে function এটাও handle করবে —
Input Array না হলে "Invalid" 
Empty Array হলে "Invalid" 
কোনো Object-এ name বা score না থাকলে "Invalid" 
score Number না হলে "Invalid" 

*/
