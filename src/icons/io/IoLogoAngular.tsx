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

export const IoLogoAngular = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M213.57 256h84.85l-42.43-89.36z" />
        <Path d="M256 32 32 112l46.12 272L256 480l177.75-96L480 112Zm88 320-26.59-56H194.58L168 352h-40L256 72l128 280Z" />
      </G>
    </Svg>
  );
};