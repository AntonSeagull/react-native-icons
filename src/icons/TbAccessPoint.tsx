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
        "d": "M12 12l0 .01"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M14.828 9.172a4 4 0 0 1 0 5.656"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M17.657 6.343a8 8 0 0 1 0 11.314"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M9.168 14.828a4 4 0 0 1 0 -5.656"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "d": "M6.337 17.657a8 8 0 0 1 0 -11.314"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
