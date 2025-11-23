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

export const RiGitPrDraftLine = (props: IconProps) => {
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
        <Path d="M5 6a1 1 0 1 1 2 0 1 1 0 0 1-2 0m1-3a3 3 0 0 0-1 5.83v6.34a3.001 3.001 0 1 0 2 0V8.83A3.001 3.001 0 0 0 6 3M5 18a1 1 0 1 1 2 0 1 1 0 0 1-2 0m13-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-3 1a3 3 0 1 1 6 0 3 3 0 0 1-6 0m3-10.5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3m1.5 4a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" />
      </G>
    </Svg>
  );
};