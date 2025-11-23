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

export const GiAbstract080 = (props: IconProps) => {
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
        <Path d="M21 21v218.844h59.19V80.19h159.654V21zm251.157 0v59.19h159.8v159.654H491V21zm-163.032 88.125v293.75h293.75v-293.75zM256 167.875c48.64 0 88.125 39.485 88.125 88.125S304.64 344.125 256 344.125 167.875 304.64 167.875 256 207.36 167.875 256 167.875M21 272.156V491h218.844v-59.19H80.191V272.155zm410.957 0V431.81h-159.8V491H491V272.156z" />
      </G>
    </Svg>
  );
};