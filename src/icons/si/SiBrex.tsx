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

export const SiBrex = (props: IconProps) => {
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
        <Path d="M18.69 2.319a3.87 3.87 0 0 0-3.108 1.547l-.759 1.007a1.66 1.66 0 0 1-1.313.656H0V21.68h5.296a3.87 3.87 0 0 0 3.108-1.547l.759-1.006a1.66 1.66 0 0 1 1.313-.657H24V2.319zm1.108 11.949h-5.66a3.87 3.87 0 0 0-3.108 1.547l-.759 1.007a1.66 1.66 0 0 1-1.313.656H4.202V9.731h5.661a3.87 3.87 0 0 0 3.107-1.547l.759-1.006a1.66 1.66 0 0 1 1.313-.657h4.771z" />
      </G>
    </Svg>
  );
};