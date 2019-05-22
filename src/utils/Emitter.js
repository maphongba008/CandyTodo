interface Event {
  type: string;
  callback: (data: any) => void;
}

export default class Emitter {

  static Keys = {
    OpenDrawer: 'OpenDrawer',
    CloseDrawer: 'CloseDrawer',
    ShowToast: 'ShowToast',
    NewCategory: 'NewCategory',
  };

  static _registerEvents: Array<Event> = [];

  static notify = (type, data) => {
    Emitter._registerEvents.filter(event => event.type === type)
      .forEach((event) => {
        event.callback(data);
      });
  }

  static register = (type, callback) => {
    Emitter._registerEvents.push({
      type,
      callback,
    });
  }

  static unregister = (callback) => {
    const newArray = Emitter._registerEvents.filter(c => c.callback !== callback);
    Emitter._registerEvents = newArray;
  }

}
