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

export const LiaShareAltSquareSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M5 5v22h22V5zm2 2h18v18H7zm13 3a2 2 0 0 0-1.992 2.156L13.32 14.5A2 2 0 0 0 12 14a2 2 0 0 0 0 4 2 2 0 0 0 1.32-.5l4.688 2.344A2 2 0 0 0 20 22a2 2 0 0 0 0-4 2 2 0 0 0-1.32.5l-4.688-2.344a2 2 0 0 0 0-.312L18.68 13.5A2 2 0 0 0 20 14a2 2 0 0 0 0-4" />
      </G>
    </Svg>
  );
};