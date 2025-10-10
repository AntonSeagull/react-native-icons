import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "xmlns": "http://www.w3.org/2000/svg",
    "width": "24",
    "height": "24",
    "viewBox": "0 0 24 24",
    "fill": "none",
    "stroke": "currentColor",
    "stroke-width": "2",
    "stroke-linecap": "round",
    "stroke-linejoin": "round"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "d": "M12 5l-8 4l8 4l8 -4l-8 -4",
        "fill": "currentColor"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M10 12l-6 3l8 4l8 -4l-6 -3"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
