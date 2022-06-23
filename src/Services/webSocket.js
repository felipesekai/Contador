import WebSocketClient from '@gamestdio/websocket';


export const ws = (host) => new WebSocketClient('ws://' + host);
   