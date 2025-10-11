

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TfiFile = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 17 17"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 8.5, 8.5)`}
      >
        <G fill={color} stroke={color}>
          <Path  d="M9.667 0h-7.667v17h13v-11.692l-5.333-5.308zM10 1.742l3.273 3.258h-3.273v-3.258zM3 16v-15h6v5h5v10h-11z" />
        </G>
      </Svg>
    );
  }

