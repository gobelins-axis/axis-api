// Utils
import frameTimeout from '../utils/frameTimeout';

export default class Leaderboard {
    constructor(options = {}) {
        // Props
        this._id = options.id;
        this._ipcRenderer = options.ipcRenderer;

        // Setup
        this._hasCheckedForIpcRenderer = false;
        this._isAxisMachine = true;
    }

    /**
     * Getters
     */
    get id() {
        return this._id;
    }

    get ipcRenderer() {
        return this._ipcRenderer;
    }

    set ipcRenderer(ipcRenderer) {
        this._ipcRenderer = ipcRenderer;
    }

    /**
     * Public
     */
    postScore(score) {
        if (this._hasCheckedForIpcRenderer) {
            return this._postScore(score);
        } else {
            return new Promise((resolve, reject) => {
                this._checkForIpcRenderer().then(() => {
                    this._postScore(score).then(resolve, reject);
                    this._hasCheckedForIpcRenderer = true;
                });
            });
        }
    }

    getScores() {
        if (this._hasCheckedForIpcRenderer) {
            return this._getScores();
        } else {
            return new Promise((resolve, reject) => {
                this._checkForIpcRenderer().then(() => {
                    this._getScores().then(resolve, reject);
                    this._hasCheckedForIpcRenderer = true;
                });
            });
        }
    }

    /**
     * Private
     */
    _postScore(score) {
        const isValid = this._isValidScore(score);

        score.value = Math.round(score.value * 100) / 100;
        score.createdAt = new Date().toString();

        const promise = new Promise((resolve, reject) => {
            if (!isValid) {
                reject(Error('Leaderboard: Score is not valid'));
            } else {
                if (!this._ipcRenderer) {
                    const scores = this._getLocalStorageScores(this._id) || [];
                    scores.push(score);
                    this._setLocalStorageScores(this._id, scores);
                    resolve();
                } else {
                    this._postScoreToDatabase(score).then(resolve, reject);
                }
            }
        });

        return promise;
    }

    _getScores() {
        const promise = new Promise((resolve, reject) => {
            if (!this._ipcRenderer) {
                const scores = this._getLocalStorageScores(this._id) || [];
                resolve(this._orderScores(scores));
            } else {
                this._getScoresFromDatabase().then(
                    (scores) => {
                        resolve(this._orderScores(scores));
                    },
                    reject
                );
            }
        });

        return promise;
    }

    _orderScores(scores) {
        return scores.sort((score1, score2) => {
            if (score1.value > score2.value) return -1;
            if (score1.value < score2.value) return 1;
            return 0;
        });
    }

    /**
     * Using IPC Renderer
     */
    _getScoresFromDatabase() {
        const promise = new Promise((resolve) => {
            this._ipcRenderer.send('leaderboard:get', { id: this._id });
            this._ipcRenderer.once('leaderboard:get:completed', (event, response) => {
                resolve(response);
            });
        });
        return promise;
    }

    _postScoreToDatabase(score) {
        const promise = new Promise((resolve, reject) => {
            this._ipcRenderer.send('leaderboard:post', { id: this._id, score });
            this._ipcRenderer.once('leaderboard:post:completed', (event, response) => {
                resolve(response);
            });
            this._ipcRenderer.once('leaderboard:post:error', (event, response) => {
                reject(response);
            });
        });
        return promise;
    }

    /**
     * Utils
     */
    _isValidScore(score) {
        // A valid score object should at least have a value key and username key
        const hasValue = !isNaN(score.value);
        const hasUsername = (score.username !== undefined && score.username !== null && score.username !== '');

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

    _checkForIpcRenderer() {
        // If the project is running on the axis machine,
        // ipcRenderer will be set after one frame
        const promise = new Promise((resolve) => {
            frameTimeout(() => {
                resolve();
            }, 1);
        });

        return promise;
    }
}
