// Daniel Shiffman
// http://codingtra.in
// http://patreon.com/codingtrain

// Timer
// https://youtu.be/MLtAMg9_Svw

const questions = [
    "When you’re working with a large number of customers, it’s tricky to deliver excellent service to all of them. How do you prioritize different customer needs?",
    "Tell me about a time you handled a difficult customer. What did you do? How did you manage the customer? What was her/his reaction? What was the outcome?",
    "Most of us at one time have felt frustrated or impatient when dealing with customers. Can you tell me about a time when you felt this way and how you dealt with it?",
    "When was a time you had to balance the needs of the customer with the needs of the business? How did you approach the situation? What were your actions? What was the end result?",
    "Give me an example of a change you implemented in your current team or organization to meet the needs of your customers. What has been the result?",
    "Tell me about a time a customer wanted one thing but you felt they needed something else. What was the situation and what was the action you took?",
    "When do you think it’s ok to push back or say no to an unreasonable customer request?",
    "Tell me about a time you used customer feedback to change the way you worked. Why did you take the action you did? What was the outcome?",
    "Tell me about a time you had to compromise in order to satisfy a customer.",
    "How do you get to an understanding of what the customer’s needs are?",
    "How do you honestly pursue customer feedback, not just solicit them for compliments?",
    "How do you wow your customers?",
    "How do you develop client relationships?",
    "Give me an example of when you used data to make a decision/solve a problem.",
    "Tell me a time you gave insights beyond the data.",
    "Have you ever leveraged data to develop strategy?",
    "Tell me about a time you were trying to understand a problem on your team and you had to go down several layers to figure it out. Who did you talk with and what info proved most valuable? How did you use that info to help solve the problem?",
    "Tell me about a problem you had to solve that required in-depth thought and analysis. How did you know you were focusing on the right things?",
    "Walk me through a big problem in your organization that you helped to solve. How did you become aware of it? What info did you gather, what was missing, and how did you fill the gaps? Did you do a post mortem analysis and what did you learn?",
    "Can you tell me about a specific metric you’ve used to identify a need for change in your department? Did you create the metric or was it readily available? How did this and other info influence the change?",
    "Tell me about a time you took a risk. What kind of risk was it?",
    "Give me an example of a calculated risk that you have taken where speed was critical. What was the situation and how did you handle it? What steps did you take to mitigate the risk? What was the outcome?",
    "Tell me about a time you had to make a decision with incomplete information. How did you make it and what was the outcome?",
    "Describe a time you had to make an important decision on the spot to close a sale.",
    "Describe a situation where you made an important business decision without consulting your manager. What was the situation and how did it turn out?",
    "Tell me about a time when you had to analyze facts quickly, define key issues, and respond immediately to a situation. What was the outcome?",
    "Tell me about a time when you have worked against tight deadlines and didn't have the time to consider all options before making a decision. How much time did you have? What approach did you take?",
    "Give an example of when you had to make an important decision and had to decide between moving forward or gathering more information. What did you do? What information is necessary for you to have before acting?",
    "Describe a time when you saw some problem and took the initiative to correct it rather than waiting for someone else to do it.",
    "Tell me about a time you needed to get information from someone who wasn’t very responsive. What did you do?",
    "Tell me about a time where you felt your team was not moving to action quickly enough. What did you do? (Manager)",
    "Tell me about a time when you were able to remove a serious roadblock/barrier preventing your team from making progress? How were you able to remove the barrier? What was the outcome? (Manager)",
    "What is your management style?",
    "How do you approach managing your reports?",
    "What is your experience with hiring people?",
    "How do you ensure you hire the best people?",
    "Give me an example of one of the best hires of your career. How did this person grow throughout their career? What did you identify during the hiring process that drove her success?",
    "How do you help your employees grow?",
    "Tell me how you help your team members develop their careers. Can you give me two to three examples of a specific person in whom you invested and how you helped them develop their careers, including one who wasn’t being successful but in whom you saw potential and chose to invest?",
    "Give me an example of a time you provided feedback to develop and leverage the strengths of someone on your team. Were you able to positively impact that person’s performance? What were your most effective methods?",
    "How do you manage your top performers differently?",
    "Give me an example of someone who was promoted one or two levels up in the organization, not just because they were a star who would naturally rise, but due to your coaching efforts.",
    "What is the composition of your current team, and how is your team organized?",
    "How have you been successful at empowering either a person or a group to accomplish a task.",
    "Tell me about a time when you were able to remove a serious roadblock preventing your team from making progress.",
    "Tell me about a time you had to earn trust quickly.",
    "Building trust can be difficult to achieve at times. Tell me about how you’ve effectively built trusting working relationships with others on your team.",
    "Describe a time when you significantly contributed to improving morale and productivity on your team. What were the underlying problems and their causes? How did you prevent them from negatively impacting the team in the future?",
    "Give an example of a time where you were not able to meet a commitment to a team member. What was the commitment and what prevented you from meeting it? What was the outcome and what did you learn from it?",
    "Describe a time when you needed the cooperation of a peer or peers who were resistant to what you were trying to do. What did you do? What was the outcome?",
    "Tell me about a piece of direct feedback you recently gave to a colleague. How did he or she respond?",
    "How do you like to receive feedback from coworkers or managers?",
    "Tell me about a time when someone (peer, teammate, supervisor) criticized you about a piece of work/analysis that you delivered. How did you react? What was the outcome?",
    "Tell me about a time when you had to tell someone a harsh truth.",
    "Tell me about a time you had to communicate a big change in direction for which you anticipated people would have a lot of concerns. How did you handle questions and/or resistance? Were you able to get people comfortable with the change?",
    "How do you convince someone who is resistant to what you’re trying to do?",
    "Tell me about a time you made a mistake.",
    "Tell me about a time you disagreed with a colleague. What is the process you used to work it out?",
    "Give me an example of making an important decision in the absence of good data. What was the situation and how did you arrive at your decision? Did the decision turn out to be the correct one?",
    "Describe a situation where you thought you were right, but your peers or supervisor didn’t agree with you. How did you convince them you were right? How did you react? What was the outcome?",
    "Tell me about a time that you strongly disagreed with your manager on something you deemed to be very important to the business. What was it about and how did you handle it?",
    "Tell me about a time where someone openly challenged you. How did you handle this feedback?",
    "Give me an example of when you took an unpopular stance in a meeting with peers and your leader and you were the outlier. What was it, why did you feel strongly about it, and what did you do?",
    "When do you decide to go along with the group decision even if you disagree? Give me an example of a time you chose to acquiesce to the group even when you disagreed. Would you make the same decision now?",
    "Tell me about a decision for which data and analysis weren’t enough to provide the right course and you had to rely on your judgment and instincts. Give me two to three examples.",
    "Tell me about a time you made a difficult decision and how you knew it was the right solution (how you evaluated the options, if you received input, what data you reviewed, etc.)",
    "Give me an example of when you had to make an important decision in the absence of good data because there just wasn’t any. What was the situation and how did you arrive at your decision? Did the decision turn out to be the correct one? Why or why not?",
    "Tell me about a time you had to fix something but had no data or direction.",
    "Tell me about a time when you were faced with a challenge where the best way forward or strategy to adopt was not “clear cut” (i.e., there were a number of possible solutions). How did you decide the best way forward?",
    "Tell me about a time you took a calculated risk in order to achieve a professional goal. What were the tradeoffs? What was the outcome?",
    "Tell me about a time you took a big risk and it failed. What did you learn? What would you do differently?",
    "Tell me about a time you went way beyond the scope of the project and delivered.",
    "Tell me about your proudest professional achievement.",
    "Give me an example of a radical approach to a problem you proposed. What was the problem and why did you feel it required a completely different way of thinking about it? Was your approach successful?",
    "How do you drive adoption for your vision/ideas? How do you know how well your idea or vision has been adopted by other teams or partners? Give a specific example highlighting one of your ideas.",
    "Tell me about time you were working on an initiative or goal and saw an opportunity to do something much bigger than the initial focus.",
    "Tell me about a time you looked at a key process that was working well and questioned whether it was still the right one. What assumptions were you questioning and why? Did you end up making a change to the process?",
    "Describe a situation where you had to face a particularly challenging situation while working on a project and what you did to overcome it. (Note: The challenge could be with respect to timeline, scope, people, or a combination thereof.)",
    "How you check your progress against your goals?",
    "Do you set and communicate smart team goals, expectations, and priorities; help employees stay focused/help others remove barriers/roadblocks towards meeting team goals?",
    "Tell me about a time when you were able to persevere through setbacks and overcome obstacles to deliver outstanding results.",
    "Tell me about a time where you not only met the goal but considerably exceeded expectations. How were you able to do it?",
    "What’s the most complex problem you’ve ever worked on?",
    "Have you ever worked on something really hard and then failed?",
    "Provide an example of when you personally demonstrated ownership.",
    "Tell me about a time you went above and beyond.",
    "Tell me about a time when you took on something significant outside your area of responsibility. Why was it important? What was the outcome?",
    "Describe a project or idea (not necessarily your own) that was implemented primarily because of your efforts. What was your role? What was the outcome?",
    "Give an example of when you saw a peer struggling and decided to step in and help. What was the situation and what actions did you take? What was the outcome?",
    "Describe a situation where other members of your team didn’t agree with your ideas. What did you do?",
    "Tell me about a situation where you had a conflict with someone on your team. What was it about? What did you do? How did they react? What was the outcome?",
    "Tell me about a time when you did not accept the status quo.",
    "Tell me about an unpopular decision of yours.",
    "Tell me about a time when you had to step up and disagree with a team member’s approach.",
    "If your direct manager was instructing you to do something you disagreed with, how would you handle it?",
    "Describe a situation where you thought you were right, but your peers or supervisor did not agree with you. How did you convince them that you were right? How did you react? What was the outcome?",
    "Tell me about a time when you invented something.",
    "What improvements have you made at your current company?",
    "Tell me about a time when you gave a simple solution to a complex problem.",
    "Tell me about a time you had to think outside the box (think creatively) to close a sale or sell your product.",
    "What is the most innovative project you’ve worked on?",
    "Tell me about a time when you’ve been unsatisfied with the status quo. What did you do to change it? Were you successful?",
    "Tell me about a time you wouldn’t compromise on achieving a great outcome when others felt something was already good enough. What was the situation?",
    "What measures have you personally put in place to ensure performance improvement targets and standards are achieved?",
    "Describe the most significant, continuous improvement project that you’ve led. What was the catalyst for this change and how did you go about it?",
    "Give me an example of a goal you’ve had where you wish you had done better. What was the goal and how could you have improved on it?",
    "Tell me about a time when you worked to improve the quality of a product / service / solution that was already getting good customer feedback? Why did you think it needed more improvement?",
    "Tell me about a time where you thought of a new way to save money for the company.",
    "Describe a time when you had to manage a budget (or manage time/money/resources/etc.). Were you able to get more out of less?",
    "Here at Amazon we are frugal – how will you manage projects with no budget and no resources?",
    "Tell me about a time when you had to work with limited time or resources.",
    "How do you stay inspired, acquire new knowledge, or innovate in your work?",
    "How do you keep up with best practices?",
    "How do you keep up with industry trends and what your competitors are doing?",
    "What have you learned that has helped you in your job?",
    "What is the coolest thing you’ve learned on your own that has helped you better perform your job?",
    "Tell me about a time you learned something new from your peer or your direct report at work.",
    "Tell me about a time when you solved a problem through just superior knowledge or observation.",
    "Tell me about a time when you influenced a change by only asking questions.",
    "What is a recent book you’ve read and what did you learn from it?",
    "Tell me about a project that required you to learn something new.",
    "Tell me about a time you took on work outside of your comfort area and found it rewarding.",
    "Tell me about a time you found you needed a deeper level of subject matter expertise to do your job well.",
    "Tell me about a time you didn’t know what to do next or how to solve a challenging problem?",
    "Give me an example of a time when you challenged the notion that that something had to be done a certain way because it had always been done that way.",
    "What are you working on to improve your overall effectiveness at work?",
    "When we enter a new role or problem space, it is common to come in and see things with a fresh perspective. Tell me about a time when you realized that you might have lost that fresh perspective. What ended up happening?",
    "Tell me about a time you hired someone smarter than you. (Manager)",
    "Tell me about a time when you challenged your team to push the envelope and go beyond existing standards and expectations. (Manager)",
    "Give me an example of a time when someone on your team challenged you to think differently about a problem. (Manager)",
]

var timeleft = 300;

var startTime = 0;
var currentTime = 0;

function convertSeconds(s) {
    var min = floor(s / 60);
    var sec = s % 60;
    return nf(min, 2) + ':' + nf(sec, 2);
}

function startTimer() {
    startTime = millis();

    var timer = select('#timer');
    timer.html(convertSeconds(timeleft - currentTime));

    var interval = setInterval(timeIt, 1000);

    function timeIt() {
        currentTime = floor((millis() - startTime) / 1000);
        timer.html(convertSeconds(timeleft - currentTime));
        if (currentTime == timeleft) {
            clearInterval(interval);
            //counter = 0;
        }
    }
}

function pickQuestion() {
    const question = questions[Math.floor(Math.random() * questions.length)];
    document.getElementById("question").innerHTML = question;
    startTimer();
}

function setup() {
    noCanvas();
}

window.onload = () => {
    console.log("ONLOAD");
    pickQuestion();
};

window.addEventListener("DOMContentLoaded", () => {
    document.getElementById("next").addEventListener("click", pickQuestion);
})