

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const GiArrowCursor = (props: IconProps) => {

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
          <Path d="M123.193 29.635L121 406.18l84.31-82.836 65.87 159.02 67.5-27.96-65.87-159.02L391 294.342z" fill="#000" />
        </G>
      </Svg>
    );
  }

