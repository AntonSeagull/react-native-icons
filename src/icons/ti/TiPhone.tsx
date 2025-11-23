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

export const TiPhone = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="m13.374 7.083 3.711-3.71-.438-.434c-.566-.566-1.555-.566-2.121 0L12.94 4.525c-.284.284-.44.661-.44 1.061s.156.777.438 1.06zm-6.728 5.856c-.566-.566-1.555-.566-2.121 0l-1.586 1.586c-.283.284-.439.661-.439 1.061s.156.777.441 1.062l.437.432 3.703-3.703zm11.791-8.21-.354-.354-3.708 3.708.65.649a.5.5 0 0 1 0 .708l-5.586 5.586a.513.513 0 0 1-.707 0l-.65-.65-3.702 3.71.354.354c.26.26 1.246 1.105 3.056 1.105 1.616 0 4.256-.712 7.65-4.105 6.773-6.775 3.158-10.55 2.997-10.711" />
      </G>
    </Svg>
  );
};