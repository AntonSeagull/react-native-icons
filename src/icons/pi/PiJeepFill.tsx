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

export const PiJeepFill = (props: IconProps) => {
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
        <Path d="M248 103.47a8.17 8.17 0 0 0-8.27-7.47H232a8 8 0 0 0-.18-1.68l-10.64-49.67A16.08 16.08 0 0 0 205.53 32H50.47a16.08 16.08 0 0 0-15.65 12.65L24.18 94.32A8 8 0 0 0 24 96h-7.73A8.17 8.17 0 0 0 8 103.47a8 8 0 0 0 8 8.53h8v88a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16v-16h20a4 4 0 0 0 4-4v-51.73a8.17 8.17 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v52a4 4 0 0 0 4 4h8a4 4 0 0 0 4-4v-51.75a8.17 8.17 0 0 1 7.47-8.25 8 8 0 0 1 8.53 8v52a4 4 0 0 0 4 4h20v16a16 16 0 0 0 16 16h24a16 16 0 0 0 16-16V112h8a8 8 0 0 0 8-8.53M68 144a12 12 0 1 1 12-12 12 12 0 0 1-12 12m120 0a12 12 0 1 1 12-12 12 12 0 0 1-12 12M40.18 96l10.29-48h155.06l10.29 48Z" />
      </G>
    </Svg>
  );
};