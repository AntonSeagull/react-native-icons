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

export const PiStickerBold = (props: IconProps) => {
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
        <Path d="M168 28H88a60.07 60.07 0 0 0-60 60v80a60.07 60.07 0 0 0 60 60h48a11.9 11.9 0 0 0 3.79-.62c27.63-9.21 78.38-60 87.59-87.59A11.9 11.9 0 0 0 228 136V88a60.07 60.07 0 0 0-60-60M52 168V88a36 36 0 0 1 36-36h80a36 36 0 0 1 36 36v36h-20a60.07 60.07 0 0 0-60 60v20H88a36 36 0 0 1-36-36m96 27.63V184a36 36 0 0 1 36-36h11.63C184 164.11 164.11 184 148 195.63" />
      </G>
    </Svg>
  );
};