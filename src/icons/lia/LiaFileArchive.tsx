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

export const LiaFileArchive = (props: IconProps) => {
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
        <Path d="M6 3v26h20V3Zm2 2h7v1h2V5h7v22H8Zm7 2v2h2V7Zm0 3v2h2v-2Zm0 3v2.188c-1.156.417-2 1.519-2 2.812 0 1.645 1.355 3 3 3s3-1.355 3-3c0-1.293-.844-2.395-2-2.812V13Zm1 4c.563 0 1 .438 1 1s-.437 1-1 1-1-.437-1-1 .438-1 1-1" />
      </G>
    </Svg>
  );
};