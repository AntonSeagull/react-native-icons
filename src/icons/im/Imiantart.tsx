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

export const Imiantart = (props: IconProps) => {
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
        <Path d="M12.953 2.909V0h-2.909l-.291.294L8.378 2.91l-.431.291h-4.9v3.994h2.694l.241.291-2.934 5.606v2.909h2.909l.291-.294 1.375-2.616.431-.291h4.9V8.806H10.26l-.241-.294z" />
      </G>
    </Svg>
  );
};