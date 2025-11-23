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

export const LiaCss3 = (props: IconProps) => {
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
        <Path d="m8.219 5-.156.813-.5 2.875-.22 1.187H21.47l-.313 1.813H7.031l-.156.812-.5 2.875-.219 1.156h14.125l-.718 4.063L14.343 23l-4.093-2.25.219-1.219.219-1.156H5.812l-.125.813L5 23l-.156.75.687.344 7.813 3.812.406.188.406-.157 9.157-3.843.5-.188.125-.562L27 6.188 27.219 5Zm1.656 2h14.938l-2.75 15.469-8.282 3.406-6.687-3.25.406-2.25h.781l-.25 1.438.625.343L13.812 25l.438.25.469-.219 6.156-2.843.469-.22.093-.53 1.032-5.72.218-1.187H8.563l.126-.844h14.156l.125-.843.687-3.813.219-1.156H9.75Z" />
      </G>
    </Svg>
  );
};