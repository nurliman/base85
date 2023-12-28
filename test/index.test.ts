import { expect, test } from "vitest";
import base85 from "@/index";

const testlist = [
  ["", "<~~>"],
  [" ", "<~+9~>"],
  ["a", "<~@/~>"],
  ["aa", "<~@:9~>"],
  ["aaa", "<~@:<R~>"],
  ["aaaa", "<~@:<SQ~>"],
  ["aaaaa", "<~@:<SQ@/~>"],
  ["aaaaaa", "<~@:<SQ@:9~>"],
  ["aaaaaaa", "<~@:<SQ@:<R~>"],
  ["aaaaaaaa", "<~@:<SQ@:<SQ~>"],
  ["Man sure.", "<~9jqo^F*2M7/c~>"],
  ["Hello World!", '<~87cURD]i,"Ebo80~>'],
  [
    "Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.",
    "<~9jqo^BlbD-BleB1DJ+*+F(f,q/0JhKF<GL>Cj@.4Gp$d7F!,L7@<6@)/0JDEF<G%<+EV:2F!,O<DJ+*.@<*K0@<6L(Df-\\0Ec5e;DffZ(EZee.Bl.9pF\"AGXBPCsi+DGm>@3BB/F*&OCAfu2/AKYi(DIb:@FD,*)+C]U=@3BN#EcYf8ATD3s@q?d$AftVqCh[NqF<G:8+EV:.+Cf>-FD5W8ARlolDIal(DId<j@<?3r@:F%a+D58'ATD4$Bl@l3De:,-DJs`8ARoFb/0JMK@qB4^F!,R<AKZ&-DfTqBG%G>uD.RTpAKYo'+CT/5+Cei#DII?(E,9)oF*2M7/c~>",
  ],
];

const testlistUnwrapped = [
  ["", ""],
  [" ", "+9"],
  ["a", "@/"],
  ["aa", "@:9"],
  ["aaa", "@:<R"],
  ["aaaa", "@:<SQ"],
  ["aaaaa", "@:<SQ@/"],
  ["aaaaaa", "@:<SQ@:9"],
  ["aaaaaaa", "@:<SQ@:<R"],
  ["aaaaaaaa", "@:<SQ@:<SQ"],
  ["Man sure.", "9jqo^F*2M7/c"],
  ["Hello World!", '87cURD]i,"Ebo80'],
  [
    "Man is distinguished, not only by his reason, but by this singular passion from other animals, which is a lust of the mind, that by a perseverance of delight in the continued and indefatigable generation of knowledge, exceeds the short vehemence of any carnal pleasure.",
    "9jqo^BlbD-BleB1DJ+*+F(f,q/0JhKF<GL>Cj@.4Gp$d7F!,L7@<6@)/0JDEF<G%<+EV:2F!,O<DJ+*.@<*K0@<6L(Df-\\0Ec5e;DffZ(EZee.Bl.9pF\"AGXBPCsi+DGm>@3BB/F*&OCAfu2/AKYi(DIb:@FD,*)+C]U=@3BN#EcYf8ATD3s@q?d$AftVqCh[NqF<G:8+EV:.+Cf>-FD5W8ARlolDIal(DId<j@<?3r@:F%a+D58'ATD4$Bl@l3De:,-DJs`8ARoFb/0JMK@qB4^F!,R<AKZ&-DfTqBG%G>uD.RTpAKYo'+CT/5+Cei#DII?(E,9)oF*2M7/c",
  ],
];

test("encode", () => {
  testlist.forEach((test) => {
    const encoded = base85.encode(test[0]);
    expect(encoded).toBe(test[1]);
  });
});

test("encode unwrapped", () => {
  testlistUnwrapped.forEach((test) => {
    const encoded = base85.encode(test[0], { wrap: false });
    expect(encoded).toBe(test[1]);
  });
});

test("decode", () => {
  testlist.forEach((test) => {
    const decoded = base85.decode(test[1]);
    expect(decoded).toBe(test[0]);
  });
});

test("decode unwrapped", () => {
  testlistUnwrapped.forEach((test) => {
    const decoded = base85.decode(test[1]);
    expect(decoded).toBe(test[0]);
  });
});
