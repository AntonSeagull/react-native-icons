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

export const GiBedLamp = (props: IconProps) => {
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
        <Path d="m165.563 25-87 174H432.93L339.207 25zM233 217v30h46v-30zm-9 48c-1 0-9.308 1.608-18.52 5.15-9.21 3.543-20.243 8.823-30.648 15.444C154.023 298.836 137 317 137 336c0 59.297 28.834 104.436 59.836 151h118.328C346.166 440.436 375 395.297 375 336c0-19-17.023-37.164-37.832-50.406-10.405-6.621-21.437-11.9-30.648-15.444C297.308 266.608 289 265 288 265z" />
      </G>
    </Svg>
  );
};