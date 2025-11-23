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

export const VscStarHalf = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M6.405 6.252 8 1l1.595 5.252H15l-4.373 3.4L12.25 15 8 11.695 3.75 15l1.623-5.348L1 6.252zM8 10.032l1.915 1.49-.731-2.41 1.915-1.49H8.732L8 5.214v4.82zm5.652-3.31H9.28z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};