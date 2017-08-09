class: center, middle

# Learning to test

[live presentation](https://alonisser.github.io/integration-patterns-messaging) <br/>
[twitter](alonisser@twitter.com), [medium](https://medium.com/@alonisser/)

#####Shameless promotion: you can also read my political blog: [דגל אדום](degeladom@wordpress.com)
---

# So you think you know what to do with phone numbers

* So lets build a test driven phone number normalizer, which is invoked by user input and normalize it with removing hyphen/s

---
# Error handling

* Oh, we forgot, should throw an error on invalid input

---

# Mexico

* Oh no. we moved to mexico and people are saving strange inputs (01) 55 1234 5678


---

# Special numbers should be supported of course

* Like *3320 for our super rich and connected client

---
# Internationl numbers 

* When international number drop unneeded zero +972-054-673-4469 => +972546734469

---

# Forgetful clients  

* When international number drop unneeded zero +972-054-673-4469 => +972546734469

---

# Demented clients  

* Some of international users add leading 00 to get inernational line before the number. should be removed

---
# The germans

* The germans are coming +49 (AAAA) BBBBBB

---

class: center, middle

#Open source rocks!

---

class: center, middle

#Thanks for listening!

---
