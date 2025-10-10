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
        "d": "M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 6.5v11"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15 9.4a4 4 0 1 0 0 5.2"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
