/**
 * @class Quiz - A quiz object
 * @property {string} name - The name of the quiz
 * @property {string} owner - The email of the owner of the quiz
 * @property {string} thumbnail - The URL of the thumbnail of the quiz
 * @property {string} active - The active status of the quiz
 * @property {string} createdAt - The date the quiz was created
 * @property {string} questions - The questions of the quiz
 * @method addQuestion - Adds a question to the quiz
 * @method getQuestions - Gets the questions of the quiz
 *  */
class Quiz{
    constructor(name, owner){
        this.name = name;
        this.owner = owner;
        this.questions = [];
        this.thumbnail = null;
        this.active = null;
        this.createdAt = new Date().toISOString();
    }

    addQuestion(question){
        this.questions.push(question);
    }

    getQuestions(){
        return this.questions;
    }
}