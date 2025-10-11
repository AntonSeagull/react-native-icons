

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbFirstAidKitOff = (props: IconProps) => {

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
          <Path d="M8.595 4.577a2 2 0 0 1 1.405 -.577h4a2 2 0 0 1 2 2v2" />
          <Path d="M12 8h6a2 2 0 0 1 2 2v6m-.576 3.405a2 2 0 0 1 -1.424 .595h-12a2 2 0 0 1 -2 -2v-8a2 2 0 0 1 2 -2h2" />
          <Path d="M10 14h4" />
          <Path d="M12 12v4" />
          <Path d="M3 3l18 18" />
        </G>
      </Svg>
    );
  }

