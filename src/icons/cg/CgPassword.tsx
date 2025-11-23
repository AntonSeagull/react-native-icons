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

export const CgPassword = (props: IconProps) => {
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
        <Path fill="currentColor" d="M6 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M9 13a1 1 0 1 0 0-2 1 1 0 0 0 0 2M14 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M20 11h-4v2h4z" />
        <Path fill="currentColor" fillRule="evenodd" d="M2 6a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2zm20 2H2v8h20z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};