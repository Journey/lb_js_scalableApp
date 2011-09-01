/*
 * test.lb.base.js - Unit Tests of lb.base namespace
 *
 * Author:    Eric Bréchemier <contact@legalbox.com>
 * Copyright: Legalbox (c) 2010-2011, All Rights Reserved
 * License:   BSD License - http://creativecommons.org/licenses/BSD/
 * Version:   2011-07-12
 *
 * Based on Test Runner from bezen.org JavaScript library
 * CC-BY: Eric Bréchemier - http://bezen.org/javascript/
 */

/*jslint vars:true */
/*global define, window, lb */
define(
  [
    "bezen.org/bezen.assert",
    "bezen.org/bezen.object",
    "bezen.org/bezen.testrunner",
    "lb/lb.base"
  ],
  function(
    assert,
    object,
    testrunner,
    base
  ){

    function testNamespace(){

      assert.isTrue( object.exists(base),
                           "base namespace module not found in dependencies");

      if ( object.exists(window) ){
        assert.isTrue( object.exists(window,'lb','base'),
                                           "lb.base namespace was not found");
        assert.equals( base, lb.base,
                "same module expected in lb.base for backward compatibility");
      }
    }

    var tests = {
      testNamespace: testNamespace
    };

    testrunner.define(tests, "lb.base");
    return tests;
  }
);
