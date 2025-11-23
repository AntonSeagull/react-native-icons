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

export const TbBrandOpenai = (props: IconProps) => {
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
        <Path d="M11.217 19.384A3.501 3.501 0 0 0 18 18.167V13l-6-3.35" />
        <Path d="M5.214 15.014A3.501 3.501 0 0 0 9.66 20.28L14 17.746V10.8" />
        <Path d="M6 7.63c-1.391-.236-2.787.395-3.534 1.689a3.474 3.474 0 0 0 1.271 4.745L8 16.578l6-3.348" />
        <Path d="M12.783 4.616A3.501 3.501 0 0 0 6 5.833V10.9l6 3.45" />
        <Path d="M18.786 8.986A3.501 3.501 0 0 0 14.34 3.72L10 6.254V13.2" />
        <Path d="M18 16.302c1.391.236 2.787-.395 3.534-1.689a3.474 3.474 0 0 0-1.271-4.745l-4.308-2.514L10 10.774" />
      </G>
    </Svg>
  );
};