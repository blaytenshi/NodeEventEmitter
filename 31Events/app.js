// Two kinds of events in node
// ** System events
// Comes from the C++ Core of node. C++ core has libuv which is a library of C++ code that's a part of nodejs that
// deals with events coming from the computer system. Events like 'finished reading a file', 'file is open', 'received
// data from the Internet'. Things that Javascript doesn't have.
//
// ** Custom events
// Inside the javascript core. Javascript library of events. You can create these yourself and can have custom code to
// handle these events.
//
// Because in node we have Javascript code that wraps C++ code, when libuv generates an event from the system, it in
// turn generates Javascript Events and come from the Event Emitter