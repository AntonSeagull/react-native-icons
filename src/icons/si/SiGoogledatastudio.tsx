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

export const SiGoogledatastudio = (props: IconProps) => {
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
        <Path d="M19.197 23.002a3.502 3.502 0 0 1 0-6h-6.909a3 3 0 0 0-.252-.011A3.05 3.05 0 0 0 9 20.002v.014a3.015 3.015 0 0 0 3.288 2.986zm1.803-6a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 1 0-6m-10.803-2.004a3.502 3.502 0 0 1 0-6H3.288a3 3 0 0 0-.252-.011A3.05 3.05 0 0 0 0 11.998v.014a3.015 3.015 0 0 0 3.288 2.986zm1.803-6a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 1 0-6m7.197-2.004a3.502 3.502 0 0 1 0-6h-6.909a3.062 3.062 0 0 0-3.288 3v.014a3.015 3.015 0 0 0 3.288 2.986zm1.803-6a3.001 3.001 0 0 1 0 6 3.001 3.001 0 0 1 0-6" />
      </G>
    </Svg>
  );
};