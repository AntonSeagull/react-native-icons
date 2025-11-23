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

export const VscGame = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M4 3h8a4 4 0 0 1 4 4v3a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4m0 1a3 3 0 0 0-3 3v3a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V7a3 3 0 0 0-3-3z" clipRule="evenodd" />
        <Path d="M5.5 6a.5.5 0 0 0-.5.5V8H3.5a.5.5 0 0 0 0 1H5v1.5a.5.5 0 0 0 1 0V9h1.5a.5.5 0 0 0 0-1H6V6.5a.5.5 0 0 0-.5-.5M13 7a1 1 0 1 1-2 0 1 1 0 0 1 2 0M12 10a1 1 0 1 1-2 0 1 1 0 0 1 2 0" />
      </G>
    </Svg>
  );
};