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
    const cardElement = document.getElementById(id);

    if(document.getElementById(id).classList.contains('interview')){
        cardElement.classList.remove('interview');
        cardElement.classList.add('rejected');
        interviewCount--;
        setRejectedCount(rejectedCount);
        setInterviewCount(interviewCount);
    }
    else{
        cardElement.classList.add('rejected');
    }

    rejectedCount++;
    setRejectedCount(rejectedCount);
    document.getElementById(rejBtn).disabled = true;
    document.getElementById(btn).disabled = false;
    const getStatus = document.getElementById(status);
    getStatus.innerText = 'Rejected';
    getStatus.classList.remove('bg-green-100');
    getStatus.classList.add('bg-red-100');
}