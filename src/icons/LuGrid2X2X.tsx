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
        "d": "M12 3v17a1 1 0 0 1-1 1H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v6a1 1 0 0 1-1 1H3"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m16 16 5 5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "m16 21 5-5"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
