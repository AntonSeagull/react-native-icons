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
        "d": "M12.797 19.595l-2.797 -5.595l-7 -3.5a.55 .55 0 0 1 0 -1l18 -6.5l-3.548 9.826"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 21l5 -5"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M21 21v.01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M16 16v.01"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
