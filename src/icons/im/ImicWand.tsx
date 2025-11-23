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

export const ImicWand = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 16 16"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 8, 8)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M4 3 2 1H1v1l2 2zm1-3h1v2H5zm4 5h2v1H9zm1-3V1H9L7 3l1 1zM0 5h2v1H0zm5 4h1v2H5zM1 9v1h1l2-2-1-1zm14.781 4.781L5.842 3.842a.75.75 0 0 0-1.061 0l-.939.939a.75.75 0 0 0 0 1.061l9.939 9.939a.75.75 0 0 0 1.061 0l.939-.939a.75.75 0 0 0 0-1.061M7.5 8.5l-3-3 1-1 3 3z" />
      </G>
    </Svg>
  );
};