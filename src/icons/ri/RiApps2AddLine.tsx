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

export const RiApps2AddLine = (props: IconProps) => {
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
        <Path d="M2.5 7a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m0 10a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m10 0a4.5 4.5 0 1 0 9 0 4.5 4.5 0 0 0-9 0m-3-10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m0 10a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0m10 0a2.5 2.5 0 1 1-5 0 2.5 2.5 0 0 1 5 0M16 11V8h-3V6h3V3h2v3h3v2h-3v3z" />
      </G>
    </Svg>
  );
};