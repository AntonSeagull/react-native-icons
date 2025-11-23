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

export const VscCoverage = (props: IconProps) => {
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
        <Path fillRule="evenodd" d="m8.884 8.32-2.5 3-.738.034-1.5-1.5.708-.708 1.112 1.113 2.15-2.58z" clipRule="evenodd" />
        <Path d="M11.98 9.97a3.5 3.5 0 0 0-3.806-5.71 5.5 5.5 0 0 0-1.506-.257 4.5 4.5 0 1 1 4.973 7.457c.179-.47.295-.97.34-1.49" />
        <Path fillRule="evenodd" d="M6.5 13a3.5 3.5 0 1 1 0-7 3.5 3.5 0 0 1 0 7m0 1a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9" clipRule="evenodd" />
      </G>
    </Svg>
  );
};