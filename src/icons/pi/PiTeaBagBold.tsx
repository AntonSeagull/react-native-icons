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

export const PiTeaBagBold = (props: IconProps) => {
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
        <Path d="M224 156a12 12 0 0 1-12-12V64a60 60 0 0 0-120 0v4H76.53a20.1 20.1 0 0 0-17.15 9.71l-20.53 34.21a20.07 20.07 0 0 0-2.85 10.3V216a20 20 0 0 0 20 20h96a20 20 0 0 0 20-20v-93.78a20 20 0 0 0-2.85-10.29l-20.53-34.22A20.1 20.1 0 0 0 131.47 68H116v-4a36 36 0 0 1 72 0v80a36 36 0 0 0 36 36 12 12 0 0 0 0-24m-94.79-64L148 123.32V212H60v-88.68L78.79 92H92v44a12 12 0 0 0 24 0V92Z" />
      </G>
    </Svg>
  );
};