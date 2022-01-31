#!/usr/bin/env wolframscript
(* ::Package:: *)

quote = Association[Import["https://quotable.io/random"]];
Print[quote["content"], " --- ", quote["author"]]
