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

export const LiaMicrophoneAltSolid = (props: IconProps) => {
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
        <Path d="M21 4c-3.578 0-6.531 2.715-6.937 6.188L6 21.594l-.469.687.563.594.812.813-2.625 2.593L5.72 27.72l2.562-2.594L9.656 26.5l.719-.5 11.469-8.062C25.304 17.52 28 14.57 28 11c0-3.855-3.145-7-7-7m0 2c2.773 0 5 2.227 5 5a5 5 0 0 1-.812 2.75L18.25 6.813A5 5 0 0 1 21 6m-4.187 2.25 6.937 6.938A5 5 0 0 1 21 16c-2.773 0-5-2.227-5-5a5 5 0 0 1 .813-2.75m-2.438 4.938a7.07 7.07 0 0 0 4.406 4.437l-8.875 6.281-1.781-1.843Z" />
      </G>
    </Svg>
  );
};