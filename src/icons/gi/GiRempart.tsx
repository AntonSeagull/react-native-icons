

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiRempart = (props: IconProps) => {

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
          <Path  d="M18 27v467h476V304h-46v64h-80v-64h-64v64h-80v-64h-64v64H80V192h48L18 27zm97 373h18v64h-18v-64zm144 0h18v64h-18v-64zm144 0h18v64h-18v-64z" />
        </G>
      </Svg>
    );
  }

