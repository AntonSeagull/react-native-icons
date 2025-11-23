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

export const CgFormatSeparator = (props: IconProps) => {
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
        <Path d="M16 5a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2zM16 7a1 1 0 1 1 0 2H8a1 1 0 1 1 0-2zM17 12a1 1 0 0 1-1 1H8a1 1 0 1 1 0-2h8a1 1 0 0 1 1 1M16 21a1 1 0 1 0 0-2H8a1 1 0 1 0 0 2z" />
        <Path fill="currentColor" fillRule="evenodd" d="M21 16a1 1 0 0 1-1 1H4a1 1 0 1 1 0-2h16a1 1 0 0 1 1 1" clipRule="evenodd" />
      </G>
    </Svg>
  );
};