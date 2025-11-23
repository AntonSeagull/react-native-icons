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

export const GiSummits = (props: IconProps) => {
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
        <Path d="M96.07 20c-26.51 0-48 21.49-48 48 0 26.5 21.49 48 48 48 26.53 0 48.03-21.5 48.03-48 0-26.51-21.5-48-48.03-48M326.2 81.5 217.1 237.9l-6.5 69.2-86.1-108.7-68.48 111.4-10.63 56.1-29.26 67.7 1.13.5L64.07 492l96.03-21.3 25.3-25.4-69.5-93.5 45.4-24.8-34.5-96.5 136.3 180.2 9-14.7-19.1-86 66.8-28.6.3-156.4 51.7 178.7-44.6 62.8-9 39.4-50.8 54.8L403 426.6l-37.1-21.2 34.5-31.8-27.8-23.3 52.8-72.3 6.1 90.6 52 49.9 12.4-13-47-45.1-7.5-112.8-57.3 33.8z" />
      </G>
    </Svg>
  );
};