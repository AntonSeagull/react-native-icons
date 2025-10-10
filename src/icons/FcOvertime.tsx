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
        "fill": "#CFD8DC",
        "d": "M12,40V20h32v20c0,2.2-1.8,4-4,4H16C13.8,44,12,42.2,12,40z"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#78909C",
        "d": "M44,16v6H12v-6c0-2.2,1.8-4,4-4h24C42.2,12,44,13.8,44,16z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
