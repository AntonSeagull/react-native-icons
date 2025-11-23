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

export const LiaSubscriptSolid = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m4.156 8 1 1.531L9.313 16l-4.157 6.469-1 1.531h6.375l.313-.469L12.5 20.97l1.656 2.562.313.469h6.375l-1-1.531L15.687 16l4.157-6.469 1-1.531h-6.375l-.313.469L12.5 11.03 10.844 8.47 10.53 8Zm3.657 2h1.656l2.187 3.438.844 1.312.844-1.312L15.53 10h1.656l-3.53 5.469-.344.531.343.531L17.187 22h-1.656l-2.187-3.437-.844-1.313-.844 1.313L9.47 22H7.813l3.53-5.469.345-.531-.344-.531Zm17.156 9A2.99 2.99 0 0 0 22 21.969V22h2v-.031c0-.547.422-.969.969-.969h.062c.547 0 .969.422.969.969a.93.93 0 0 1-.406.781l-2.125 1.469A3.39 3.39 0 0 0 22 27v1h6v-2h-3.469c.04-.031.02-.098.063-.125l2.125-1.469A2.95 2.95 0 0 0 28 21.97 2.99 2.99 0 0 0 25.031 19Z" />
      </G>
    </Svg>
  );
};