

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiFramerLogoBold = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 256 256"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 128, 128)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M212,104V40a12,12,0,0,0-12-12H56a12,12,0,0,0-8,21L96.44,92H56a12,12,0,0,0-12,12v64a12,12,0,0,0,3.52,8.49l72,72A12,12,0,0,0,140,240V180h60a12,12,0,0,0,8-21l-48.41-43H200A12,12,0,0,0,212,104Zm-43.56,52H128a12,12,0,0,0-12,12v43L68,163V116h55.44ZM188,92H132.56l-45-40H188Z" />
        </G>
      </Svg>
    );
  }

