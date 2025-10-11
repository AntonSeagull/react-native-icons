

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowAutofitHeight = (props: IconProps) => {

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
          <Path d="M12 20h-6a2 2 0 0 1 -2 -2v-12a2 2 0 0 1 2 -2h6" />
          <Path d="M18 14v7" />
          <Path d="M18 3v7" />
          <Path d="M15 18l3 3l3 -3" />
          <Path d="M15 6l3 -3l3 3" />
        </G>
      </Svg>
    );
  }

