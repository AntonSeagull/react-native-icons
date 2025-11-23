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

export const PiHandSwipeRightBold = (props: IconProps) => {
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
        <Path d="M220 148v36c0 13.85-1.63 26.52-4.58 35.68a12 12 0 0 1-22.84-7.36c2.14-6.65 3.42-17.24 3.42-28.32v-36a8 8 0 0 0-16 0v4a12 12 0 0 1-24 0v-20a8 8 0 0 0-16 0v12a12 12 0 0 1-24 0V76a8 8 0 0 0-16 0v108a12 12 0 0 1-22.18 6.34l-18.68-30-.21-.34A8 8 0 0 0 45 167.92l25.27 41.88a12 12 0 0 1-20.56 12.39l-25.31-42-.12-.2A32 32 0 0 1 76 142.83V76a32 32 0 0 1 64 0v25a32 32 0 0 1 36.78 17A32 32 0 0 1 220 148m32.48-100.49-32-32a12 12 0 0 0-17 17L215 44h-43a12 12 0 0 0 0 24h43l-11.49 11.51a12 12 0 1 0 17 17l32-32a12 12 0 0 0-.03-17" />
      </G>
    </Svg>
  );
};