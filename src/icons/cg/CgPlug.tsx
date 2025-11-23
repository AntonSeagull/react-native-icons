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

export const CgPlug = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M9 2a1 1 0 0 0-1 1v2a1 1 0 1 0 2 0V3a1 1 0 0 0-1-1M8 9h8v2a4 4 0 0 1-8 0zm5 7.917A6 6 0 0 0 18 11V7H6v4a6 6 0 0 0 5 5.917V22a1 1 0 1 0 2 0zM14 3a1 1 0 1 1 2 0v2a1 1 0 1 1-2 0z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};