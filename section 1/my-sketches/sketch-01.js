const canvasSketch = require('canvas-sketch');

const settings = {
  dimensions: [ 600, 600 ]
};

const sketch = () => {
  return ({ context, width, height }) => {

    let gap = width * 0.03;
    let lineWidth = 4;
    let inner_gap = 1;
    let rectLength = width * 0.1;
    let rectLength_2 = rectLength - 2 * lineWidth - 2 * inner_gap;
    let x0 = (width-(gap * 4 + rectLength * 5)) * 0.5;
    let y0 = x0;


    context.lineWidth = lineWidth;  

    for(let i=0; i < 5; i++)
    {
      let x_rect = (gap + rectLength + 2 * inner_gap) * i + x0;
      let x_rect_2 = x_rect + lineWidth + inner_gap;

      for(let j=0; j < 5; j++)
      {
        let y_rect = (gap + rectLength) * j + y0;
        let y_rect_2 = y_rect + lineWidth + inner_gap;

        context.strokeStyle = 'black';
        context.strokeRect(x_rect, y_rect, rectLength, rectLength);

        if(Math.random() < 0.3)
        {
          context.strokeStyle = 'black';
          context.strokeRect(x_rect_2, y_rect_2, rectLength_2, rectLength_2);
        }
      }
    }
  };
};

canvasSketch(sketch, settings);
