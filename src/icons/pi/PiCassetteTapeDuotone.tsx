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

export const PiCassetteTapeDuotone = (props: IconProps) => {
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
        <Path d="m168 168 24 32H64l24-32Zm8-80a24 24 0 1 0 24 24 24 24 0 0 0-24-24m-72 24a24 24 0 1 0-24 24 24 24 0 0 0 24-24" opacity={0.2} />
        <Path d="M224 48H32a16 16 0 0 0-16 16v128a16 16 0 0 0 16 16h192a16 16 0 0 0 16-16V64a16 16 0 0 0-16-16M80 192l12-16h72l12 16Zm144 0h-28l-21.6-28.8a8 8 0 0 0-6.4-3.2H88a8 8 0 0 0-6.4 3.2L60 192H32V64h192zM176 80H80a32 32 0 0 0 0 64h96a32 32 0 0 0 0-64m-27.7 16a31.92 31.92 0 0 0 0 32h-40.6a31.92 31.92 0 0 0 0-32ZM64 112a16 16 0 1 1 16 16 16 16 0 0 1-16-16m112 16a16 16 0 1 1 16-16 16 16 0 0 1-16 16" />
      </G>
    </Svg>
  );
};