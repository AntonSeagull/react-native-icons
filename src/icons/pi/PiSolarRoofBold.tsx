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

export const PiSolarRoofBold = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m250.73 122.63-40-80A12 12 0 0 0 200 36H56a12 12 0 0 0-10.73 6.63l-40 80A12 12 0 0 0 4 128v56a20 20 0 0 0 20 20h208a20 20 0 0 0 20-20v-56a12 12 0 0 0-1.27-5.37M96.58 60l8 16H83.42l-8-16Zm48 0 8 16h-21.16l-8-16Zm-41.16 56-8-16h21.16l8 16Zm48 0-8-16h21.16l8 16Zm48 0-8-16h21.16l8 16Zm1.16-40h-21.16l-8-16h21.16ZM28 130.83l28-56 28 56V180H28ZM108 180v-40h120v40Z" />
      </G>
    </Svg>
  );
};