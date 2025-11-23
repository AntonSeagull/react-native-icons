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

export const TbHexagonNumber7 = (props: IconProps) => {
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
        <Path d="M19.02 6.858a2 2 0 0 1 1 1.752v6.555c0 .728-.395 1.4-1.032 1.753l-6.017 3.844a2 2 0 0 1-1.948 0l-6.016-3.844a2 2 0 0 1-1.032-1.752V8.61c0-.728.395-1.4 1.032-1.753l6.017-3.582a2.06 2.06 0 0 1 2 0l6.017 3.583h-.029z" />
        <Path d="M10 8h4l-2 8" />
      </G>
    </Svg>
  );
};