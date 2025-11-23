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

export const GiCalculator = (props: IconProps) => {
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
        <Path d="M95 25v462h322V25zm193 18h80v18h-80zM114 83h284v84H114zm22 46v18h88v-18zm-22 54h58v58h-58zm76 0h58v58h-58zm74 0h58v58h-58zm76 0h58v58h-58zm-208 18v22h22v-22zm76 0v22h22v-22zm74 0v22h22v-22zm76 0v22h22v-22zm-244 56h58v58h-58zm76 0h58v58h-58zm74 0h58v58h-58zm76 0h58v58h-58zm-208 18v22h22v-22zm76 0v22h22v-22zm74 0v22h22v-22zm76 0v22h22v-22zm-244 56h58v58h-58zm76 0h58v58h-58zm74 0h58v58h-58zm76 0h58v132h-58zm-208 18v22h22v-22zm76 0v22h22v-22zm74 0v22h22v-22zm76 0v96h22v-96zm-244 56h58v58h-58zm76 0h58v58h-58zm74 0h58v58h-58zm-132 18v22h22v-22zm76 0v22h22v-22zm74 0v22h22v-22z" />
      </G>
    </Svg>
  );
};