

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbArrowRotaryStraight = (props: IconProps) => {

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
          <Path d="M13 13m-3 0a3 3 0 1 0 6 0a3 3 0 1 0 -6 0" />
          <Path d="M13 16v5" />
          <Path d="M13 3v7" />
          <Path d="M9 7l4 -4l4 4" />
        </G>
      </Svg>
    );
  }

