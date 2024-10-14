import { jsonData } from "./file.js";

const parseTimestemp = (timestemp) => {
    return new Date(timestemp);
}

for (const course of jsonData) {
    console.log(`Course: ${course.id} - ${course.title}`)
    for(const lessons of course.lessons) {
        console.log(`   Aula: ${lessons.id} - ${lessons.title}`)
        console.log(`       Media: ${lessons.media}`)
        console.log(`       Timestemp: ${parseTimestemp(lessons.timestamp)}`)
    }
}