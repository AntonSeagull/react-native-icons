

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const IoPushOutline = (props: IconProps) => {

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
          <Path d="M336,336h40a40,40,0,0,0,40-40V88a40,40,0,0,0-40-40H136A40,40,0,0,0,96,88V296a40,40,0,0,0,40,40h40" />
        </G>
      </Svg>
    );
  }

