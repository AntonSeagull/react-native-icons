

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbMoodSad2 = (props: IconProps) => {

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
          <Path d="M12 12m-9 0a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <Path d="M14.5 16.05a3.5 3.5 0 0 0 -5 0" />
          <Path d="M10 9.25c-.5 1 -2.5 1 -3 0" />
          <Path d="M17 9.25c-.5 1 -2.5 1 -3 0" />
        </G>
      </Svg>
    );
  }

