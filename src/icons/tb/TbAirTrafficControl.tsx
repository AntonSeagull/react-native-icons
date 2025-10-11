

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbAirTrafficControl = (props: IconProps) => {

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
          <Path d="M11 3h2" />
          <Path d="M12 3v3" />
          <Path d="M5.998 6h12.004a2 2 0 0 1 1.916 2.575l-1.8 6a2 2 0 0 1 -1.916 1.425h-8.404a2 2 0 0 1 -1.916 -1.425l-1.8 -6a2 2 0 0 1 1.916 -2.575z" />
          <Path d="M8.5 6l1.5 10v5" />
          <Path d="M15.5 6l-1.5 10v5" />
        </G>
      </Svg>
    );
  }

