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

export const TbBrandTailwind = (props: IconProps) => {
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
        <Path d="M11.667 6Q7.933 6 7 9.667q1.4-1.834 3.267-1.375c.71.174 1.217.68 1.778 1.24.916.912 2 1.968 4.288 1.968q3.734 0 4.667-3.667-1.4 1.834-3.267 1.375c-.71-.174-1.217-.68-1.778-1.24C15.039 7.056 13.98 6 11.667 6m-4 6.5Q3.933 12.5 3 16.167q1.4-1.834 3.267-1.375c.71.174 1.217.68 1.778 1.24.916.912 1.975 1.968 4.288 1.968q3.734 0 4.667-3.667-1.4 1.834-3.267 1.375c-.71-.174-1.217-.68-1.778-1.24-.916-.912-1.975-1.968-4.288-1.968" />
      </G>
    </Svg>
  );
};