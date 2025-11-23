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

export const TfiRssAlt = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 17 17"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8.5, 8.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M11.173 17h-1C10.173 11.486 5.609 7 0 7V6c6.161 0 11.173 4.935 11.173 11M0 0v1c8.972 0 16 7.028 16 16h1C17 7.468 9.532 0 0 0m4 15.001A2 2 0 0 0 2.004 13 2.004 2.004 0 0 0 0 15.001a2 2 0 0 0 4 0m-1 0a1 1 0 0 1-.996.999A1 1 0 0 1 1 15.001a1 1 0 1 1 2 0" />
      </G>
    </Svg>
  );
};