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

export const RxTokens = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M4.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M3 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0M10.5 2a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M9 4.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0m-7 6a2.5 2.5 0 1 1 5 0 2.5 2.5 0 0 1-5 0M4.5 9a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3m6-1a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M9 10.5a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0" clipRule="evenodd" />
      </G>
    </Svg>
  );
};