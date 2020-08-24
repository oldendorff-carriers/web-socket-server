import { IonicNativePlugin } from '@ionic-native/core';
import { Observable } from 'rxjs';
import * as ɵngcc0 from '@angular/core';
export interface WebSocketInterfaces {
    [key: string]: WebSocketInterface;
}
export interface WebSocketInterface {
    ipv4Addresses: string[];
    ipv6Addresses: string[];
}
export interface WebSocketOptions {
    onMessage?: any;
    onOpen?: any;
    onClose?: any;
    onFailure?: any;
    origins?: string[];
    protocols?: string[];
    tcpNoDelay?: boolean;
}
export interface WebSocketIdentifier {
    uuid: string;
}
export interface WebSocketServerDetails {
    addr: string;
    port: number;
}
export interface WebSocketFailure extends WebSocketServerDetails {
    reason: string;
}
export interface WebSocketMessage {
    conn: WebSocketConnection;
    msg: string;
}
export interface WebSocketClose {
    conn: WebSocketConnection;
    code: number;
    reason: string;
    wasClean: boolean;
}
export interface WebSocketConnection extends WebSocketIdentifier {
    remoteAttr: string;
    state: 'open' | 'closed';
    httpFields: HttpFields;
    resource: string;
}
export interface HttpFields {
    'Accept-Encoding': string;
    'Accept-Language': string;
    'Cache-Control': string;
    Connection: string;
    Host: string;
    Origin: string;
    Pragma: string;
    'Sec-WebSocket-Extensions': string;
    'Sec-WebSocket-Key': string;
    'Sec-WebSocket-Version': string;
    Upgrade: string;
    'User-Agent': string;
}
/**
 * @name WebSocket Server
 * @description
 * This plugin allows you to run a single, lightweight, barebone WebSocket Server.
 *
 * @usage
 * ```typescript
 * import { WebSocketServer } from '@ionic-native/web-socket-server';
 *
 * constructor(private wsserver: WebSocketServer) { }
 *
 * ...
 *
 * // start websocket server
 * this.wsserver.start(8888, {}).subscribe({
 *   next: server => console.log(`Listening on ${server.addr}:${server.port}`),
 *   error: error => console.log(`Unexpected error`, error);
 * });
 *
 * // watch for any messages
 * this.wsserver.watchMessage().subscribe(result => {
 *   console.log(`Received message ${result.msg} from ${result.conn.uuid}`);
 * });
 *
 * // send message to connection with specified uuid
 * this.wsserver.send({ uuid: '8e7c4f48-de68-4b6f-8fca-1067a353968d' }, 'Hello World');
 *
 * // stop websocket server
 * this.wsserver.stop().then(server => {
 *   console.log(`Stop listening on ${server.addr}:${server.port}`);
 * });
 *
 * ```
 */
export declare class WebSocketServer extends IonicNativePlugin {
    /**
     * Return this device's interfaces
     * @return {Promise<WebSocketInterfaces>}
     */
    getInterfaces(): Promise<WebSocketInterfaces>;
    /**
     * Start websocket server
     * @param port {number} Local port on which the service runs. (0 means any free port)
     * @param options {WebSocketOptions} Additional options for websocket
     * @return {Observable<WebSocketServerDetails>} Returns Observable where all generic error can be catched (mostly JSONExceptions)
     */
    start(port: number, options: WebSocketOptions): Observable<WebSocketServerDetails>;
    private onFunctionToObservable;
    /**
     * Watches for new messages
     * @return {Observable<WebSocketMessage>}
     */
    watchMessage(): Observable<WebSocketMessage>;
    /**
     * Watches for new opened connections
     * @return {Observable<WebSocketConnection>}
     */
    watchOpen(): Observable<WebSocketConnection>;
    /**
     * Watches for closed connections
     * @return {Observable<WebSocketClose>}
     */
    watchClose(): Observable<WebSocketClose>;
    /**
     * Watches for any websocket failures
     * @return {Observable<WebSocketFailure>}
     */
    watchFailure(): Observable<WebSocketFailure>;
    /**
     * Stop websocket server and closes all connections
     * @return {Promise<WebSocketServerDetails>}
     */
    stop(): Promise<WebSocketServerDetails>;
    /**
     * Send Message to a connected device
     * @param conn {WebSocketIdentifier} Connection to send message to
     * @param msg {string} Message to send
     * @return {Promise<void>}
     */
    send(conn: WebSocketIdentifier, msg: string): Promise<void>;
    /**
     * Close specific connection using uuid
     * @param conn {WebSocketIdentifier} Connection to close
     * @param code {number} Close code, determines if it was clean
     * @param reason {string} Reason for closing
     * @return {Promise<void>}
     */
    close(conn: WebSocketIdentifier, code: number, reason: string): Promise<void>;
    static ɵfac: ɵngcc0.ɵɵFactoryDef<WebSocketServer, never>;
    static ɵprov: ɵngcc0.ɵɵInjectableDef<WebSocketServer>;
}

