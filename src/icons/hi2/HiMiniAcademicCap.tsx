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

export const HiMiniAcademicCap = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 20 20"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 10, 10)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path fillRule="evenodd" d="M9.664 1.319a.75.75 0 0 1 .672 0 41 41 0 0 1 8.198 5.424.75.75 0 0 1-.254 1.285 31.4 31.4 0 0 0-7.86 3.83.75.75 0 0 1-.84 0 32 32 0 0 0-2.08-1.287V9.394c0-.244.116-.463.302-.592a36 36 0 0 1 3.305-2.033.75.75 0 0 0-.714-1.319 37 37 0 0 0-3.446 2.12A2.22 2.22 0 0 0 6 9.393v.38a31 31 0 0 0-4.28-1.746.75.75 0 0 1-.254-1.285 41 41 0 0 1 8.198-5.424ZM6 11.459a30 30 0 0 0-2.455-1.158 41 41 0 0 0-.39 3.114.75.75 0 0 0 .419.74q.792.384 1.554.82-.314.487-.739.914a.75.75 0 1 0 1.06 1.06c.37-.369.69-.77.96-1.193a26.6 26.6 0 0 1 3.095 2.348.75.75 0 0 0 .992 0 26.6 26.6 0 0 1 5.93-3.95.75.75 0 0 0 .42-.739 41 41 0 0 0-.39-3.114 30 30 0 0 0-5.199 2.801 2.25 2.25 0 0 1-2.514 0q-.614-.413-1.25-.797a7 7 0 0 1-1.084 3.45 27 27 0 0 0-1.281-.78A5.5 5.5 0 0 0 6 12v-.54Z" clipRule="evenodd" />
      </G>
    </Svg>
  );
};