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

export const LiaNimblr = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 32 32"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 16, 16)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M7 1v18h.025c-.008.166-.025.331-.025.5 0 5.238 4.262 9.5 9.5 9.5s9.5-4.262 9.5-9.5-4.262-9.5-9.5-9.5c-2.806 0-5.326 1.23-7.066 3.172zm9.5 11c4.136 0 7.5 3.364 7.5 7.5S20.636 27 16.5 27 9 23.636 9 19.5s3.364-7.5 7.5-7.5m-3 5a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3m6 0a1.5 1.5 0 0 0 0 3 1.5 1.5 0 0 0 0-3" />
      </G>
    </Svg>
  );
};