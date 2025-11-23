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

export const PiCloudSnowLight = (props: IconProps) => {
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
        <Path d="M86 196a10 10 0 1 1-10-10 10 10 0 0 1 10 10m30 6a10 10 0 1 0 10 10 10 10 0 0 0-10-10m48-16a10 10 0 1 0 10 10 10 10 0 0 0-10-10m-96 40a10 10 0 1 0 10 10 10 10 0 0 0-10-10m88 0a10 10 0 1 0 10 10 10 10 0 0 0-10-10m74-134a74.09 74.09 0 0 1-74 74H76a50 50 0 1 1 10.2-99A74.08 74.08 0 0 1 230 92m-12 0a62.06 62.06 0 0 0-124-3.65 6 6 0 0 1-12-.7 76 76 0 0 1 1.07-9A38 38 0 1 0 76 154h80a62.07 62.07 0 0 0 62-62" />
      </G>
    </Svg>
  );
};