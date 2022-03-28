class EventDispatcher {
    addEventListener(name, listener) {
        if (this._listeners === undefined) this._listeners = {};

        const listeners = this._listeners;
        if (listeners[name] === undefined) {
            listeners[name] = [];
        }

        if (!listeners[name].includes(listener)) {
            listeners[name].push(listener);
        }
    }

    removeEventListener(name, listener) {
        if (this._listeners === undefined) return;

        const listeners = this._listeners;
        const listenerArray = listeners[name];

        if (listenerArray !== undefined) {
            const index = listenerArray.indexOf(listener);

            if (index !== -1) {
                listenerArray.splice(index, 1);
            }
        }
    }

    dispatchEvent(name, data) {
        if (this._listeners === undefined) return;

        const listeners = this._listeners;
        const listenerArray = listeners[name];

        if (listenerArray !== undefined) {
            const array = listenerArray.slice(0);
            for (let i = 0, l = array.length; i < l; i++) {
                array[i].call(this, data);
            }
        }
    }
}

export default EventDispatcher;