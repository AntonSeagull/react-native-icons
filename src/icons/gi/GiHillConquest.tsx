import {
  G,
  Path,
  Svg,
  Line,
  Circle,
  Polyline,
  Polygon,
  Rect,
  Ellipse
} from 'react-native-svg';
import type { IconProps } from '../../types';

export const GiHillConquest = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M247 55v203.248a337 337 0 0 0-10.68-.154c-62.774.18-123.48 18.017-170.16 55.783-18.406 14.89-34.696 32.91-48.16 54.28V494h208.92c43.583-100.15 136.274-151 230.414-151 2.962 0 5.926.056 8.89.156a294 294 0 0 0-4.59-4.035c-53.44-45.953-125.055-74.07-196.634-79.884v-99.66c27.09-2.53 46.44-15.576 71-15.576 27.195 0 48 16 80 16V80c-32 0-48-16-80-16-28.854 0-44.703 13.005-71 15.563V55zm210.334 306c-85.44 0-168.606 43.956-210.47 133H494V363.73a248.6 248.6 0 0 0-36.666-2.73" />
      </G>
    </Svg>
  );
};