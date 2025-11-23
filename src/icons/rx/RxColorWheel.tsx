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

export const RxColorWheel = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 15 15"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 7.5, 7.5)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fill="currentColor" fillRule="evenodd" d="M.877 7.5a6.623 6.623 0 1 1 13.246 0 6.623 6.623 0 0 1-13.246 0m2.904-4.284A5.65 5.65 0 0 1 7.1 1.84v4.693zm-.565.565A5.65 5.65 0 0 0 1.84 7.1h4.693zM6.534 7.9H1.841a5.65 5.65 0 0 0 1.375 3.319zm-2.753 3.884A5.65 5.65 0 0 0 7.1 13.16V8.466zM7.9 8.466v4.693a5.65 5.65 0 0 0 3.318-1.375zm3.884 2.752A5.65 5.65 0 0 0 13.16 7.9H8.466zM8.466 7.1h4.693a5.65 5.65 0 0 0-1.375-3.319zm2.753-3.884A5.65 5.65 0 0 0 7.9 1.84v4.693z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};