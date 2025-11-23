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

export const GiTargeted = (props: IconProps) => {
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
        <Path d="M256 16C123.45 16 16 123.45 16 256s107.45 240 240 240 240-107.45 240-240S388.55 16 256 16m0 60c99.41 0 180 80.59 180 180s-80.59 180-180 180S76 355.41 76 256 156.59 76 256 76m-15 30a15 15 0 0 0-15 15v30a15 15 0 0 0 15 15h30a15 15 0 0 0 15-15v-30a15 15 0 0 0-15-15zm16.75 90.03A60 60 0 0 0 196 256a60 60 0 0 0 120 0 60 60 0 0 0-58.25-59.97M121 226a15 15 0 0 0-15 15v30a15 15 0 0 0 15 15h30a15 15 0 0 0 15-15v-30a15 15 0 0 0-15-15zm240 0a15 15 0 0 0-15 15v30a15 15 0 0 0 15 15h30a15 15 0 0 0 15-15v-30a15 15 0 0 0-15-15zM241 346a15 15 0 0 0-15 15v30a15 15 0 0 0 15 15h30a15 15 0 0 0 15-15v-30a15 15 0 0 0-15-15z" />
      </G>
    </Svg>
  );
};