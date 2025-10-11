

  import {
    G,
    Path,
    Svg,
} from 'react-native-svg';
 import type { IconProps } from '../../types';

  export const TbLetterKSmall = (props: IconProps) => {

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
          <Path d="M10.5 8v8" />
          <Path d="M14.5 8l-3 4l3 4" />
          <Path d="M10.5 12h1" />
        </G>
      </Svg>
    );
  }

