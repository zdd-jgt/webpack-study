import React from 'react'
import _ from 'lodash';
import './style.css'
import Icon from './1.jpg'
import printMe from './print'

function component () {
    const element = document.createElement('div');
    const btn = document.createElement('button')
    element.innerHTML = _.join(['hello world', 'webpack'], ' ');
    element.classList.add('hello');
    // 添加图片
    const myIcon = new Image();
    myIcon.src = Icon;
    element.appendChild(myIcon)
    // 添加按钮
    btn.innerHTML = '我是点击按钮';
    btn.onclick = printMe;
    element.appendChild(btn);

    return element;
}
document.body.appendChild(component());
