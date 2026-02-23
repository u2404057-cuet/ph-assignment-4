function getInterviewCount(){
    const interview = document.getElementById('interview-count');
    return Number(interview.innerText);
}

function setInterviewCount(num){
    const interview = document.getElementById('interview-count');
    interview.innerText = num;
}

function interview(id, status, btn, rejBtn){
    let interviewCount = getInterviewCount();
    let rejectedCount = getRejectedCount();
    const cardElement = document.getElementById(id);

    if(document.getElementById(id).classList.contains('rejected')){
        cardElement.classList.remove('rejected');
        cardElement.classList.add('interview');
        rejectedCount--;
        setRejectedCount(rejectedCount);
        setInterviewCount(interviewCount);
    }
    else{
        cardElement.classList.add('interview');
    }
    interviewCount++;
    setInterviewCount(interviewCount);
    console.log(id, status);
    document.getElementById(btn).disabled = true;
    document.getElementById(rejBtn).disabled = false;
    const getStatus = document.getElementById(status);
    getStatus.innerText = 'Interview';
    getStatus.classList.remove('bg-red-100');
    getStatus.classList.add('bg-green-100');
}

function interviewTab(){

    const inter2 = document.getElementById('second-int-count');
    const interCount2 = document.getElementById('int-count');
    const interviewCount = getInterviewCount();
    interCount2.innerText = interviewCount;
    inter2.classList.remove('hidden');

    const children = document.getElementById('job-container').children;
    for(const child of children){
        child.classList.add('hidden');
    }
    const interviewDiv = document.querySelectorAll('.interview');
    for(const div of interviewDiv){
        div.classList.remove('hidden');
    }
}
