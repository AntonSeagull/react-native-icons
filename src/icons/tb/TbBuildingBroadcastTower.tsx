

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbBuildingBroadcastTower = (props: IconProps) => {

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
          <Path d="M12 12m-1 0a1 1 0 1 0 2 0a1 1 0 1 0 -2 0" />
          <Path d="M16.616 13.924a5 5 0 1 0 -9.23 0" />
          <Path d="M20.307 15.469a9 9 0 1 0 -16.615 0" />
          <Path d="M9 21l3 -9l3 9" />
          <Path d="M10 19h4" />
        </G>
      </Svg>
    );
  }

