/*
Clipzy একটি short-video app, যা Gen Z দের মধ্যে জনপ্রিয়। এটি একটি caption কতটা "trend-friendly" তা বুঝতে caption-এ থাকা hashtag গণনা করতে চায় এবং সবচেয়ে বড় hashtag খুঁজে বের করতে চায়। প্রতিটি hashtag হলো # দিয়ে শুরু হওয়া একটি word।
তোমার কাজ হলো এমন একটি function লেখা যা caption string স্ক্যান করে বলবে সেখানে কয়টি hashtag আছে এবং সবচেয়ে বড় hashtag কোনটি (# চিহ্ন ছাড়া)।

Input
একটি string, caption, যেমনঃ "Loving this weather today #sunny #vibes #weekend"

Output
একটি Object, শেপ: { hashtagCount: Number, longestTag: String }
hashtagCount → মোট কতগুলো word # দিয়ে শুরু হয়েছে


Challenge
Input String না হলে "Invalid" রিটার্ন করবে।
longestTag → সবচেয়ে বড় hashtag-এর টেক্সট, # ছাড়া (length সমান হলে যেটা আগে আছে সেটা)
কোনো hashtag না থাকলে longestTag হবে ""

*/

function countHashtags(caption) {
  if (typeof caption !== "string") {
    return "Invalid";
  }

  const hashtags = caption
    .split(" ")
    .filter((word) => word.startsWith("#") && word.length > 1)
    .map((word) => word.slice(1));

  const longestTag = hashtags.reduce((longest, current) => {
    return current.length > longest.length ? current : longest;
  }, "");

  return {
    hashtagCount: hashtags.length,
    longestTag: longestTag,
  };
}
