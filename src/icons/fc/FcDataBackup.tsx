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

export const FcDataBackup = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 48 48"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 24, 24)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M38 7H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2V9c0-1.1-.9-2-2-2M38 19H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2M38 31H10c-1.1 0-2 .9-2 2v6c0 1.1.9 2 2 2h28c1.1 0 2-.9 2-2v-6c0-1.1-.9-2-2-2" />
        <Path d="m31 30 7 5.6V24.4z" />
        <Path d="M38 28c-.3 0-.7 0-1 .1v4c.3-.1.7-.1 1-.1 3.3 0 6 2.7 6 6s-2.7 6-6 6-6-2.7-6-6c0-.3 0-.6.1-.9l-3.4-2.7c-.4 1.1-.7 2.3-.7 3.6 0 5.5 4.5 10 10 10s10-4.5 10-10-4.5-10-10-10" />
      </G>
    </Svg>
  );
};