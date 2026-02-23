function getInterviewCount(){
    const interview = document.getElementById('interview-count');
    return Number(interview.innerText);
}
function setInterviewCount(num){
    const interview = document.getElementById('interview-count');
    interview.innerText = num;
}
function interview(id, status, btn){
    let interviewCount = getInterviewCount();
    interviewCount++;
    setInterviewCount(interviewCount);
    console.log(id, status);
    document.getElementById(id).classList.add('interview');
    document.getElementById(btn).disabled = true;
    const getStatus = document.getElementById(status);
    getStatus.innerText = 'Interview';
    getStatus.classList.add('bg-green-100');
}
function interviewTab(){
    
    const interviewDiv = document.querySelectorAll('interview');
    for(const div of interviewDiv){
        div.classList.remove('hidden');
    }
}