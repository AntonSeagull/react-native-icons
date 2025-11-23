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

export const BiLogoFlickr = (props: IconProps) => {
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
        <Path d="M11.157 12a4.573 4.573 0 1 1-9.147 0 4.573 4.573 0 0 1 9.147 0m10.833 0a4.573 4.573 0 1 1-9.147 0 4.573 4.573 0 0 1 9.147 0" />
      </G>
    </Svg>
  );
};