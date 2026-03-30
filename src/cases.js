export const testCases = [
  {
    name: "check for strict mode",
    code: "var isStrict = (function() {return !this; })(); exports.__output__ = isStrict;",
  },
  {
    name: "check for strict mode (using variable assignment)",
    code: `var isStrict = (function() { 
      try {
        id_card_number = "TEST CARD";

        return false;
      } catch {
        return true;
      }

     })(); exports.__output__ = isStrict;`,
  },
];
