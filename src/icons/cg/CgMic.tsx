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

export const CgMic = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="M9 4a3 3 0 1 1 6 0v8a3 3 0 1 1-6 0zm4 0v8a1 1 0 1 1-2 0V4a1 1 0 1 1 2 0" clipRule="evenodd" />
        <Path fill="currentColor" d="M18 12a6 6 0 0 1-5 5.917V21h4v2H7v-2h4v-3.083A6 6 0 0 1 6 12V9h2v3a4 4 0 0 0 8 0V9h2z" />
      </G>
    </Svg>
  );
};