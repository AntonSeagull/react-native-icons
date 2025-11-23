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

export const FcSoundRecordingCopyright = (props: IconProps) => {
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
        <Circle cx={24} cy={24} r={21} fill="#9C27B0" />
        <Path fill="#E1BEE7" d="M20.7 27.2v8.4h-3.9V12.9h8.7c1.3 0 2.5.2 3.5.5 1 .4 1.9.9 2.6 1.5s1.2 1.4 1.6 2.3.6 1.8.6 2.9q0 1.65-.6 3c-.4.9-.9 1.6-1.6 2.2S30 26.4 29 26.7s-2.2.5-3.5.5zm0-3.2h4.7c.8 0 1.4-.1 2-.3.5-.2 1-.5 1.4-.8s.6-.8.8-1.2c.2-.5.2-1 .2-1.6 0-.5-.1-1-.2-1.5-.2-.5-.4-.9-.8-1.3s-.8-.7-1.4-.9c-.5-.2-1.2-.3-2-.3h-4.7z" />
      </G>
    </Svg>
  );
};