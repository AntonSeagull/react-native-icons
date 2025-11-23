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

export const CiDollar = (props: IconProps) => {
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
        <Path d="M12 21.934A9.934 9.934 0 1 1 21.934 12 9.945 9.945 0 0 1 12 21.934m0-18.868A8.934 8.934 0 1 0 20.934 12 8.944 8.944 0 0 0 12 3.066" />
        <Path d="M14.5 13.5a2.006 2.006 0 0 1-2 2v1.01a.5.5 0 0 1-1 0V15.5h-1.25a.5.5 0 0 1 0-1h2.25a1 1 0 0 0 0-2h-1a2 2 0 0 1 0-4V7.49a.5.5 0 0 1 1 0V8.5h1.25a.5.5 0 0 1 0 1H11.5a1 1 0 0 0 0 2h1a2.006 2.006 0 0 1 2 2" />
      </G>
    </Svg>
  );
};