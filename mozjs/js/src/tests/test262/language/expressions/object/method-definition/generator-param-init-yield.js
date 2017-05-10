// |reftest| error:SyntaxError
// Copyright (C) 2015 the V8 project authors. All rights reserved.
// This code is governed by the BSD license found in the LICENSE file.

/*---
description: >
    The Initializer of a SingleNameBinding witihn the FormalParameters of a
    GeneratorMethod may not contain the `yield` keyword.
es6id: 14.4
features: [generators]
flags: [noStrict]
negative:
  phase: early
  type: SyntaxError
---*/

(function*() {
  ({
    *method(x = yield) {}
  });
});