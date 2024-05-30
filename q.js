class Event {
  constructor() {
    this.events = {};
  }

  on(type, fn) {
    if (!this.events[type]) {
      this.events[type] = [];
    }
    this.events[type].push(fn);
  }

  emit(type, ...args) {
    const eventHandlers = this.events[type];
    if (eventHandlers) {
      eventHandlers.forEach(handler => {
        handler.apply(this, args);
      });
    }
  }

  off(type, fn) {
    const eventHandlers = this.events[type];
    if (eventHandlers) {
      const index = eventHandlers.indexOf(fn);
      if (index !== -1) {
        eventHandlers.splice(index, 1);
      }
    }
  }
}

// 示例用法
const myEvent = new Event();

function handleEvent(data) {
  console.log(`Event emitted with data: ${data}`);
}

myEvent.on('myEvent', handleEvent);

myEvent.emit('myEvent', 'Hello, world!'); // 输出：Event emitted with data: Hello, world!

myEvent.off('myEvent', handleEvent);

myEvent.emit('myEvent', 'This should not be logged.'); // 没有输出
