

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const FcAddColumn = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 48 48"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M30,5H18c-2.2,0-4,1.8-4,4v30c0,2.2,1.8,4,4,4h12c2.2,0,4-1.8,4-4V9C34,6.8,32.2,5,30,5z M18,39V9h12l0,30 H18z" fill="#90CAF9" />
        </G>
      </Svg>
    );
  }

