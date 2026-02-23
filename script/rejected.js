function getRejectedCount(){
    const rejected = document.getElementById('rejected-count');
    return Number(rejected.innerText);
}

function setRejectedCount(num){
    const rejected = document.getElementById('rejected-count');
    rejected.innerText = num;
}

function rejected(id, status, rejBtn, btn){

    let rejectedCount = getRejectedCount();
    let interviewCount = getInterviewCount();
    const secondContainer = document.getElementById('second-int-count');
    const cardElement = document.getElementById(id);
    const tab = showCurrentTab();

    if(document.getElementById(id).classList.contains('interview')){
        cardElement.classList.remove('interview');
        cardElement.classList.add('rejected');
        interviewCount--;
        if(!(document.getElementById(id).classList.contains('default'))){
            cardElement.classList.add('hidden');
            checkJob(interviewCount);
        }
        else{
            checkJob(jobCount());
        }
        setInterviewCount(interviewCount);
        if(!(secondContainer.classList.contains('hidden'))){
            secondCount(interviewCount);
        }
        
    }
    else{
        cardElement.classList.add('rejected');
    }

    rejectedCount++;
    setRejectedCount(rejectedCount);
    // secondCount(interviewCount);
    document.getElementById(rejBtn).disabled = true;
    document.getElementById(btn).disabled = false;
    const getStatus = document.getElementById(status);
    getStatus.innerText = 'Rejected';
    getStatus.classList.remove('bg-green-100');
    getStatus.classList.add('bg-red-100');
}


function rejectedTab(){

    const rejectedCount = getRejectedCount();
    
    secondCount(rejectedCount);

    buttonChange('rejected');

    setCurrentTab('rej');
    checkJob(rejectedCount);

    const children = document.getElementById('job-container').children;
    for(const child of children){
        child.classList.add('hidden');
    }
    const interviewDiv = document.querySelectorAll('.rejected');
    for(const div of interviewDiv){
        div.classList.remove('hidden');
        div.classList.remove('default');
    }
}