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

export const Imoo = (props: IconProps) => {
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
        <Path d="M8.878 9.203C10.637 6.115 13.544 1.078 14.341 0c-.35.234-.887.353-1.381.466L12.213 0c-.6 1.119-2.813 4.734-4.222 7.05C6.563 4.684 4.872 1.953 3.769 0 2.894.188 2.532.197 1.66 0c1.731 2.606 4.503 7.572 5.447 9.203L6.979 16l1.013-.466v-.012L9.004 16z" />
      </G>
    </Svg>
  );
};