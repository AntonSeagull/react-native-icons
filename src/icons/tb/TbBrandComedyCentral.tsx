

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBrandComedyCentral = (props: IconProps) => {

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
          <Path d="M5.343 17.657a8 8 0 1 0 0 -11.314" />
          <Path d="M13.828 9.172a4 4 0 1 0 0 5.656" />
        </G>
      </Svg>
    );
  }

