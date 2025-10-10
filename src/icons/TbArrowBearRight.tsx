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
        "d": "M12 3h5v5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17 3l-7.536 7.536a5 5 0 0 0 -1.464 3.534v6.93"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
