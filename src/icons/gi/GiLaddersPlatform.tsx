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

export const GiLaddersPlatform = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 512 512"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 256, 256)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M375 16v199h18v-14h46v14h18V16h-18v39h-46V16zm18 57h46v46h-46zm0 64h46v46h-46zM25 233v46h462v-46zm30 64v199h18v-39h46v39h18V297h-18v14H73v-14zm18 32h46v46H73zm0 64h46v46H73z" />
      </G>
    </Svg>
  );
};