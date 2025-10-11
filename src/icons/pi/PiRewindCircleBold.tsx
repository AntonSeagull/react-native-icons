

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const PiRewindCircleBold = (props: IconProps) => {

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
          <Path  d="M128,20A108,108,0,1,0,236,128,108.12,108.12,0,0,0,128,20Zm0,192a84,84,0,1,1,84-84A84.09,84.09,0,0,1,128,212ZM180,96v64a12,12,0,0,1-19.5,9.37L124,140.17V160a12,12,0,0,1-19.5,9.37l-40-32a12,12,0,0,1,0-18.74l40-32A12,12,0,0,1,124,96v19.83l36.5-29.2A12,12,0,0,1,180,96Z" />
        </G>
      </Svg>
    );
  }

