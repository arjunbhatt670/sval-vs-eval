export const testCases = [
  {
    name: "check for strict mode",
    code: "var exported = (function() {return !this; })();",
  },
  {
    name: "check for strict mode (using variable assignment)",
    code: `
    var exported = (function() { 
      try {
        id_card_number = "TEST CARD";

        return false;
      } catch {
        return true;
      }

    })();`,
  },
  {
    name: "check for 'use strict' directive",
    code: `
    'use strict';
    const isStrict = (function() {return !this; })();
    var exported = isStrict;
    `,
  },
];
