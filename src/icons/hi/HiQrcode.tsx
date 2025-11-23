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

export const HiQrcode = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M3 4a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm2 2V5h1v1zm-2 7a1 1 0 0 1 1-1h3a1 1 0 0 1 1 1v3a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1zm2 2v-1h1v1zm8-12a1 1 0 0 0-1 1v3a1 1 0 0 0 1 1h3a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1zm1 2v1h1V5z" clipRule="evenodd" />
        <Path d="M11 4a1 1 0 1 0-2 0v1a1 1 0 0 0 2 0zm-1 3a1 1 0 0 1 1 1v1h2a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1V8a1 1 0 0 1 1-1m6 2a1 1 0 1 0 0 2 1 1 0 0 0 0-2m-7 4a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2v2a1 1 0 1 1-2 0zm-2-2a1 1 0 1 0 0-2H4a1 1 0 1 0 0 2zm10 2a1 1 0 0 1-1 1h-2a1 1 0 1 1 0-2h2a1 1 0 0 1 1 1m-1 4a1 1 0 1 0 0-2h-3a1 1 0 1 0 0 2z" />
      </G>
    </Svg>
  );
};