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
        "fill": "none",
        "stroke": "#F44336",
        "stroke-width": "4",
        "stroke-miterlimit": "10",
        "d": "M7,20v-8c0-2.2,1.8-4,4-4h14c1.2,0,2.4,0.6,3.2,1.6 L35,18"
      },
      "child": []
    },
    {
      "tag": "path",
      "attr": {
        "fill": "#F44336",
        "d": "M40.2,17L33,14H7c-1.2,0-2,0.8-2,2v10c0,1.2,0.8,2,2,2h1c0-2.8,2.2-5,5-5s5,2.2,5,5h12c0-2.8,2.2-5,5-5 s5,2.2,5,5h1c1.2,0,2-0.8,2-2v-5.2C43,19.2,41.8,17.6,40.2,17z"
      },
      "child": []
    }
  ]
};

export default GenIcon(icon);
