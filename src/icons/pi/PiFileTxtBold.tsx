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

export const PiFileTxtBold = (props: IconProps) => {
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
        <Path d="M48 120a12 12 0 0 0 12-12V44h76v48a12 12 0 0 0 12 12h48v4a12 12 0 0 0 24 0V88a12 12 0 0 0-3.51-8.49l-56-56A12 12 0 0 0 152 20H56a20 20 0 0 0-20 20v68a12 12 0 0 0 12 12m135-40h-23V57Zm-25.27 79-15 21 15 21a12 12 0 1 1-19.49 14L128 200.65 117.76 215a12 12 0 1 1-19.52-14l15-21-15-21a12 12 0 1 1 19.52-14L128 159.35 138.24 145a12 12 0 1 1 19.52 14ZM92 152a12 12 0 0 1-12 12h-8v44a12 12 0 0 1-24 0v-44h-8a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12m136 0a12 12 0 0 1-12 12h-8v44a12 12 0 0 1-24 0v-44h-8a12 12 0 0 1 0-24h40a12 12 0 0 1 12 12" />
      </G>
    </Svg>
  );
};