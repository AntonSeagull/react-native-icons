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

export const SiAstra = (props: IconProps) => {
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
        <Path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0m-.145 5.323 1.452 2.903c-1.646 3.32-3.29 6.648-4.936 9.968H5.758C7.79 13.907 9.823 9.61 11.855 5.323m2.71 5.322c1.229 2.516 2.448 5.032 3.677 7.548h-2.806c-.32-.745-.649-1.48-.968-2.225H12l.048-.097c.842-1.742 1.675-3.484 2.517-5.226" />
      </G>
    </Svg>
  );
};