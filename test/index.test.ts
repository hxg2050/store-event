import { StoreEmitter } from '../src'

describe('Core', () => {
    test('event', (done) => {
        let step = 0;

        function doneTest() {
            step ++;
            if (step == 3) {
                done();
            }
        }

        const func = (value: number) => {
            expect(value).toBe(1);
            emitter.off('eventName', func, this);
            doneTest();
        }
        const emitter = new StoreEmitter();
        emitter.on('eventName', func, this)
        emitter.once('eventName', (value: number) => {
            expect(value).toBe(1);
            doneTest();
        }, this);
        emitter.emit('eventName', 1);
        emitter.emit('eventName', 1);

        emitter.on('event', () => {
            doneTest();
        }, this);
        doneTest();

        emitter.emit('event');
    });

    test('data', (done) => {

        let step = 0;

        function doneTest() {
            step ++;
            if (step == 2) {
                done();
            }
        }

        const emitter = new StoreEmitter();
        emitter.remove('sto', () => {}, this);

        emitter.listen('store', (data: number) => {
            expect(data).toBe(1);
            doneTest();
        }, this)
        emitter.data('store', () => {
            return 1;
        });
        emitter.change('store', (data: number) => {
            expect(data).toBe(1);
            doneTest();
        }, this);
        expect(emitter.has('store')).toBe(true);
    });
})