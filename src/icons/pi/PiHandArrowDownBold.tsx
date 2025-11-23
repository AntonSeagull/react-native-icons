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

export const PiHandArrowDownBold = (props: IconProps) => {
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
        <Path d="M232.76 137.88a28.39 28.39 0 0 0-24.63-4.88L172 141.26V140a32 32 0 0 0-32-32H89.94a35.76 35.76 0 0 0-25.45 10.54L43 140H20a20 20 0 0 0-20 20v40a20 20 0 0 0 20 20h100a12 12 0 0 0 2.91-.36l64-16a11.4 11.4 0 0 0 1.79-.6l38.82-16.54c.23-.09.45-.19.67-.3a28.61 28.61 0 0 0 4.57-48.32M24 164h12v32H24Zm193.68.61-37.51 16L118.52 196H60v-39l21.46-21.46a11.93 11.93 0 0 1 8.48-3.54H140a8 8 0 0 1 0 16h-28a12 12 0 0 0 0 24h32a12.2 12.2 0 0 0 2.69-.3l67-15.41.47-.12a4.61 4.61 0 0 1 5.82 4.44 4.58 4.58 0 0 1-2.3 4m-66.17-84.12a12 12 0 0 1 17-17L180 75V24a12 12 0 0 1 24 0v51l11.51-11.52a12 12 0 0 1 17 17l-32 32a12 12 0 0 1-17 0Z" />
      </G>
    </Svg>
  );
};