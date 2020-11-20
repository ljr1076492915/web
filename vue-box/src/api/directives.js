import Vue from 'vue';

// v-dialogDrag: 弹窗拖拽属性
Vue.directive('dialogDrag', {
    bind(el, binding, vnode, oldVnode) {
        const dialogHeaderEls = el.querySelectorAll('.narrow_win_title');
        const dragDoms = el.querySelectorAll('.narrow_win');
        
        for(let i = 0; i < dialogHeaderEls.length; i++) {
            dialogHeaderEls[i].style.cssText += ';cursor:move;'
            dragDoms[i].style.cssText += ';'
            
            // 获取原有属性 ie dom元素.currentStyle 火狐谷歌 window.getComputedStyle(dom元素, null);
            const sty = (() => {
                if (window.document.currentStyle) {
                    return (dom, attr) => dom.currentStyle[attr];
                } else {
                    return (dom, attr) => getComputedStyle(dom, false)[attr];
                }
            })()
            
            dialogHeaderEls[i].onmousedown = (e) => {
                // 鼠标按下，计算当前元素距离可视区的距离
                const disX = e.clientX - dialogHeaderEls[i].offsetLeft;
                const disY = e.clientY - dialogHeaderEls[i].offsetTop;
                
                const screenWidth = el.clientWidth; // 父盒子当前宽度
                const screenHeight = el.clientHeight; // 可见区域高度(应为父盒子高度，可某些环境下无法获取) 
            
                const dragDomWidth = dragDoms[i].offsetWidth; // 对话框宽度
                const dragDomheight = dragDoms[i].offsetHeight; // 对话框高度
            
                const minDragDomLeft = dragDoms[i].offsetLeft;
                const maxDragDomLeft = screenWidth - dragDoms[i].offsetLeft - dragDomWidth;
            
                const minDragDomTop = dragDoms[i].offsetTop;
                const maxDragDomTop = screenHeight - dragDoms[i].offsetTop - dragDomheight;
            
                // 获取到的值带px 正则匹配替换
                let styL = sty(dragDoms[i], 'left');
                let styT = sty(dragDoms[i], 'top');
            
                // 注意在ie中 第一次获取到的值为组件自带50% 移动之后赋值为px
                if (styL.includes('%')) {
                    styL = +document.body.clientWidth * (+styL.replace(/\%/g, '') / 100);
                    styT = +document.body.clientHeight * (+styT.replace(/\%/g, '') / 100);
                } else {
                    styL = +styL.replace(/\px/g, '');
                    styT = +styT.replace(/\px/g, '');
                };
            
                document.onmousemove = function (e) {
                    // 通过事件委托，计算移动的距离 
                    let left = e.clientX - disX;
                    let top = e.clientY - disY;
            
                    // 边界处理
                    if (-(left) > minDragDomLeft) {
                        left = -(minDragDomLeft);
                    } else if (left > maxDragDomLeft) {
                        left = maxDragDomLeft;
                    }
            
                    if (-(top) > minDragDomTop) {
                        top = -(minDragDomTop);
                    } else if (top > maxDragDomTop) {
                        top = maxDragDomTop;
                    }
            
                    // 移动当前元素  
                    dragDoms[i].style.cssText += `;left:${left + styL}px;top:${top + styT}px;`;
                };
            
                document.onmouseup = function (e) {
                    document.onmousemove = null;
                    document.onmouseup = null;
                };
            }
        }
    }
})
