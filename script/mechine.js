function jobCount(){
    const totalJob = Number(document.getElementById('total-job-1').innerText);
    return totalJob;
}

function noJob(){
    const children = document.getElementById('job-container').children;
    for(const child of children){
        child.classList.add('hidden');
    }
    document.getElementById('no-job').classList.remove('hidden');
}
function hideNoJob(){
    document.getElementById('no-job').classList.add('hidden');
}

function checkJob(count){
    if(count == 0){
        noJob();
    }
    else{
        hideNoJob();
    }
}

function setJobCount(num){

    if(num == 0){
        noJob();
        document.getElementById('default').disabled = true;
    }
    const totalJob1 = document.getElementById('total-job-1');
    const totalJob2 = document.getElementById('total-job-2');
    totalJob1.innerText = num;
    totalJob2.innerText = num;

}

let currentTab = "def";
function setCurrentTab(tab){
    currentTab = tab;
}
function showCurrentTab(){
    return currentTab;
}


function hide(id){
    let interviewCount = getInterviewCount();
    let rejectedCount = getRejectedCount();
    let element = document.getElementById(id);
    let tab = showCurrentTab();
    if(interviewCount > 0 && tab == 'int'){
        element.classList.remove('interview');
        interviewCount--;
        // console.log(tab, interviewCount);
        setInterviewCount(interviewCount);
        secondCount(interviewCount);
        checkJob(interviewCount);
    }
    else if(rejectedCount > 0 && tab == 'rej'){
        element.classList.remove('rejected');
        rejectedCount--;
        setRejectedCount(rejectedCount);
        secondCount(rejectedCount);
        checkJob(rejectedCount);
    }
    
    element.style.display = 'none';
    let jobs = jobCount();
    jobs--;
    setJobCount(jobs);
}

function secondCount(num){
    const secondContainer = document.getElementById('second-int-count');
    const secondCount = document.getElementById('int-count');

    
    secondCount.innerText = num;
    secondContainer.classList.remove('hidden');
}

function buttonChange(id){
    document.getElementById('default').classList.remove('bg-blue-200');
    document.getElementById('default').classList.add('bg-base-100');
    document.getElementById('interview').classList.remove('bg-blue-200');
    document.getElementById('interview').classList.add('bg-base-100');
    document.getElementById('rejected').classList.remove('bg-blue-200');
    document.getElementById('rejected').classList.add('bg-base-100');

    document.getElementById(id).classList.add('bg-blue-200');



}

