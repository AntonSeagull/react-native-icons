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

export const LiaHandHoldingSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M10.516 18a6.4 6.4 0 0 0-1.817.266l-.02.007-5.671 2.176 1.984 5.57 4.93-1.89 7.137 3.93 12.324-5.106-.766-1.844-11.437 4.735-7.102-3.91-3.89 1.488-.641-1.807 3.797-1.457A4 4 0 0 1 10.516 20c.703 0 1.522.156 2.222.79l.014.007.004.004c1.03.895 1.808 1.52 2.89 1.86s2.31.378 4.36.37l-.01-2c-2.012.008-3.063-.063-3.75-.281-.688-.211-1.176-.59-2.168-1.45l-.012-.007c-1.157-1.039-2.531-1.297-3.55-1.293" />
      </G>
    </Svg>
  );
};