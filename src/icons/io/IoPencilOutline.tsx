

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPencilOutline = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 512 512"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M420.69,68.69,398.07,91.31l22.62,22.63,22.62-22.63a16,16,0,0,0,0-22.62h0A16,16,0,0,0,420.69,68.69Z" />
        </G>
      </Svg>
    );
  }

