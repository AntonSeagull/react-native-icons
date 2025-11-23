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

export const PiFileCodeThin = (props: IconProps) => {
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
        <Path d="M178.83 149.17a4 4 0 0 1 0 5.66l-24 24a4 4 0 0 1-5.66-5.66L170.34 152l-21.17-21.17a4 4 0 1 1 5.66-5.66Zm-72-24a4 4 0 0 0-5.66 0l-24 24a4 4 0 0 0 0 5.66l24 24a4 4 0 1 0 5.66-5.66L85.66 152l21.17-21.17a4 4 0 0 0 0-5.66M212 88v128a12 12 0 0 1-12 12H56a12 12 0 0 1-12-12V40a12 12 0 0 1 12-12h96a4 4 0 0 1 2.83 1.17l56 56A4 4 0 0 1 212 88m-56-4h42.34L156 41.65Zm48 132V92h-52a4 4 0 0 1-4-4V36H56a4 4 0 0 0-4 4v176a4 4 0 0 0 4 4h144a4 4 0 0 0 4-4" />
      </G>
    </Svg>
  );
};