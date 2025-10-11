

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiMemoryThin = (props: IconProps) => {

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
          <Path  d="M232,60H24A12,12,0,0,0,12,72V200a4,4,0,0,0,8,0V180H44v20a4,4,0,0,0,8,0V180H76v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V180h24v20a4,4,0,0,0,8,0V72A12,12,0,0,0,232,60ZM20,72a4,4,0,0,1,4-4H232a4,4,0,0,1,4,4V172H20Zm92,76a4,4,0,0,0,4-4V96a4,4,0,0,0-4-4H48a4,4,0,0,0-4,4v48a4,4,0,0,0,4,4ZM52,100h56v40H52Zm92,48h64a4,4,0,0,0,4-4V96a4,4,0,0,0-4-4H144a4,4,0,0,0-4,4v48A4,4,0,0,0,144,148Zm4-48h56v40H148Z" />
        </G>
      </Svg>
    );
  }

