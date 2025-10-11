

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowsShuffle = (props: IconProps) => {

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
          <Path d="M18 4l3 3l-3 3" />
          <Path d="M18 20l3 -3l-3 -3" />
          <Path d="M3 7h3a5 5 0 0 1 5 5a5 5 0 0 0 5 5h5" />
          <Path d="M21 7h-5a4.978 4.978 0 0 0 -3 1m-4 8a4.984 4.984 0 0 1 -3 1h-3" />
        </G>
      </Svg>
    );
  }

