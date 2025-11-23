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

export const TbSpaces = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M6.045 9.777a6 6 0 1 0 5.951.023" />
        <Path d="M11.997 20.196a6 6 0 1 0-2.948-5.97" />
        <Path d="M17.95 9.785Q18 9.399 18 9a6 6 0 1 0-3.056 5.23" />
      </G>
    </Svg>
  );
};