//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5kZXguZC50cyIsInNvdXJjZXMiOlsiaW5kZXguZC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUNBOztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7OztBQUNBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW9uaWNOYXRpdmVQbHVnaW4gfSBmcm9tICdAaW9uaWMtbmF0aXZlL2NvcmUnO1xuaW1wb3J0IHsgT2JzZXJ2YWJsZSB9IGZyb20gJ3J4anMnO1xuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRJbnRlcmZhY2VzIHtcbiAgICBba2V5OiBzdHJpbmddOiBXZWJTb2NrZXRJbnRlcmZhY2U7XG59XG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldEludGVyZmFjZSB7XG4gICAgaXB2NEFkZHJlc3Nlczogc3RyaW5nW107XG4gICAgaXB2NkFkZHJlc3Nlczogc3RyaW5nW107XG59XG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldE9wdGlvbnMge1xuICAgIG9yaWdpbnM/OiBzdHJpbmdbXTtcbiAgICBwcm90b2NvbHM/OiBzdHJpbmdbXTtcbiAgICB0Y3BOb0RlbGF5PzogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0SWRlbnRpZmllciB7XG4gICAgdXVpZDogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRTZXJ2ZXJEZXRhaWxzIHtcbiAgICBhZGRyOiBzdHJpbmc7XG4gICAgcG9ydDogbnVtYmVyO1xufVxuZXhwb3J0IGludGVyZmFjZSBXZWJTb2NrZXRGYWlsdXJlIGV4dGVuZHMgV2ViU29ja2V0U2VydmVyRGV0YWlscyB7XG4gICAgcmVhc29uOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldE1lc3NhZ2Uge1xuICAgIGNvbm46IFdlYlNvY2tldENvbm5lY3Rpb247XG4gICAgbXNnOiBzdHJpbmc7XG59XG5leHBvcnQgaW50ZXJmYWNlIFdlYlNvY2tldENsb3NlIHtcbiAgICBjb25uOiBXZWJTb2NrZXRDb25uZWN0aW9uO1xuICAgIGNvZGU6IG51bWJlcjtcbiAgICByZWFzb246IHN0cmluZztcbiAgICB3YXNDbGVhbjogYm9vbGVhbjtcbn1cbmV4cG9ydCBpbnRlcmZhY2UgV2ViU29ja2V0Q29ubmVjdGlvbiBleHRlbmRzIFdlYlNvY2tldElkZW50aWZpZXIge1xuICAgIHJlbW90ZUF0dHI6IHN0cmluZztcbiAgICBzdGF0ZTogJ29wZW4nIHwgJ2Nsb3NlZCc7XG4gICAgaHR0cEZpZWxkczogSHR0cEZpZWxkcztcbiAgICByZXNvdXJjZTogc3RyaW5nO1xufVxuZXhwb3J0IGludGVyZmFjZSBIdHRwRmllbGRzIHtcbiAgICAnQWNjZXB0LUVuY29kaW5nJzogc3RyaW5nO1xuICAgICdBY2NlcHQtTGFuZ3VhZ2UnOiBzdHJpbmc7XG4gICAgJ0NhY2hlLUNvbnRyb2wnOiBzdHJpbmc7XG4gICAgQ29ubmVjdGlvbjogc3RyaW5nO1xuICAgIEhvc3Q6IHN0cmluZztcbiAgICBPcmlnaW46IHN0cmluZztcbiAgICBQcmFnbWE6IHN0cmluZztcbiAgICAnU2VjLVdlYlNvY2tldC1FeHRlbnNpb25zJzogc3RyaW5nO1xuICAgICdTZWMtV2ViU29ja2V0LUtleSc6IHN0cmluZztcbiAgICAnU2VjLVdlYlNvY2tldC1WZXJzaW9uJzogc3RyaW5nO1xuICAgIFVwZ3JhZGU6IHN0cmluZztcbiAgICAnVXNlci1BZ2VudCc6IHN0cmluZztcbn1cbi8qKlxuICogQG5hbWUgV2ViU29ja2V0IFNlcnZlclxuICogQGRlc2NyaXB0aW9uXG4gKiBUaGlzIHBsdWdpbiBhbGxvd3MgeW91IHRvIHJ1biBhIHNpbmdsZSwgbGlnaHR3ZWlnaHQsIGJhcmVib25lIFdlYlNvY2tldCBTZXJ2ZXIuXG4gKlxuICogQHVzYWdlXG4gKiBgYGB0eXBlc2NyaXB0XG4gKiBpbXBvcnQgeyBXZWJTb2NrZXRTZXJ2ZXIgfSBmcm9tICdAaW9uaWMtbmF0aXZlL3dlYi1zb2NrZXQtc2VydmVyJztcbiAqXG4gKiBjb25zdHJ1Y3Rvcihwcml2YXRlIHdzc2VydmVyOiBXZWJTb2NrZXRTZXJ2ZXIpIHsgfVxuICpcbiAqIC4uLlxuICpcbiAqIC8vIHN0YXJ0IHdlYnNvY2tldCBzZXJ2ZXJcbiAqIHRoaXMud3NzZXJ2ZXIuc3RhcnQoODg4OCwge30pLnN1YnNjcmliZSh7XG4gKiAgIG5leHQ6IHNlcnZlciA9PiBjb25zb2xlLmxvZyhgTGlzdGVuaW5nIG9uICR7c2VydmVyLmFkZHJ9OiR7c2VydmVyLnBvcnR9YCksXG4gKiAgIGVycm9yOiBlcnJvciA9PiBjb25zb2xlLmxvZyhgVW5leHBlY3RlZCBlcnJvcmAsIGVycm9yKTtcbiAqIH0pO1xuICpcbiAqIC8vIHdhdGNoIGZvciBhbnkgbWVzc2FnZXNcbiAqIHRoaXMud3NzZXJ2ZXIud2F0Y2hNZXNzYWdlKCkuc3Vic2NyaWJlKHJlc3VsdCA9PiB7XG4gKiAgIGNvbnNvbGUubG9nKGBSZWNlaXZlZCBtZXNzYWdlICR7cmVzdWx0Lm1zZ30gZnJvbSAke3Jlc3VsdC5jb25uLnV1aWR9YCk7XG4gKiB9KTtcbiAqXG4gKiAvLyBzZW5kIG1lc3NhZ2UgdG8gY29ubmVjdGlvbiB3aXRoIHNwZWNpZmllZCB1dWlkXG4gKiB0aGlzLndzc2VydmVyLnNlbmQoeyB1dWlkOiAnOGU3YzRmNDgtZGU2OC00YjZmLThmY2EtMTA2N2EzNTM5NjhkJyB9LCAnSGVsbG8gV29ybGQnKTtcbiAqXG4gKiAvLyBzdG9wIHdlYnNvY2tldCBzZXJ2ZXJcbiAqIHRoaXMud3NzZXJ2ZXIuc3RvcCgpLnRoZW4oc2VydmVyID0+IHtcbiAqICAgY29uc29sZS5sb2coYFN0b3AgbGlzdGVuaW5nIG9uICR7c2VydmVyLmFkZHJ9OiR7c2VydmVyLnBvcnR9YCk7XG4gKiB9KTtcbiAqXG4gKiBgYGBcbiAqL1xuZXhwb3J0IGRlY2xhcmUgY2xhc3MgV2ViU29ja2V0U2VydmVyIGV4dGVuZHMgSW9uaWNOYXRpdmVQbHVnaW4ge1xuICAgIC8qKlxuICAgICAqIFJldHVybiB0aGlzIGRldmljZSdzIGludGVyZmFjZXNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFdlYlNvY2tldEludGVyZmFjZXM+fVxuICAgICAqL1xuICAgIGdldEludGVyZmFjZXMoKTogUHJvbWlzZTxXZWJTb2NrZXRJbnRlcmZhY2VzPjtcbiAgICAvKipcbiAgICAgKiBTdGFydCB3ZWJzb2NrZXQgc2VydmVyXG4gICAgICogQHBhcmFtIHBvcnQge251bWJlcn0gTG9jYWwgcG9ydCBvbiB3aGljaCB0aGUgc2VydmljZSBydW5zLiAoMCBtZWFucyBhbnkgZnJlZSBwb3J0KVxuICAgICAqIEBwYXJhbSBvcHRpb25zIHtXZWJTb2NrZXRPcHRpb25zfSBBZGRpdGlvbmFsIG9wdGlvbnMgZm9yIHdlYnNvY2tldFxuICAgICAqIEByZXR1cm4ge09ic2VydmFibGU8V2ViU29ja2V0U2VydmVyRGV0YWlscz59IFJldHVybnMgT2JzZXJ2YWJsZSB3aGVyZSBhbGwgZ2VuZXJpYyBlcnJvciBjYW4gYmUgY2F0Y2hlZCAobW9zdGx5IEpTT05FeGNlcHRpb25zKVxuICAgICAqL1xuICAgIHN0YXJ0KHBvcnQ6IG51bWJlciwgb3B0aW9uczogV2ViU29ja2V0T3B0aW9ucyk6IE9ic2VydmFibGU8V2ViU29ja2V0U2VydmVyRGV0YWlscz47XG4gICAgcHJpdmF0ZSBvbkZ1bmN0aW9uVG9PYnNlcnZhYmxlO1xuICAgIC8qKlxuICAgICAqIFdhdGNoZXMgZm9yIG5ldyBtZXNzYWdlc1xuICAgICAqIEByZXR1cm4ge09ic2VydmFibGU8V2ViU29ja2V0TWVzc2FnZT59XG4gICAgICovXG4gICAgd2F0Y2hNZXNzYWdlKCk6IE9ic2VydmFibGU8V2ViU29ja2V0TWVzc2FnZT47XG4gICAgLyoqXG4gICAgICogV2F0Y2hlcyBmb3IgbmV3IG9wZW5lZCBjb25uZWN0aW9uc1xuICAgICAqIEByZXR1cm4ge09ic2VydmFibGU8V2ViU29ja2V0Q29ubmVjdGlvbj59XG4gICAgICovXG4gICAgd2F0Y2hPcGVuKCk6IE9ic2VydmFibGU8V2ViU29ja2V0Q29ubmVjdGlvbj47XG4gICAgLyoqXG4gICAgICogV2F0Y2hlcyBmb3IgY2xvc2VkIGNvbm5lY3Rpb25zXG4gICAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxXZWJTb2NrZXRDbG9zZT59XG4gICAgICovXG4gICAgd2F0Y2hDbG9zZSgpOiBPYnNlcnZhYmxlPFdlYlNvY2tldENsb3NlPjtcbiAgICAvKipcbiAgICAgKiBXYXRjaGVzIGZvciBhbnkgd2Vic29ja2V0IGZhaWx1cmVzXG4gICAgICogQHJldHVybiB7T2JzZXJ2YWJsZTxXZWJTb2NrZXRGYWlsdXJlPn1cbiAgICAgKi9cbiAgICB3YXRjaEZhaWx1cmUoKTogT2JzZXJ2YWJsZTxXZWJTb2NrZXRGYWlsdXJlPjtcbiAgICAvKipcbiAgICAgKiBTdG9wIHdlYnNvY2tldCBzZXJ2ZXIgYW5kIGNsb3NlcyBhbGwgY29ubmVjdGlvbnNcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPFdlYlNvY2tldFNlcnZlckRldGFpbHM+fVxuICAgICAqL1xuICAgIHN0b3AoKTogUHJvbWlzZTxXZWJTb2NrZXRTZXJ2ZXJEZXRhaWxzPjtcbiAgICAvKipcbiAgICAgKiBTZW5kIE1lc3NhZ2UgdG8gYSBjb25uZWN0ZWQgZGV2aWNlXG4gICAgICogQHBhcmFtIGNvbm4ge1dlYlNvY2tldElkZW50aWZpZXJ9IENvbm5lY3Rpb24gdG8gc2VuZCBtZXNzYWdlIHRvXG4gICAgICogQHBhcmFtIG1zZyB7c3RyaW5nfSBNZXNzYWdlIHRvIHNlbmRcbiAgICAgKiBAcmV0dXJuIHtQcm9taXNlPHZvaWQ+fVxuICAgICAqL1xuICAgIHNlbmQoY29ubjogV2ViU29ja2V0SWRlbnRpZmllciwgbXNnOiBzdHJpbmcpOiBQcm9taXNlPHZvaWQ+O1xuICAgIC8qKlxuICAgICAqIENsb3NlIHNwZWNpZmljIGNvbm5lY3Rpb24gdXNpbmcgdXVpZFxuICAgICAqIEBwYXJhbSBjb25uIHtXZWJTb2NrZXRJZGVudGlmaWVyfSBDb25uZWN0aW9uIHRvIGNsb3NlXG4gICAgICogQHBhcmFtIGNvZGUge251bWJlcn0gQ2xvc2UgY29kZSwgZGV0ZXJtaW5lcyBpZiBpdCB3YXMgY2xlYW5cbiAgICAgKiBAcGFyYW0gcmVhc29uIHtzdHJpbmd9IFJlYXNvbiBmb3IgY2xvc2luZ1xuICAgICAqIEByZXR1cm4ge1Byb21pc2U8dm9pZD59XG4gICAgICovXG4gICAgY2xvc2UoY29ubjogV2ViU29ja2V0SWRlbnRpZmllciwgY29kZTogbnVtYmVyLCByZWFzb246IHN0cmluZyk6IFByb21pc2U8dm9pZD47XG59XG4iXX0=