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

