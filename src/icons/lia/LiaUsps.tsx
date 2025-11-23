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

export const LiaUsps = (props: IconProps) => {
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
        <Path d="M5.6 7c13.6 2.9 17.7 3.5 17.8 4.5 2 0 2.5 0 2.8.4 1.1 1-.8 3.6-.8 3.6-.2.1-21.7 8.5-21.7 8.5h22.7L30 7zm-.8 4L2 24c10.5-5.2 13.9-6.9 17.2-8.1 3.5-1.1 5.2-1.2 5.5-1.3.2-.2-.2-.4-1.4-.3-2.8.1-7.4 2-9.3 2.9l-1.6-5h10.5c-.1-1-5.4-1.1-12.7-1.2zm18.4 1.1s-.1-.1-.6.4c-.6.3-2 .3-2 .5s3.8-.2 4.7 0c.5.1-.1 1.1-.2 1.7-.1.3.1.2.1 0 1.4-2.2.8-2.6-.6-2.6z" />
      </G>
    </Svg>
  );
};