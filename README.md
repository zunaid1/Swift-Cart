JavaScript Conceptual Questions & Answers

(১)  What is the difference between null and undefined?

Answer:
null শব্দের অর্থ খালি বুঝায়। তবে এটাও এক ধরনের ভ্যালু। undefined যেটা এখনও define করা হয়নি বা নির্ধারণ করা হয়নি।
---

(২) What is the use of the map() function in JavaScript? How is it different from forEach()?

Answer:

(ক) map() হলো একটি Array Method(), আর forEach() হলো একটি loop ।

(খ) map() loop এর মতো data'র প্রত্যেকটি ভ্যালু রিড করবে এবং শেষে রিডকৃত ভ্যালু নিয়ে একটি নতুন Array রিটার্ন করবে। অন্যদিকে forEach() শুধুমাত্র ডাটা রিড করবে এবং প্রয়োজন মাফিক রিডকৃত ভ্যালু নিয়ে কাজ করবে তবে রিড করা শেষে কোন কিছু রিটার্ন করবে না।
---

(৩) What is the difference between == and ===?

Answer:
এই দুইটা অপারেটর বিশেষত দুইটা ভ্যালুর তুলনা বুঝাতে ব্যবহার হয়। === ভ্যালুর টাইপ এবং ভ্যালুর মান তুলনা করার জন্য ব্যবহার হয়। প্রথমেই টাইপ চেক করে দেখবে এরপর ভ্যালুর মান চেক করবে।
অন্যদিকে, == অপারেটর শুধুমাত্র ভ্যালুর মান চেক করবে।
---

(৪) What is the significance of async/await in fetching API data?

Answer:
API call asynchronous হয়। কোড clean & readable হয়। এবং async/await ব্যবহার করলে promise শেষ না হওয়া পর্যন্ত অপেক্ষা করে।
---

(৫) Explain the concept of Scope in JavaScript (Global, Function, Block).

Answer:

Global Scope : যে ভ্যারিয়েবল পুরো প্রোগ্রামের যেকোনো জায়গা থেকে ব্যবহার করা যায়।

Function Scope : যে ভ্যারিয়েবল কোনো function এর ভিতরে declare করা হয়, সেটা শুধু ওই function এর ভিতরেই ব্যবহার করা যায়।

Block Scope : Block মানে { } এর ভিতরের অংশ।