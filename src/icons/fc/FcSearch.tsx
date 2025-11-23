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

export const FcSearch = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m29.175 31.99 2.828-2.827 12.019 12.019-2.828 2.828z" />
        <Circle cx={20} cy={20} r={16} />
        <Path fill="#37474F" d="m32.45 35.34 2.827-2.828 8.696 8.696-2.828 2.828z" />
        <Circle cx={20} cy={20} r={13} fill="#64B5F6" />
        <Path fill="#BBDEFB" d="M26.9 14.2c-1.7-2-4.2-3.2-6.9-3.2s-5.2 1.2-6.9 3.2c-.4.4-.3 1.1.1 1.4.4.4 1.1.3 1.4-.1C16 13.9 17.9 13 20 13s4 .9 5.4 2.5c.2.2.5.4.8.4.2 0 .5-.1.6-.2.4-.4.4-1.1.1-1.5" />
      </G>
    </Svg>
  );
};