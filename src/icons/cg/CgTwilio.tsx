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

export const CgTwilio = (props: IconProps) => {
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
        <Path fill="currentColor" d="M11 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0M17 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0M15 17a2 2 0 1 0 0-4 2 2 0 0 0 0 4M11 15a2 2 0 1 1-4 0 2 2 0 0 1 4 0" />
        <Path fill="currentColor" fillRule="evenodd" d="M24 12c0 6.627-5.373 12-12 12S0 18.627 0 12 5.373 0 12 0s12 5.373 12 12m-3 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};