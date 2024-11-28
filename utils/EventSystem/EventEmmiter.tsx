type Listener<T = any> = (data : T) => void;

class EventEmmiter {
    
    private events: Map<string, Listener[]>;

    constructor()
    {
        this.events = new Map();
    }

    addEventListener<T>(event: string, listener : Listener<T>): void
    {
        if(!this.events.has(event))
            this.events.set(event, [])
        
        this.events.get(event)!.push(listener);
    }

    off<T>(event : string, listener : Listener<T>) : void 
    {
        const listeners = this.events.get(event);
        if(!listeners) return;

        this.events.set(
            event,
            listeners.filter(l => l !== listener)
        );
    }

    emit<T>(event : string, data? : T) : void
    {
        const listeners = this.events.get(event);
    
        console.log('found ' + listeners?.length + ' listeners');

        if(!listeners) return;
        
        
        listeners.forEach(listener => {
            console.log('emmiting listeners! ');
            listener(data!)
        } );
    }

    removeAllListeners(event? : string) : void
    {
        if(event)
            this.events.delete(event)
        else
        this.events.clear
    }
}

export default EventEmmiter