

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const LuUtilityPole = (props: IconProps) => {

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
          <Path d="M12 2v20" />
          <Path d="M2 5h20" />
          <Path d="M3 3v2" />
          <Path d="M7 3v2" />
          <Path d="M17 3v2" />
          <Path d="M21 3v2" />
          <Path d="m19 5-7 7-7-7" />
        </G>
      </Svg>
    );
  }

