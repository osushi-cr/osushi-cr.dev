import { parseInquiry } from "../src/inquiry.ts";

function assert(cond, message) {
  if (!cond) throw new Error(message);
}

assert(parseInquiry({ message: "こんにちは" }).message === "こんにちは", "keeps message");
assert(parseInquiry({ name: "お寿司", contact: "@osushi_cr", message: "相談" }).name === "お寿司", "keeps name");
assert(parseInquiry({ website: "http://spam", message: "x" }).error === "bot", "honeypot");
assert(parseInquiry({ message: "   " }).error === "message", "empty message");
assert(parseInquiry(null).error === "empty", "empty body");

console.log("inquiry parse ok");
