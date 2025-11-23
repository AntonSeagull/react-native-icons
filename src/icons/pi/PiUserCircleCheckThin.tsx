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

export const PiUserCircleCheckThin = (props: IconProps) => {
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
        <Path d="M222 108.05a4 4 0 0 0-3.28 4.61A93.4 93.4 0 0 1 220 128a91.7 91.7 0 0 1-26.83 64.87 75.6 75.6 0 0 0-44.51-34 44 44 0 1 0-41.32 0 75.6 75.6 0 0 0-44.51 34A92 92 0 0 1 128 36a93.4 93.4 0 0 1 15.34 1.27 4 4 0 0 0 1.32-7.89A100 100 0 1 0 228 128a102 102 0 0 0-1.38-16.66 4 4 0 0 0-4.62-3.29M92 120a36 36 0 1 1 36 36 36 36 0 0 1-36-36m-23.13 78.42a68 68 0 0 1 118.26 0 91.8 91.8 0 0 1-118.26 0m166-155.59-32 32a4 4 0 0 1-5.66 0l-16-16a4 4 0 0 1 5.66-5.66L200 66.34l29.17-29.17a4 4 0 1 1 5.66 5.66Z" />
      </G>
    </Svg>
  );
};