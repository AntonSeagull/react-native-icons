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

export const PiChatSlashFill = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 256 256"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 128, 128)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M213.92 210.61a8 8 0 1 1-11.84 10.76L189.92 208H83l-32.6 28.16-.08.07A15.94 15.94 0 0 1 40 240a16.1 16.1 0 0 1-6.8-1.52A15.85 15.85 0 0 1 24 224V64a16 16 0 0 1 16-16h4.46l-2.38-2.62a8 8 0 1 1 11.84-10.76ZM216 48H96.75a4 4 0 0 0-3 6.69L225 199.06a4 4 0 0 0 7-2.69V64a16 16 0 0 0-16-16" />
      </G>
    </Svg>
  );
};