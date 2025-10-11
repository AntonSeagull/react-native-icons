

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbUmbrellaOff = (props: IconProps) => {

   const {
            size = 24,
            color = 'black'
        } = props;

    return (
      <Svg
        viewBox="0 0 24 24"
        width={size}
        height={size}
        fill="none"
      >
        <G fill={color}>
          <Path d="M12 12h-8c0 -2.209 .895 -4.208 2.342 -5.656m2.382 -1.645a8 8 0 0 1 11.276 7.301l-4 0" />
          <Path d="M12 12v6a2 2 0 1 0 4 0" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

