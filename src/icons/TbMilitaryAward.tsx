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
        "d": "M12 13m-4 0a4 4 0 1 0 8 0a4 4 0 1 0 -8 0"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8.5 10.5l-1 -2.5h-5.5l2.48 5.788a2 2 0 0 0 1.84 1.212h2.18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M15.5 10.5l1 -2.5h5.5l-2.48 5.788a2 2 0 0 1 -1.84 1.212h-2.18"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
