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

export const PiHockeyThin = (props: IconProps) => {
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
        <Path d="M224 156h-94.95l-94-110.59A4 4 0 1 0 29 50.59l133.56 157.18a12 12 0 0 0 9.14 4.23H224a12 12 0 0 0 12-12v-32a12 12 0 0 0-12-12m-55.35 46.59L135.85 164H196v40h-24.3a4 4 0 0 1-3.05-1.41M228 200a4 4 0 0 1-4 4h-20v-40h20a4 4 0 0 1 4 4Zm-124-16.94-16.6 19.53a4 4 0 0 1-3 1.41H60v-40h25.2a4 4 0 0 0 0-8H32a12 12 0 0 0-12 12v32a12 12 0 0 0 12 12h52.3a12 12 0 0 0 9.14-4.23l16.61-19.53a4 4 0 0 0-6.1-5.18ZM28 200v-32a4 4 0 0 1 4-4h20v40H32a4 4 0 0 1-4-4m125.41-68.95a4 4 0 0 1-.46-5.64l68-80a4 4 0 1 1 6.1 5.18l-68 80a4 4 0 0 1-5.64.46" />
      </G>
    </Svg>
  );
};