export default class Leaderboard {
    constructor(options = {}) {
        // Props
        this._id = options.id;

        // Setup
        this._isAxisMachine = true;
    }

    /**
     * Getters
     */
    get id() {
        return this._id;
    }

    /**
     * Public
     */
    postScore(score) {
        const isValid = this._isValidScore(score);

        const promise = new Promise((resolve, reject) => {
            if (!isValid) {
                reject(Error('Leaderboard: Score is not valid'));
            } else {
                if (this._isAxisMachine) {
                    this._postScoreToDatabase(score).then(resolve, reject);
                } else {
                    const scores = this._getLocalStorageScores(this._id) || [];
                    scores.push(score);
                    this._setLocalStorageScores(this._id, scores);
                }
            }
        });

        return promise;
    }

    getScores() {
        const promise = new Promise((resolve, reject) => {
            if (!this._isAxisMachine) {
                const scores = this._getLocalStorageScores(this._id) || [];
                resolve(scores);
            } else {
                this._getScoresFromDatabase().then(
                    (response) => { response.json().then(resolve); },
                    reject
                );
            }
        });

        return promise;
    }

    /**
     * Private
     */
    _getScoresFromDatabase() {
        return fetch(`http://localhost:8888/get/${this._id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
    }

    _postScoreToDatabase(score) {
        return fetch(`http://localhost:8888/post/${this._id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(score),
        });
    }

    /**
     * Utils
     */
    _isValidScore(score) {
        // A valid score object should at least have a value key and username key
        const hasValue = !isNaN(score.value);
        const hasUsername = (score.username !== undefined && score.username !== null);

        if (!hasValue) console.error('Leaderboard: make sure you have a valid value key');
        if (!hasUsername) console.error('Leaderboard: make sure you have a valid username key');

        return hasValue && hasUsername;
    }

    _getLocalStorageScores(id) {
        const scores = localStorage.getItem(id);
        if (scores) return JSON.parse(scores);
    }

    _setLocalStorageScores(id, scores) {
        return localStorage.setItem(id, JSON.stringify(scores));
    }
}
