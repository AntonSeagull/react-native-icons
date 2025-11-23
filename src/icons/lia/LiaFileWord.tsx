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

export const LiaFileWord = (props: IconProps) => {
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
        <Path d="M6 3v26h20V3Zm2 2h16v22H8Zm10 7v6.5c0 .215-.285.5-.5.5-.043 0 .02.047-.062-.062-.083-.11-.208-.387-.282-.688C17.008 17.652 17 17 17 17v-2h-2v4.5c0 .215-.285.5-.5.5s-.5-.285-.5-.5V13h-4v2h2v4.5c0 1.383 1.117 2.5 2.5 2.5.984 0 1.688-.645 2.094-1.469.3.188.52.469.906.469 1.383 0 2.5-1.117 2.5-2.5V14h2v-2Z" />
      </G>
    </Svg>
  );
};