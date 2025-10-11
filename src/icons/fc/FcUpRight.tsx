

  import {
    G,
    Path,
    Svg,
    Line
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcUpRight = (props: IconProps) => {

   const {
            size = 24,
            color = 'black',
            rotate = 0,
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
        transform={`rotate(${rotate}, 24, 24)`}
      >
        <G fill={color} stroke={color}>
          <Path  fill="#3F51B5" d="M6,27v13h8V27c0-2.2,1.8-4,4-4h17v-8H18C11.4,15,6,20.4,6,27z" />
          <Path  fill="#3F51B5" d="M6,27v13h8V27c0-2.2,1.8-4,4-4h17v-8H18C11.4,15,6,20.4,6,27z" />
        </G>
      </Svg>
    );
  }

