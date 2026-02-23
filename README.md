Q1: What is the difference between getElementById, getElementsByClassName, and querySelector / querySelectorAll?
Ans: getElementById(), getElementByClassName() returns HTML class. Which works like an array but it's not an array. We can loop through it by foreach loop and it also updates automatically to changes. On the other hand querySelector(), querySelectorAll returns Node List. It is also an array-like element, we can loop through it but can’t use foreach loop. It doesn’t update automatically.

Q2. How do you create and insert a new element into the DOM?
Ans: 
First we need create a new child element by using createElement().
Then we need to specify where to put the new element by using getElementById().
Lastly we need to insert the new element into the specified location we selected.

Q3. What is Event Bubbling? And how does it work?
Ans: Bubbling is the process in which an event starts from the selected element and gradually goes up the root element. For example li -> div -> section -> body -> html document.
Event Bubbling works in 3 steps:
Capturing phase
Target phase
Bubble phase

Q4. What is Event Delegation in JavaScript? Why is it useful?
Ans: Event Delegation is the process when giving an event to the parent instead of all the children. Sometimes it is very time consuming to add events to all the children and it also doesn’t look good. So attaching events to the parents makes the work easy.

Q5. What is the difference between preventDefault() and stopPropagation() methods?
Ans: preventDefault() event stops the browser behavior on the other hand stopPropagation() stops event from bubbling. preventsDefault() event is used in forms, and stopPropagation() is used in nested elements.
