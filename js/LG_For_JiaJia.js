/******/ (function(modules) { // webpackBootstrap
/******/    // The module cache
/******/    var installedModules = {};

/******/    // The require function
/******/    function __webpack_require__(moduleId) {

/******/        // Check if module is in cache
/******/        if(installedModules[moduleId])
/******/            return installedModules[moduleId].exports;

/******/        // Create a new module (and put it into the cache)
/******/        var module = installedModules[moduleId] = {
/******/            i: moduleId,
/******/            l: false,
/******/            exports: {}
/******/        };

/******/        // Execute the module function
/******/        modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);

/******/        // Flag the module as loaded
/******/        module.l = true;

/******/        // Return the exports of the module
/******/        return module.exports;
/******/    }


/******/    // expose the modules object (__webpack_modules__)
/******/    __webpack_require__.m = modules;

/******/    // expose the module cache
/******/    __webpack_require__.c = installedModules;

/******/    // identity function for calling harmony imports with the correct context
/******/    __webpack_require__.i = function(value) { return value; };

/******/    // define getter function for harmony exports
/******/    __webpack_require__.d = function(exports, name, getter) {
/******/        if(!__webpack_require__.o(exports, name)) {
/******/            Object.defineProperty(exports, name, {
/******/                configurable: false,
/******/                enumerable: true,
/******/                get: getter
/******/            });
/******/        }
/******/    };

/******/    // getDefaultExport function for compatibility with non-harmony modules
/******/    __webpack_require__.n = function(module) {
/******/        var getter = module && module.__esModule ?
/******/            function getDefault() { return module['default']; } :
/******/            function getModuleExports() { return module; };
/******/        __webpack_require__.d(getter, 'a', getter);
/******/        return getter;
/******/    };

/******/    // Object.prototype.hasOwnProperty.call
/******/    __webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };

/******/    // __webpack_public_path__
/******/    __webpack_require__.p = "";

/******/    // Load entry module and return exports
/******/    return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


//Practice
if (!document.getElementsByClassName) {
    var res = new Array();
    document.getELementsByClassName = function (className) {
        var allTag = document.getELementsByTagName('*');
        for (var i = 0; i < allTag.length; i++) {
            var allClass = allTag[i].className.split(' ');
            for (var j in allClass) {
                if (allClass[j] == className) {
                    res.push(allTag[i]);
                    break;
                }
            }
        }
        return res;
    };
}

function LightGallery(element) {
    var _this = this;
    _this.element = element;
    _this.items = [];
    _this.items = element.children;
    for (var i = 0; i < _this.items.length; i++) {
        (function (index) {
            _this.items[index].addEventListener('click', function (e) {
                e.preventDefault();
                if (!document.body.classList.contains('LG_Open')) {
                    _this.init(index);
                    document.body.classList.add('LG_Open');
                }
            }, false);
        })(i);
    }
}

