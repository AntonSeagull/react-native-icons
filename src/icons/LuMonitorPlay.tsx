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
        "d": "M15.033 9.44a.647.647 0 0 1 0 1.12l-4.065 2.352a.645.645 0 0 1-.968-.56V7.648a.645.645 0 0 1 .967-.56z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M12 17v4"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M8 21h8"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
