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

export const CgArrowLongRightR = (props: IconProps) => {
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
        <Path fill="currentColor" fillRule="evenodd" d="m19.351 7.725 4.25 4.236-4.235 4.25-1.417-1.412 1.814-1.82-11.866.04-3.255 3.256-4.243-4.243L4.642 7.79l3.229 3.23 11.911-.04-1.843-1.837zm-14.71 5.721 1.415-1.414-1.414-1.414-1.415 1.414z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};