import {Subject} from 'rxjs';

const subject = new Subject();

export const ObservableService={
    sendMessage: <T>(message: T) => {
        return subject.next(
            { 
                data: message 
            });
    },
    getMessage: () => subject.asObservable(),
    clearMessages: () => subject.next()
}