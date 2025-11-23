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

export const SlControlEnd = (props: IconProps) => {
  const {
    size = 24,
    fill = 'black',
    stroke = 'black',
    rotate = 0,
  } = props;

  return (
    <Svg
      viewBox="0 0 1024 1024"
      width={size}
      height={size}
      fill="none"
      transform={`rotate(${rotate}, 512, 512)`}
    >
      <G fill={fill} stroke={stroke}>
        <Path d="M943.936 0c-17.664 0-31.998 14.338-31.998 32.002v470c-2.88-18.192-13.44-34.465-29.375-44.37L146.851 11.026a64.15 64.15 0 0 0-33.776-9.649A63.77 63.77 0 0 0 81.987 9.44c-20.32 11.28-32.912 32.704-32.912 55.936l-1.008 893.232a63.96 63.96 0 0 0 32.912 55.937 63.93 63.93 0 0 0 31.087 8.064c11.712 0 23.471-3.215 33.775-9.664l736.72-446.608c15.936-9.872 26.495-26.16 29.375-44.352V992c0 17.664 14.336 32 32 32s32-14.336 32-32V32c0-17.664-14.32-32-32-32.001zM112.065 958.61l.992-893.216 735.744 446.592z" />
      </G>
    </Svg>
  );
};