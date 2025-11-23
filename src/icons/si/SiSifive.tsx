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

export const SiSifive = (props: IconProps) => {
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
        <Path d="m2.906 12.408 3.118-9.671h11.952l1.213 3.762H8.632l-.675 2.135h11.92l1.792 5.558L12 21.319l-9.189-6.777h6.205l2.957 2.18 5.85-4.312zM19.416.443H4.585L0 14.73l12 8.826 12-8.83z" />
      </G>
    </Svg>
  );
};