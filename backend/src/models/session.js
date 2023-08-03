/**
 * @class Session
 * @property {string} id
 * @property {boolean} active
 * @property {string} quizId
 * @property {number} position default -1
 * @property {string} isoTimeLastQuestionStarted
 * @property {object} players
 * @property {object[]} questions
 * @property {boolean} answerAvailable default false
 */
class Session {
    constructor(id, quizId) {
        this.id = id;
        this.quizId = quizId;
        this.position = -1;
        this.isoTimeLastQuestionStarted = null;
        this.players = {};
        this.questions = copy(quizzes[quizId].questions);
        this.active = true;
        this.answerAvailable = false;
    }

    get currentQuestion() {
        return this.questions[this.position];
    }
}