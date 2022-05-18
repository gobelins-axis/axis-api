export default class Leaderboard {
    constructor(options = {}) {
        // Props
        this._id = options.id;
        this._ipcRenderer = options.ipcRenderer;

        // Setup
        this._scores = [];

        this._getScores();
    }

    /**
     * Getters & Setters
     */
    get scores() {
        return this._scores;
    }

    /**
     * Public
     */
    push(score) {
        const isValid = this._isValidScore(score);
        if (isValid) {
            this._scores.push(score);
            this._setLocalStorageItem(this._id, this._scores);
        }
    }

    clear() {
        localStorage.removeItem(this._id);
    }

    /**
     * Private
     */
    _getScores() {
        // if (!this._ipcRenderer) {
        //     this._scores = this._getLocalStorageItem(this._id) || [];
        // } else {
        //     // Fetch scores
        //     this._getDatabaseScore().then((scores) => {
        //         this._scores = scores;
        //     });
        // }

        // this._getDatabaseScore().then((response) => {
        //     response.json().then((response) => {
        //         console.log(response);
        //     });
        // });

        this._postScore().then((response) => {
            console.log(response);
        });
    }

    _getDatabaseScore() {
        return fetch(`http://localhost:8888/get/${this._id}`, {
            method: 'GET',
            headers: { 'Content-Type': 'application/json' },
        });
    }

    _postScore() {
        return fetch(`http://localhost:8888/post/${this._id}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ score: 0, username: 'serge' }),
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

    _getLocalStorageItem(id) {
        const item = localStorage.getItem(id);
        if (item) return JSON.parse(item);
    }

    _setLocalStorageItem(id, data) {
        return localStorage.setItem(id, JSON.stringify(data));
    }
}
