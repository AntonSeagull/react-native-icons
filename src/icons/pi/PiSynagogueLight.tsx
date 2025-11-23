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

export const PiSynagogueLight = (props: IconProps) => {
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
        <Path d="M206 58.84V32a6 6 0 0 0-12 0v26.84A22 22 0 0 0 178 80v45.66l-44-25.14V72a6 6 0 0 0-12 0v28.52l-44 25.14V80a22 22 0 0 0-16-21.16V32a6 6 0 0 0-12 0v26.84A22 22 0 0 0 34 80v136a6 6 0 0 0 6 6h72a6 6 0 0 0 6-6v-40a10 10 0 0 1 20 0v40a6 6 0 0 0 6 6h72a6 6 0 0 0 6-6V80a22 22 0 0 0-16-21.16M200 70a10 10 0 0 1 10 10v26h-20V80a10 10 0 0 1 10-10M56 70a10 10 0 0 1 10 10v26H46V80a10 10 0 0 1 10-10m-10 48h20v92H46Zm82 36a22 22 0 0 0-22 22v34H78v-70.52l50-28.57 50 28.57V210h-28v-34a22 22 0 0 0-22-22m62 56v-92h20v92Z" />
      </G>
    </Svg>
  );
};