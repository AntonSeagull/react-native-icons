

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbEmergencyBed = (props: IconProps) => {

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
          <Path d="M16 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M8 18m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
          <Path d="M4 8l2.1 2.8a3 3 0 0 0 2.4 1.2h11.5" />
          <Path d="M10 6h4" />
          <Path d="M12 4v4" />
          <Path d="M12 12v2l-2.5 2.5" />
          <Path d="M14.5 16.5l-2.5 -2.5" />
        </G>
      </Svg>
    );
  }

