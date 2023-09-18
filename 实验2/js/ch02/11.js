"use strict";

const { vec3 } = glMatrix;

var canvas;
var gl;

var program1; // WebGL程序对象1
var program2; // WebGL程序对象2
var program3; // WebGL程序对象3

var points = [];
var colors = [];

var numTimesToSubdivide = 3;

window.onload = function init() {
    canvas = document.getElementById("gl-canvas");

    gl = WebGLUtils.setupWebGL(canvas);
    if (!gl) {
        alert("WebGL isn't available");
    }

    // 初始化WebGL程序对象1
    program1 = initShaders(gl, "vertex-shader-1", "fragment-shader-1");
    gl.useProgram(program1);

    // 初始化WebGL程序对象2
    program2 = initShaders(gl, "vertex-shader-2", "fragment-shader-2");

    // 初始化WebGL程序对象3
    program3 = initShaders(gl, "vertex-shader-3", "fragment-shader-3");

    // 其他初始化代码...

    // 添加按钮点击事件处理程序，根据不同按钮切换程序对象
    document.getElementById("button-1").addEventListener("click", function () {
        gl.useProgram(program1);
        // 更新uniform变量等
        render();
    });

    document.getElementById("button-2").addEventListener("click", function () {
        gl.useProgram(program2);
        // 更新uniform变量等
        render();
    });

    document.getElementById("button-3").addEventListener("click", function () {
        gl.useProgram(program3);
        // 更新uniform变量等
        render();
    });

    // 其他事件处理代码...

    render();
};

function render() {
    gl.clear(gl.COLOR_BUFFER_BIT | gl.DEPTH_BUFFER_BIT);
    // 渲染代码...
}
