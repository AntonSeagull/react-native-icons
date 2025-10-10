import { GenIcon } from '../utils';

const icon = {
  "tag": "svg",
  "attr": {
    "version": "1",
    "xmlns": "http://www.w3.org/2000/svg",
    "viewBox": "0 0 48 48",
    "enable-background": "new 0 0 48 48"
  },
  "child": [
    {
      "tag": "path",
      "attr": {
        "fill": "#90A4AE",
        "d": "M8,39V9c0-3.3,2.7-6,6-6h20c3.3,0,6,2.7,6,6v30c0,3.3-2.7,6-6,6H14C10.7,45,8,42.3,8,39z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#ECEFF1",
        "d": "M34,7H14c-1.1,0-2,0.9-2,2v26c0,1.1,0.9,2,2,2h20c1.1,0,2-0.9,2-2V9C36,7.9,35.1,7,34,7z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "none",
        "stroke": "#eee",
        "stroke-width": "2",
        "stroke-miterlimit": "10",
        "d": "M22,43v-1c0-1.1,0.9-2,2-2h0c1.1,0,2,0.9,2,2v1"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
