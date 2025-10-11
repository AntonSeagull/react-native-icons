

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoToggleSharp = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 256, 256)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M368,112H144a144,144,0,0,0,0,288H368a144,144,0,0,0,0-288Zm0,230a86,86,0,1,1,86-86A85.88,85.88,0,0,1,368,342Z" />
        </G>
      </Svg>
    );
  }

