function jobCount(){
    const totalJob = Number(document.getElementById('total-job-1').innerText);
    return totalJob;
}

function noJob(){
    document.getElementById('no-job').classList.remove('hidden');
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

function hide(id){
    document.getElementById(id).classList.add('hidden');
    let jobs = jobCount();
    console.log(jobs);
    jobs--;
    console.log(jobs);
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

