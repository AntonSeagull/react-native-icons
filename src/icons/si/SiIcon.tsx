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

export const SiIcon = (props: IconProps) => {
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
        <Path d="M1.927 23.935a2.4 2.4 0 0 1-1.882-1.883 2.4 2.4 0 0 1 2.82-2.82 2.4 2.4 0 0 1 1.882 1.882 2.4 2.4 0 0 1-2.82 2.82M21.135 4.768a2.4 2.4 0 0 1-1.882-1.882 2.4 2.4 0 0 1 2.82-2.82 2.4 2.4 0 0 1 1.882 1.882 2.4 2.4 0 0 1-2.82 2.82M12.021 6.01c1.147 0 2.219.324 3.13.883l2.585-2.585A9.583 9.583 0 0 0 4.328 17.716l2.586-2.586a5.99 5.99 0 0 1 5.107-9.12m5.107 2.86a5.99 5.99 0 0 1-8.237 8.237l-2.586 2.585A9.583 9.583 0 0 0 19.713 6.284Z" />
      </G>
    </Svg>
  );
};