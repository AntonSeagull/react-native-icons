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

export const PiFourKBold = (props: IconProps) => {
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
        <Path d="M20 44a12 12 0 0 1 12-12h192a12 12 0 0 1 0 24H32a12 12 0 0 1-12-12m204 156H32a12 12 0 0 0 0 24h192a12 12 0 0 0 0-24M148 68a12 12 0 0 0-12 12v96a12 12 0 0 0 24 0v-27.49l8.44-9.65 25.19 43.19A12 12 0 0 0 214.37 170l-29.26-50.14L213 87.9a12 12 0 1 0-18-15.8l-35 40V80a12 12 0 0 0-12-12M80 176v-12H36a12 12 0 0 1-9.47-19.37l56-72A12 12 0 0 1 104 80v60h4a12 12 0 0 1 0 24h-4v12a12 12 0 0 1-24 0m0-36v-25l-19.46 25Z" />
      </G>
    </Svg>
  );
};