LightGallery.prototype.init = function (index) {
    var _this = this;
    _this.core(index);
};
LightGallery.prototype.core = function (index) {
    var _this = this;
    var list = '',
        action = '',
        template;
    //insertAdjacentHTML() 将指定的文本解析为HTML或XML，并将生成的节点插入到指定位置的DOM树中。它不会重新解析它正在使用的元素，因此它不会破坏元素内的现有元素。这避免了额外的序列化步骤，使其比直接innerHTML操作更快。
    document.body.insertAdjacentHTML('beforeend', '<div class="LG_BG"></div>');

    for (var i = 0; i < _this.items.length; i++) {
        list += '<div class="LG_Item"><div class="LG_Imgwrap"><img class="LG_image" src="' + _this.items[i].getElementsByTagName("img")[0].getAttribute("src") + '"/></div></div>';
    }

    if (_this.items.length > 1) {
        action = '<div class="LG_Actions">' + '<div class="LG_PrevArrow"> < </div>' + '<div class="LG_NextArrow"> > </div>' + '</div>';
    }
    template = '<div class="LG_Wrap">' + '<div class="LG" style="width:100%; height:100%">' + '<div class="LG_List">' + list + '</div>' + '<div class=LG_Bar><span id="LG_CloseBtn">X</span>' + '</div>' + action + '</div>' + '</div>';

    document.body.insertAdjacentHTML('beforeend', template);

    _this.Wrap = document.querySelector('.LG_Wrap');
    _this.Items = _this.Wrap.querySelectorAll('.LG_Item');
    document.getElementById('LG_CloseBtn').addEventListener('click', function (e) {
        document.getElementsByClassName('LG_BG')[0].parentNode.removeChild(document.getElementsByClassName('LG_BG')[0]);
        document.getElementsByClassName('LG_Wrap')[0].parentNode.removeChild(document.getElementsByClassName('LG_Wrap')[0]);
        document.body.classList.remove('LG_Open');
    });
    _this.Items[index].classList.add('LG_Current');
    if (index == _this.Items.length - 1) {
        _this.Items[0].classList.add('LG_Next');
    } else {
        _this.Items[index + 1].classList.add('LG_Next');
    }
    if (index == 0) {
        _this.Items[_this.Items.length - 1].classList.add('LG_Pre');
    } else {
        _this.Items[index - 1].classList.add('LG_Pre');
    }
    document.getElementsByClassName("LG_PrevArrow")[0].addEventListener('click', function (e) {
        if (_this.Items.length <= 1) {
            return;
        }

        var Pre = document.getElementsByClassName("LG_Pre")[0];
        var Current = document.getElementsByClassName("LG_Current")[0];
        var Next = document.getElementsByClassName("LG_Next")[0];

        if (Pre.previousElementSibling != null) {
            Pre.previousElementSibling.classList.add("LG_Pre");
        } else {
            _this.Items[_this.Items.length - 1].classList.add("LG_Pre");
        }
        Pre.classList.add("LG_Current");
        Pre.classList.remove("LG_Pre");
        Current.classList.add("LG_Next");
        Current.classList.remove("LG_Current");
        Next.classList.remove("LG_Next");
    });
    document.getElementsByClassName("LG_NextArrow")[0].addEventListener('click', function (e) {
        //TODO只有一张图的时候
        if (_this.Items.length <= 1) {
            return;
        }
        var Pre = document.getElementsByClassName("LG_Pre")[0];
        var Current = document.getElementsByClassName("LG_Current")[0];
        var Next = document.getElementsByClassName("LG_Next")[0];

        if (Next.nextElementSibling != null) {
            Next.nextElementSibling.classList.add("LG_Next");
        } else {
            _this.Items[0].classList.add("LG_Next");
        }
        Next.classList.add("LG_Current");
        Next.classList.remove("LG_Next");
        Current.classList.add("LG_Pre");
        Current.classList.remove("LG_Current");
        Pre.classList.remove("LG_Pre");
    });
};
function setVendor(el, property, value) {
    if (!el) {
        return;
    }
    //charAt() 方法可返回指定位置的字符。从0开始，参数传入的是多少返回的就是相应位置的字符，超过字符串的长度则返回''
    el.style[property.charAt(0).toLowerCase() + property.slice(1)] = value;
    el.style['webkit' + property] = value;
    el.style['moz' + property] = value;
    el.style['ms' + property] = value;
    el.style['o' + property] = value;
};
window.lightGallery = function (element) {
    if (!element) {
        console.error('没有正确传入参数！');
        return;
    } else {
        new LightGallery(element);
    }
};

lightGallery(document.getElementById('LG'));

/***/ })
/******/ ]);

//https://github.com/VincentGarreau/particles.js/

particlesJS("particles-js", {
  "particles": {
    "number": {
      "value": 200,
      "density": {
        "enable": true,
        "value_area": 800
      }
    },
    "color": {
      "value": "#ffffff"
    },
    "shape": {
      "type": "image",
      "stroke": {
        "width": 3,
        "color": "#fff"
      },
      "polygon": {
        "nb_sides": 5
      },
      "image": {
        "src": "http://www.dynamicdigital.us/wp-content/uploads/2013/02/starburst_white_300_drop_2.png",
        "width": 100,
        "height": 100
      }
    },
    "opacity": {
      "value": 0.7,
      "random": false,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 0.1,
        "sync": false
      }
    },
    "size": {
      "value": 5,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 20,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 50,
      "color": "#ffffff",
      "opacity": 0.6,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 5,
      "direction": "bottom",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": true,
        "rotateX": 300,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "canvas",
    "events": {
      "onhover": {
        "enable": true,
        "mode":  "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "repulse"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 150,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 200,
        "size": 40,
        "duration": 2,
        "opacity": 8,
        "speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.2
      },
      "push": {
        "particles_nb": 4
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});