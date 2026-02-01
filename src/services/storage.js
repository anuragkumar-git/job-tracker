import { seedApplications } from "../data/seedApplication";

export function getApplications() {
    const job_applications = JSON.parse(localStorage.getItem("job_applications"))

    if (!job_applications) {
        const job_applications = localStorage.setItem("job_applications", JSON.stringify(seedApplications))        
        return job_applications
    }

    return job_applications
}

export function saveApplications(apps) {

}

export function addApplication(app) {

}

export function updateApplication(id, updates) {

}