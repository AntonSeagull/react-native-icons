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

export const LiaMagento = (props: IconProps) => {
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
        <Path d="M16 3.227 5 10.174V22.44l3 1.713V11.826l8-5.053 8 5.053V24.15l3-1.712V10.174zm-2 8.351-3 1.887v12.404l5 2.86 5-2.86V13.484L18 11.6v12.53l-2 1.141-2-1.14z" />
      </G>
    </Svg>
  );
};