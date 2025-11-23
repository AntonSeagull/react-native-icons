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

export const SiPoetry = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 24 24"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 12, 12)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M21.604 0a19.14 19.14 0 0 1-5.268 13.213L2.396 0l13.583 13.583a19.15 19.15 0 0 1-13.583 5.624V0zm-1.911 17.297A24.46 24.46 0 0 1 7.189 24l-4.053-4.053a19.9 19.9 0 0 0 13.37-5.838z" />
      </G>
    </Svg>
  );
};