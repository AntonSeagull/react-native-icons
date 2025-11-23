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

export const PiTreasureChestFill = (props: IconProps) => {
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
        <Path d="M240 124v68a16 16 0 0 1-16 16H32a16 16 0 0 1-16-16v-68a4 4 0 0 1 4-4h36v64a8 8 0 0 0 8.53 8 8.17 8.17 0 0 0 7.47-8.27V120h40v20a4 4 0 0 0 4 4h24a4 4 0 0 0 4-4v-20h40v64a8 8 0 0 0 8.53 8 8.17 8.17 0 0 0 7.47-8.25V120h36a4 4 0 0 1 4 4m-56-84H72a56 56 0 0 0-56 56v4a4 4 0 0 0 4 4h36V64.27A8.17 8.17 0 0 1 63.47 56 8 8 0 0 1 72 64v40h40V92a4 4 0 0 1 4-4h24a4 4 0 0 1 4 4v12h40V64.27a8.17 8.17 0 0 1 7.47-8.27 8 8 0 0 1 8.53 8v40h36a4 4 0 0 0 4-4v-4a56 56 0 0 0-56-56" />
      </G>
    </Svg>
  );
};