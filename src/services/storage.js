import { seedApplications } from "../data/seedApplication";

const LOCAL_STORAGE_KEY = "job_applications"
export function getApplications() {
    try {
        const storedApplications = localStorage.getItem(LOCAL_STORAGE_KEY)

        if (!storedApplications) {
            localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(seedApplications))
            return seedApplications
        }

        return JSON.parse(storedApplications)
    } catch (error) {
        console.error("Failed to load applications form localStorage\n", error) //Handle in prod?
        return []
    }
}

export function saveApplications(applications) {
    localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(applications))
}

export function addApplication(app) {

}

export function updateApplication(id, updates) {

}